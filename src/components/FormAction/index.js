import React from "react";
import {
  FormActionContainer,
  FormActionTitle,
  FormActionButton,
  FormActionWrap,
  FormActionTextWrap,
} from "./styles";

const FormAction = ({ children, handleSubmit, titleName, buttonName }) => {
  return (
    <>
      <FormActionWrap>
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
