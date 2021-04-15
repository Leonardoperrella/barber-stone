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
  DivCheck,
  FormControl,
  CheckboxLazer,
  ImgCheck,
  LabelCheck,
} from "./styles";

import api from "../../services/api";

import check from "../../images/noCheck.svg";
import checked from "../../images/check.svg";

import { notifyRegisterSuccess } from "../../services/notifyData";

const FormNovoFuncionario = () => {
  const [error] = useState(false);

  const [iconState, setIconState] = useState({
    homeOffice: false,
  });

  const userId = JSON.parse(localStorage.getItem("userId"));
  const token = JSON.parse(localStorage.getItem("token"));

  const { homeOffice } = iconState;

  const schema = yup.object().shape({
    name: yup.string().required("campo Obrigatório!"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleChange = (event) => {
    setIconState({
      ...iconState,
      [event.target.name]: event.target.checked,
    });
  };

  const onSubmit = (userData) => {
    const { homeOffice } = iconState;
    userData = { ...userData, homeOffice, barberId: userId };
    console.log(userData);

    api
      .post(`/employee`, userData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response.data);
        notifyRegisterSuccess();
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  return (
    <FormComponent onSubmit={handleSubmit(onSubmit)}>
      <DivInput>
        <Label>nome do funcionário</Label>
        <Input name="name" ref={register} />
        {!!errors && <SpanError>{errors.name?.message}</SpanError>}
      </DivInput>
      <DivCheck id="DivCheck">
        <FormControl
          id="FormControl"
          control={
            <CheckboxLazer
              icon={<ImgCheck src={check} />}
              checkedIcon={<ImgCheck src={checked} />}
              name="homeOffice"
              checked={homeOffice}
              onChange={handleChange}
            />
          }
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
