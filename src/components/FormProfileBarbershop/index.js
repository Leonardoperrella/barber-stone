import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { SpanError, Input, ButtonForm, Label, DivInput, CheckboxLazer, LabelCheck, DivCheck,
         FormControl, ImgCheck, FormUpdate } from "./styles";

const FormProfileBarberShop = () => {
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
    <FormUpdate onSubmit={handleSubmit(onSubmit)}>
      <DivInput>
        <Label>Novo Nome</Label>
        <Input name='name' ref={register}/>
        {!!errors && <SpanError>{errors.name?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>Endereço</Label>
        <Input name="endereco" ref={register} />
        {!!errors && <SpanError>{errors.sobrenome?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>Telefone</Label>
        <Input name="telefone" ref={register}/>
        {!!errors && <SpanError>{errors.sobrenome?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>CEP</Label>
        <Input name="cep" ref={register}/>
        {!!errors && <SpanError>{errors.sobrenome?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>Cidade</Label>
        <Input name="cidade" ref={register}/>
        {!!errors && <SpanError>{errors.sobrenome?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>Estado</Label>
        <Input name="estado" ref={register}/>
        {!!errors && <SpanError>{errors.sobrenome?.message}</SpanError>}
      </DivInput>
      <DivInput>
        <Label>Descricao</Label>
        <Input name="descricao" ref={register} style={{height:'150px'}} isDesktop />
        {!!errors && <SpanError>{errors.email?.message}</SpanError>}
      </DivInput>
      <Label isDesktop >Opções de lazer</Label>
      <DivCheck>
        <FormControl
          control={
            <CheckboxLazer 
              icon={<ImgCheck src='./img/iconCheck.png' alt='' />}
              checkedIcon={<ImgCheck src='./img/iconCheckOn.png' alt='' />}
            />}
            label={<LabelCheck>sinuca</LabelCheck>}
        />
      </DivCheck>
      <DivCheck>
        <FormControl
          control={
            <CheckboxLazer 
              icon={<ImgCheck src='./img/iconCheck.png' alt='' />}
              checkedIcon={<ImgCheck src='./img/iconCheckOn.png' alt=''/>}
            />}
            label={<LabelCheck>Churrasco</LabelCheck>}
        />
      </DivCheck>
      <DivCheck>
        <FormControl
          control={
            <CheckboxLazer 
              icon={<ImgCheck src='./img/iconCheck.png' alt='' />}
              checkedIcon={<ImgCheck src='./img/iconCheckOn.png' alt='' />}
            />}
            label={<LabelCheck>playground</LabelCheck>}
        />
      </DivCheck>
      <DivCheck>
        <FormControl
          control={
            <CheckboxLazer 
              icon={<ImgCheck src='./img/iconCheck.png' alt='' />}
              checkedIcon={<ImgCheck src='./img/iconCheckOn.png' alt='' />}
            />}
            label={<LabelCheck>bar</LabelCheck>}
        />
      </DivCheck>
      <DivInput>
        <ButtonForm type="submit">Cancelar</ButtonForm>
      </DivInput>
      <DivInput>
        <ButtonForm type="submit">Salvar</ButtonForm>
      </DivInput>
      <DivInput>
      </DivInput>
      {error && <SpanError> Usuário ou senha incorretas! </SpanError>}
    </FormUpdate>
  );
};

export default FormProfileBarberShop;