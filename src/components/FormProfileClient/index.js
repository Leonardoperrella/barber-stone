import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { useUser } from "../../providers/User";
import {
  SpanError,
  Input,
  ButtonForm,
  Label,
  DivInput,
  FormUpdate,
  ButtonsDiv,
} from "./styles";
import {
  notifyErrorUser,
  notifyRegisterSuccess,
} from "../../services/notifyData";

const FormProfileClient = ({ setRender }) => {
  const { isNew, setIsNew } = useUser();
  const [error] = useState(false);
  const [userr, setuser] = useState([]);
  const userId = JSON.parse(localStorage.getItem("userId"));
  const token = JSON.parse(localStorage.getItem("token"));

  const schema = yup.object().shape({
    name: yup.string().required("campo Obrigatório!"),
    lastName: yup.string().required("campo Obrigatório!"),
    address: yup.string().required("campo Obrigatório!"),
    phone: yup.string().required("campo Obrigatório!"),
    zipCode: yup.string().required("campo Obrigatório!"),
    city: yup.string().required("campo Obrigatório!"),
    state: yup.string().required("campo Obrigatório!"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (userData) => {
    const u = userData;
    if (!!u.phone || !!u.zipCode || !!u.city || !!u.state || !!u.address) {
      isNew && setRender(true);
      setIsNew(false);
    }
    api
      .patch(`/users/${userId}`, userData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        notifyRegisterSuccess();
      })
      .catch((e) => {
        notifyErrorUser(e.response);
      });
  };

  const getUser = () => {
    api
      .get(`/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const u = response.data;
        setuser(u);
      });
  };

  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormUpdate onSubmit={handleSubmit(onSubmit)}>
      <DivInput>
        <Label>Nome</Label>
        <Input
          name="name"
          ref={register}
          defaultValue={userr.name}
          placeholder="joao"
        />
        {!!errors && <SpanError>{errors.name?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>Sobrenome</Label>
        <Input
          name="lastName"
          ref={register}
          defaultValue={userr.lastName}
          placeholder="da silva"
        />
        {!!errors && <SpanError>{errors.lastName?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>Telefone</Label>
        <Input
          name="phone"
          ref={register}
          defaultValue={userr.phone}
          placeholder="12345678"
        />
        {!!errors && <SpanError>{errors.phone?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>CEP</Label>
        <Input
          name="zipCode"
          ref={register}
          defaultValue={userr.zipCode}
          placeholder="12345678"
        />
        {!!errors && <SpanError>{errors.zipCode?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>Cidade</Label>
        <Input
          name="city"
          ref={register}
          defaultValue={userr.city}
          placeholder="curitiba"
        />
        {!!errors && <SpanError>{errors.city?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>Estado</Label>
        <Input
          name="state"
          ref={register}
          defaultValue={userr.state}
          placeholder="paraná"
        />
        {!!errors && <SpanError>{errors.state?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>Endereço</Label>
        <Input
          name="address"
          ref={register}
          isDesktop
          defaultValue={userr.address}
          placeholder="rua mimosa, 123"
        />
        {!!errors && <SpanError>{errors.address?.message}</SpanError>}
      </DivInput>
      <ButtonsDiv>
        <ButtonForm onClick={refreshPage}>Cancelar</ButtonForm>
        <ButtonForm type="submit">Salvar</ButtonForm>
      </ButtonsDiv>
      {error && <SpanError> Usuário ou senha incorretas! </SpanError>}
    </FormUpdate>
  );
};

export default FormProfileClient;
