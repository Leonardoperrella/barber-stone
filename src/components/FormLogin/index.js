import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import {
  FormComponent,
  SpanError,
  Input,
  ButtonForm,
  Label,
  DivInput,
} from "../../styles/Form.styles";

const FormLogin = () => {
  // const { login } = useProviderUser();

  const [error, setError] = useState(false);
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("email inválido").required("campo Obrigatório!"),
    senha: yup
      .string()
      .min(6, "mínimo de 6 caracteres")
      .required("campo obrigatório!"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    //'Access-Control-Allow-Origin'
    api
      .post("login", data, {
        headers: { "Access-Control-Allow-Origin": "http://localhost:3000" },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  return (
    <FormComponent onSubmit={handleSubmit(onSubmit)}>
      <DivInput>
        <Label>Email</Label>
        <Input name="email" ref={register} />
        {!!errors && <SpanError>{errors.email?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>Senha</Label>
        <Input name="senha" type="password" ref={register} />
        {!!errors && <SpanError>{errors.senha?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <ButtonForm type="submit">Cadastrar</ButtonForm>
      </DivInput>
      <DivInput></DivInput>
      {error && <SpanError> Usuário ou senha incorretas! </SpanError>}
    </FormComponent>
  );
};

export default FormLogin;
