import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import {
  SpanError,
  Input,
  ButtonForm,
  Label,
  DivInput,
  FormUpdate,
  ButtonsDiv,
} from "./styles";

const FormProfileClient = () => {
  // const { login } = useProviderUser();

  const [error, setError] = useState(false);
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("campo Obrigatório!"),
    sobrenome: yup.string().required("campo Obrigatório!"),
    email: yup.string().email("email inválido").required("campo Obrigatório!"),
    senha: yup
      .string()
      .min(6, "mínimo de 6 caracteres")
      .required("campo obrigatório!"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (userData) => {
    console.log(userData);
    // login(userData, setError, history, reset);
  };

  return (
    <FormUpdate onSubmit={handleSubmit(onSubmit)}>
      <DivInput>
        <Label>Novo Nome</Label>
        <Input name="name" ref={register} />
        {!!errors && <SpanError>{errors.name?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>Novo Sobrenome</Label>
        <Input name="sobrenome" ref={register} />
        {!!errors && <SpanError>{errors.sobrenome?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>Telefone</Label>
        <Input name="sobrenome" ref={register} />
        {!!errors && <SpanError>{errors.sobrenome?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>CEP</Label>
        <Input name="sobrenome" ref={register} />
        {!!errors && <SpanError>{errors.sobrenome?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>Cidade</Label>
        <Input name="sobrenome" ref={register} />
        {!!errors && <SpanError>{errors.sobrenome?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>Estado</Label>
        <Input name="sobrenome" ref={register} />
        {!!errors && <SpanError>{errors.sobrenome?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>Endereço</Label>
        <Input name="email" ref={register} isDesktop />
        {!!errors && <SpanError>{errors.email?.message}</SpanError>}
      </DivInput>
      <ButtonsDiv>
        <ButtonForm type="submit">Cancelar</ButtonForm>
        <ButtonForm type="submit">Salvar</ButtonForm>
      </ButtonsDiv>
      {error && <SpanError> Usuário ou senha incorretas! </SpanError>}
    </FormUpdate>
  );
};

export default FormProfileClient;
