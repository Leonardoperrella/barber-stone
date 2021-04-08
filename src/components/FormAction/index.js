import React from "react";
import {
  FormActionContainer,
  FormActionTitle,
  FormActionButton,
  FormActionWrap,
  FormActionTextWrap,
  FormActionBackButtonIcon,
  FormActionBackButtonWrap,
} from "./styles";
import { useHistory } from "react-router-dom";

const FormAction = ({ children, handleSubmit, titleName, buttonName }) => {
  const history = useHistory();
  return (
    <>
      <FormActionWrap>
        <FormActionBackButtonWrap>
          <FormActionBackButtonIcon onClick={() => history.goBack()} />
        </FormActionBackButtonWrap>
        <FormActionTextWrap>
          <FormActionTitle>{titleName}</FormActionTitle>
        </FormActionTextWrap>
        <FormActionContainer onSubmit={handleSubmit}>
          {children}
          <FormActionButton>{buttonName}</FormActionButton>
        </FormActionContainer>
      </FormActionWrap>
    </>
  );
};

export default FormAction;
