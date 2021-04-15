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
import {
  existingEmail,
  notifyRegisterSuccess,
} from "../../services/notifyData";

const FormClientRegister = () => {
  // const { login } = useProviderUser();

  const [error] = useState(false);
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("campo Obrigatório!"),
    lastName: yup.string().required("campo Obrigatório!"),
    email: yup.string().email("email inválido").required("campo Obrigatório!"),
    password: yup
      .string()
      .min(6, "mínimo de 6 caracteres")
      .required("campo obrigatório!"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    data = { ...data, isBarber: false, scissors: 0 };

    api
      .post("/register", data)
      .then((response) => {
        console.log(response.data);
        notifyRegisterSuccess();
        setTimeout(() => {
          history.push("/");
        }, 2000);
      })
      .catch((e) => {
        console.log(e.response);
        existingEmail(e.response.data);
      });
  };

  return (
    <FormComponent onSubmit={handleSubmit(onSubmit)}>
      <DivInput>
        <Label>Nome</Label>
        <Input name="name" ref={register} />
        {!!errors && <SpanError>{errors.name?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>Sobrenome</Label>
        <Input name="lastName" ref={register} />
        {!!errors && <SpanError>{errors.lastName?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>Email</Label>
        <Input name="email" ref={register} />
        {!!errors && <SpanError>{errors.email?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>Senha</Label>
        <Input name="password" type="password" ref={register} />
        {!!errors && <SpanError>{errors.password?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <ButtonForm type="submit">Cadastrar</ButtonForm>
      </DivInput>
      <DivInput></DivInput>
      {error && <SpanError> Usuário ou senha incorretas! </SpanError>}
    </FormComponent>
  );
};

export default FormClientRegister;
