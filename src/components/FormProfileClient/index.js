import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { SpanError, Input, ButtonForm, Label, DivInput } from "./styles";

const FormProfileClient = () => {
  // const { login } = useProviderUser();

  const [error, setError] = useState(false);
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("campo Obrigatório!"),
    sobrenome: yup.string().required("campo Obrigatório!"),
    email: yup.string().email('email inválido').required("campo Obrigatório!"),
    senha: yup.string().min(6, "mínimo de 6 caracteres").required("campo obrigatório!"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (userData) => {
    console.log(userData)
    // login(userData, setError, history, reset);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DivInput>
        <Label>Novo Nome</Label>
        <Input name='name' ref={register}/>
        {!!errors && <SpanError>{errors.name?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>Novo Sobrenome</Label>
        <Input name="sobrenome" ref={register}/>
        {!!errors && <SpanError>{errors.sobrenome?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>Telefone</Label>
        <Input name="sobrenome" ref={register}/>
        {!!errors && <SpanError>{errors.sobrenome?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>CEP</Label>
        <Input name="sobrenome" ref={register}/>
        {!!errors && <SpanError>{errors.sobrenome?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>Cidade</Label>
        <Input name="sobrenome" ref={register}/>
        {!!errors && <SpanError>{errors.sobrenome?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>Estado</Label>
        <Input name="sobrenome" ref={register}/>
        {!!errors && <SpanError>{errors.sobrenome?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>Endereço</Label>
        <Input name="email" ref={register}/>
        {!!errors && <SpanError>{errors.email?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <ButtonForm type="submit">Cancelar</ButtonForm>
      </DivInput>
      <DivInput>
        <ButtonForm type="submit">Salvar</ButtonForm>
      </DivInput>
      <DivInput>
      </DivInput>
      {error && <SpanError> Usuário ou senha incorretas! </SpanError>}
    </form>
  );
};

export default FormProfileClient;