import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../services/api";
import * as yup from "yup";
import GlobalContainer from "../components/GlobalContainer";
import GlobalWrap from "../components/GlobalWrap";
import Footer from "../components/Footer";
import ButtonBackToHome from "../components/ButtonBackToHome";
import { ButtonWrap, ElemP } from "./styles";
import LinkToLogin from "../components/LinkToLogin";
import FormBarberRegister from "../components/FormBarberRegister";

const BarberRegisterPage = () => {
  return (
    <>
      <GlobalContainer>
        <GlobalWrap>
          <ButtonWrap>
            <ButtonBackToHome />
          </ButtonWrap>
          <h1>Cadastre-se</h1>
          <FormBarberRegister />
          <ElemP>
            Ja possui uma conta? <LinkToLogin>Entre Agora</LinkToLogin>
          </ElemP>
          <Footer />
        </GlobalWrap>
      </GlobalContainer>
    </>
  );
};

export default BarberRegisterPage;
