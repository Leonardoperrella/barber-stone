import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { useSchedule } from "../../providers/Schedule";
import {
  FormComponent,
  SpanError,
  Select,
  ButtonForm,
  Label,
  DivInput,
  Price,
  DivInputCalendar,
  TextFieldStyled,
} from "./styles";

import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import api from "../../services/api";
import { notifyError, notifyRegisterSuccess } from "../../services/notifyData";

const FormAgendamentos = ({ barberId, handleClose }) => {
  const { getSchedule, setGetSchedule } = useSchedule();
  const token = JSON.parse(localStorage.getItem("token"));
  const userId = JSON.parse(localStorage.getItem("userId"));
  const [error] = useState(false);
  const [value, setValue] = useState("Apenas cabelo");
  const [employees, setEmployees] = useState([]);

  const [options] = useState({
    "Apenas cabelo": 35,
    "Apenas barba": 25,
    "Cabelo + barba": 50,
  });

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const DateTime = new Date(tomorrow).toLocaleString().split(" ");
  const day = DateTime[0].split("/")[0];
  const month = DateTime[0].split("/")[1];
  const year = DateTime[0].split("/")[2];
  const hour = DateTime[1].split("/")[0].split(":")[0];
  const minute = DateTime[1].split("/")[0].split(":")[1];

  const schema = yup.object().shape({
    dateTime: yup.date().min(tomorrow, "Mínimo de 24h para agendar"),
    service: yup.string(),
    price: yup.string(),
    profissionalId: yup.string(),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const getEmployee = () => {
    api
      .get(`/employee/?barberId=${barberId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((e) => {
        notifyError(e.response);
      });
  };

  useEffect(() => {
    getEmployee();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (userData) => {
    const { dateTime, service } = userData;
    const price = options[service];
    userData = {
      ...userData,
      dateTime: dateTime.getTime(),
      price,
      barberId: barberId,
      userId: userId,
    };

    api
      .post("/scheduling", userData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        handleClose();
        setGetSchedule(!getSchedule);
        notifyRegisterSuccess();
      })
      .catch((e) => {
        notifyError(e.response);
      });
  };

  const handleChange = (event) => {
    setValue(event.target.value);
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
        <DivInputCalendar>
          <Label>Horário</Label>
          <TextFieldStyled
            name="dateTime"
            inputRef={register}
            label="Data e Hora"
            type="datetime-local"
            defaultValue={`${year}-${month}-${day}T${hour}:${minute}`}
            InputLabelProps={{
              shrink: true,
            }}
          />
          {!!errors && <SpanError>{errors.dateTime?.message}</SpanError>}
        </DivInputCalendar>
        <DivInput>
          <Label>Serviço</Label>
          <Select
            onChange={handleChange}
            value={value}
            name="service"
            ref={register}
          >
            <option value="Apenas cabelo">Apenas cabelo</option>
            <option value="Apenas barba">Apenas barba</option>
            <option value="Cabelo + barba">Cabelo + barba</option>
          </Select>
        </DivInput>
        <DivInput>
          <Label>Profissional</Label>
          <Select name="profissionalId" ref={register}>
            {employees.map((employee, index) => (
              <option key={index} value={employee.id}>
                {employee.name}
              </option>
            ))}
          </Select>
        </DivInput>
        <DivInput>
          <Price name="price" ref={register}>
            Preço <span>R$ {options[value]}</span>
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
