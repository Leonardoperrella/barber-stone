import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useEffect } from "react";
import api from "../../services/api";
import {
  SpanError,
  Input,
  ButtonForm,
  Label,
  DivInput,
  FormUpdate,
  ButtonsDiv,
} from "./styles";
import { notifyError, notifyRegisterSuccess } from "../../services/notifyData";

const FormProfileClient = () => {
  // const { login } = useProviderUser();

  const [error] = useState(false);
  const [user, setuser] = useState([]);
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
    api
      .patch(`/users/${userId}`, userData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        notifyRegisterSuccess();
      })
      .catch((e) => {
        notifyError(e.response);
      });
  };

  const getUser = () => {
    api
      .get(`/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setuser(response.data);
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
        <Input name="name" ref={register} defaultValue={user.name} />
        {!!errors && <SpanError>{errors.name?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>Sobrenome</Label>
        <Input name="lastName" ref={register} defaultValue={user.lastName} />
        {!!errors && <SpanError>{errors.lastName?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>Telefone</Label>
        <Input name="phone" ref={register} defaultValue={user.phone} />
        {!!errors && <SpanError>{errors.phone?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>CEP</Label>
        <Input name="zipCode" ref={register} defaultValue={user.zipCode} />
        {!!errors && <SpanError>{errors.zipCode?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>Cidade</Label>
        <Input name="city" ref={register} defaultValue={user.city} />
        {!!errors && <SpanError>{errors.city?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>Estado</Label>
        <Input name="state" ref={register} defaultValue={user.state} />
        {!!errors && <SpanError>{errors.state?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>Endereço</Label>
        <Input
          name="address"
          ref={register}
          isDesktop
          defaultValue={user.address}
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
