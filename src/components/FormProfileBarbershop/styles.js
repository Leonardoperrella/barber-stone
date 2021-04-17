import styled from "styled-components";
import { Checkbox, FormControlLabel } from "@material-ui/core";

export const FormUpdate = styled.form`
  max-width: 923px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SpanError = styled.span`
  font-size: 1.25rem;
  color: #ec8989;
  text-align: center;
  margin: 5px;
`;

export const Input = styled.input`
  max-width: 416px;
  width: 90vw;
  height: 63px;
  border: 4px solid #f7f4f3;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #1b2845;
  font-family: "Bebas Neue", Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  padding: 5px;
  font-size: 20px;
  line-height: 38px;
  color: #f7f4f3;
  outline: none;

  @media (min-width: 912px) {
    max-width: ${(props) => (props.isDesktop ? `873px` : `416px`)};
  }
`;

export const Label = styled.p`
  font-family: "Bebas Neue", Arial, Helvetica, sans-serif;
  font-size: 2rem;
  line-height: 38px;
  color: #f7f4f3;
  margin: 0;

  @media (min-width: 912px) {
    max-width: ${(props) => props.isDesktop && `873px`};
    width: ${(props) => props.isDesktop && `873px`};
  }
`;

export const ButtonForm = styled.button`
  max-width: 416px;
  width: 90vw;
  border: 3px solid #f7f4f3;
  border-radius: 10px;
  background-color: #1b2845;
  font-family: "Bebas Neue", Arial, Helvetica, sans-serif;
  font-size: 2rem;
  color: #f7f4f3;
  margin: 10px;
  outline: none;
  cursor: pointer;
  position: relative;
  z-index: 1;
  display: block;
  padding: 5px;
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

export const DivInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  padding: 10px;
`;

export const CardLogin = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const CheckboxLazer = styled(Checkbox)`
  margin-right: 20px;
`;
export const ImgCheck = styled.img`
  margin-right: 20px;
  border-radius: 10px;
  width: 59px;
  height: 59px;
`;
export const FormControl = styled(FormControlLabel)``;
export const DivCheck = styled.div`
  max-width: 250px;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
`;
export const LabelCheck = styled.span`
  font-family: "Bebas Neue", Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 38px;
  color: #f7f4f3;
`;

export const LabelOptions = styled(Label)`
  width: 100%;
  text-align: center;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const CheckboxContainer = styled.div`
  max-width: 696px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
`;

export const TextAreaInput = styled.textarea`
  max-width: 416px;
  width: 90vw;
  height: 63px;
  border: 4px solid #f7f4f3;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: transparent;
  font-family: "Bebas Neue", Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  padding: 5px;
  font-size: 20px;
  line-height: 38px;
  color: #f7f4f3;
  outline: none;
`;
