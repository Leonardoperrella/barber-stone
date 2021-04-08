import styled from "styled-components";
import { COLORS } from "../../styles/theme";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export const FormActionContainer = styled.form``;

export const FormActionWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    margin-top: -65px;
  }
`;

export const FormActionTitle = styled.h1`
  font-size: 28px !important;
  letter-spacing: 0px !important;
  margin: 5px 0 !important;
`;

export const FormActionButton = styled.button`
  width: 100%;
  outline: none;
  border: 4px solid #f7f4f3;
  border-radius: 10px;
  height: 70px;
  background-color: transparent;
  color: ${COLORS.textHighlight};
  margin: 5px 0;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  font-family: "Bebas Neue", cursive;
`;

export const FormActionTextWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  margin-top: 20px;
`;

export const FormActionBackButtonIcon = styled(ArrowBackIcon)`
  color: ${COLORS.highlight};
  max-width: 30px;
  height: 30px;
  font-size: 2rem !important;
`;
