import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import {
  FormComponent,
  SpanError,
  Input,
  ButtonForm,
  Label,
  DivInput,
  DivCheck, FormControl, CheckboxLazer, ImgCheck, LabelCheck, 
} from "./styles";


const FormNovoFuncionario = () => {
  // const { login } = useProviderUser();

  const [error, setError] = useState(false);
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("campo Obrigatório!"),
  
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (userData) => {
    console.log(userData);
    // login(userData, setError, history, reset);
  };

  return (
    <FormComponent onSubmit={handleSubmit(onSubmit)}>

      <DivInput>
        <Label>nome do funcionário</Label>
        <Input name="name" ref={register} />
        {!!errors && <SpanError>{errors.name?.message}</SpanError>}
      </DivInput>

      <DivCheck id="DivCheck">
          <FormControl id='FormControl'
            control={
              <CheckboxLazer id="CheckboxLazer"
                icon={<ImgCheck src='./img/iconCheck.png' alt='' />}
                checkedIcon={<ImgCheck src='./img/iconCheckOn.png' alt='' />}
              />}
            label={<LabelCheck>HomeOffice</LabelCheck>}
          />
        </DivCheck>

      <DivInput>
        <ButtonForm type="submit">Cadastrar</ButtonForm>
      </DivInput>
      <DivInput></DivInput>
      {error && <SpanError> Usuário ou senha incorretas! </SpanError>}
    </FormComponent>
  );
};

export default FormNovoFuncionario;