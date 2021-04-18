import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import {
  FormComponent,
  SpanError,
  Input,
  ButtonForm,
  Label,
  DivInput,
} from "./styles";

import api from "../../services/api";

import {
  notifyRegisterSuccess,
  notifyErrorEmployee,
} from "../../services/notifyData";

const FormNovoFuncionario = ({ handleClose }) => {
  const [error] = useState(false);

  const userId = JSON.parse(localStorage.getItem("userId"));
  const token = JSON.parse(localStorage.getItem("token"));

  const schema = yup.object().shape({
    name: yup.string().required("campo Obrigatório!"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (userData) => {
    userData = { ...userData, barberId: userId };

    api
      .post(`/employee`, userData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        handleClose();
        notifyRegisterSuccess();
      })
      .catch((e) => {
        notifyErrorEmployee(e.response);
      });
  };

  return (
    <FormComponent onSubmit={handleSubmit(onSubmit)}>
      <DivInput>
        <Label>nome do funcionário</Label>
        <Input name="name" ref={register} placeholder="joao" />
        {!!errors && <SpanError>{errors.name?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <ButtonForm type="submit">Cadastrar</ButtonForm>
      </DivInput>
      <DivInput></DivInput>
      {error && <SpanError> Usuário ou senha incorretas! </SpanError>}
    </FormComponent>
  );
};

export default FormNovoFuncionario;
