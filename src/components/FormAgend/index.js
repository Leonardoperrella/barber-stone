import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import {
  FormComponent,
  SpanError,
  Select,
  ButtonForm,
  Label,
  DivInput,
  Price,
} from "./styles";

import TextField from "@material-ui/core/TextField";

import { ThemeProvider, createMuiTheme } from "@material-ui/core";

const FormAgendamentos = () => {
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
  };

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#bb8c4b",
      },
      text: {
        primary: "#f7f4f3",
        secondary: "#f7f4f3",
        disabled: "#f00",
        hint: "#f00",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <FormComponent onSubmit={handleSubmit(onSubmit)}>
        <DivInput>
          <Label>Horário</Label>
          <TextField
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            defaultValue="2021-04-12T10:30"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </DivInput>
        <DivInput>
          <Label>Serviço</Label>
          <Select>
            <option value="1" selected>
              Apenas cabelo
            </option>
            <option value="2">Apenas barba</option>
            <option value="3">Cabelo + barba</option>
          </Select>
        </DivInput>
        <DivInput>
          <Price>
            Preço <span>R$30</span>
          </Price>
        </DivInput>
        <DivInput>
          <ButtonForm type="submit">Agendar</ButtonForm>
        </DivInput>
        {error && <SpanError> Usuário ou senha incorretas! </SpanError>}
      </FormComponent>
    </ThemeProvider>
  );
};

export default FormAgendamentos;
