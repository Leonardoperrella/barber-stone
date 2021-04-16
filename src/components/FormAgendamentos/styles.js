import styled from "styled-components";
import { Checkbox, FormControlLabel, TextField } from "@material-ui/core";

export const FormComponent = styled.form`
  padding: 10px;
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivInputCalendar = styled(DivInput)`
  max-width: 250px;
  margin: auto;
`;

export const Label = styled.p`
  font-family: "Bebas Neue", Arial, Helvetica, sans-serif;
  font-size: 2rem;
  color: #f7f4f3;
  margin: 15px 0 5px;
`;

export const TextFieldStyled = styled(TextField)`
  & fieldset {
    border: 4px solid #f7f4f3;
    border-radius: 15px;
  }
`;

export const Calendar = styled.input`
  border: 3px solid #f7f4f3;
  border-radius: 10px;
  background-color: transparent;
  color: #f7f4f3;
  font-family: "Bebas Neue", Arial, Helvetica, sans-serif;
  padding: 10px;
  font-size: 1.5rem;
  outline: none;
`;

export const SpanError = styled.span`
  font-size: 1.25rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: #ec8989;
  text-align: center;
  margin-top: 11px;
`;

export const ButtonForm = styled.button`
  width: 100%;
  border: 3px solid #f7f4f3;
  color: #f7f4f3;
  border-radius: 10px;
  background-color: transparent;
  font-family: "Bebas Neue", Arial, Helvetica, sans-serif;
  font-size: 2rem;
  cursor: pointer;
  position: relative;
  z-index: 1;
  display: block;
  padding: 5px;
  outline: none;
  margin-top: 20px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: #f7f4f3;
    width: 0;
    height: 100%;
    transition: 0.3s;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    background-color: white;
    color: #1b2845;
    transition: 0.3s;
  }
`;

export const Select = styled.select`
  outline: none;
  padding: 15px;
  font-size: 1.5rem;
  font-family: "Bebas Neue", cursive;
  text-align: center;
  max-width: 496px;
  background-color: transparent;
  border: 4px solid #f7f4f3;
  border-radius: 20px;
  color: #f7f4f3;
  margin: 0 auto 20px;

  & option {
    background-color: #1b2845;
    text-align: center;
  }
`;

export const Price = styled.h4`
  & span {
    color: #bb8c4b;
  }
`;

export const DivCheck = styled.div`
  max-width: 416px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;

export const FormControl = styled(FormControlLabel)`
  max-width: 350px;
  display: flex;
  justify-content: center;
  margin: 0 !important;
`;

export const CheckboxLazer = styled(Checkbox)``;

export const ImgCheck = styled.img`
  border-radius: 10px;
  width: 40px;
`;
export const LabelCheck = styled.span`
  font-family: "Bebas Neue", Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 38px;
  color: #f7f4f3;
  align-items: left;

  @media screen and (min-width: 496px) {
    font-size: 1.5rem;
  }
`;
