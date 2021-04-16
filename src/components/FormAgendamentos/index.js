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
  DivCheck,
  FormControl,
  CheckboxLazer,
  ImgCheck,
  LabelCheck,
} from "./styles";

import TextField from "@material-ui/core/TextField";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import api from "../../services/api";
import { notifyError, notifyRegisterSuccess } from "../../services/notifyData";
import check from "../../images/noCheck.svg";
import checked from "../../images/check.svg";

const FormAgendamentos = ({ barberId, handleClose }) => {
  const { getSchedule, setGetSchedule } = useSchedule()
  const token = JSON.parse(localStorage.getItem("token"));
  const userId = JSON.parse(localStorage.getItem("userId"));
  const [error] = useState(false);
  const [value, setValue] = useState("Apenas cabelo");
  const [employees, setEmployees] = useState([]);
  const [homeOffice, setHomeOffice] = useState();
  const [options] = useState({
    "Apenas cabelo": 35,
    "Apenas barba": 25,
    "Cabelo + barba": 50,
  });

  const [iconState, setIconState] = useState({
    home: false,
  });

  const { home } = iconState;

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
    dateTime: yup.date(),
    service: yup.string(),
    price: yup.string(),
    profissionalId: yup.string(),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const getEmployee = () => {
    api
      .get(`/employee/?barberId=${barberId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setEmployees(response.data);
        setHomeOffice(response.data[0].home);

      })
      .catch((e) => {
        console.log(e.response);
        notifyError(e.response);
      });
  };

  useEffect(() => {
    getEmployee();
  }, []);

  const onSubmit = (userData, event, isHomeOffice = false) => {
    if (homeOffice) {
      isHomeOffice = home;
    }

    const { dateTime, service } = userData;
    const price = options[service];
    userData = {
      ...userData,
      dateTime: dateTime.getTime(),
      price,
      barberId: barberId,
      userId: userId,
      isHomeOffice: isHomeOffice,
    };

    api
      .post("/scheduling", userData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        handleClose();
        setGetSchedule(!getSchedule);
        notifyRegisterSuccess();
      })
      .catch((e) => {
        console.log(e.response);
        notifyError(e.response);
      });
  };

  const handleChangeChecked = (event) => {
    setIconState({
      ...iconState,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleChangeEmployee = (event) => {
    const employeeId = event.target.value;
    const employee = employees.filter(
      (employee) => employee.id === Number(employeeId)
    );

    setHomeOffice(employee[0].home);
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
            name="dateTime"
            inputRef={register}
            label="Data e Hora"
            type="datetime-local"
            defaultValue={`${year}-${month}-${day}T${hour}:${minute}`}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </DivInput>
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
          <Select
            name="profissionalId"
            ref={register}
            onChange={handleChangeEmployee}
          >
            {employees.map((employee) => (
              <option value={employee.id}>{employee.name}</option>
            ))}
          </Select>
        </DivInput>
        <DivInput>
          <Price name="price" ref={register}>
            Disponível Home Office? <span>{homeOffice ? "sim" : "não"}</span>
          </Price>
        </DivInput>
        {homeOffice && (
          <DivCheck id="DivCheck">
            <FormControl
              id="FormControl"
              control={
                <CheckboxLazer
                  icon={<ImgCheck src={check} />}
                  checkedIcon={<ImgCheck src={checked} />}
                  name="home"
                  checked={home}
                  onChange={handleChangeChecked}
                />
              }
              label={<LabelCheck>Serviço em HomeOffice ?</LabelCheck>}
            />
          </DivCheck>
        )}
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
