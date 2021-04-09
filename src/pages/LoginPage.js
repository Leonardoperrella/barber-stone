import GlobalContainer from "../components/GlobalContainer";
import GlobalWrap from "../components/GlobalWrap";
import Footer from "../components/Footer";
import ButtonBackToHome from "../components/ButtonBackToHome";
import { ButtonWrap, ElemP } from "./styles";
import LinkToLogin from "../components/LinkToLogin";
import FormLogin from "../components/FormLogin";

const BarberRegisterPage = () => {
  return (
    <>
      <GlobalContainer>
        <GlobalWrap>
          <ButtonWrap>
            <ButtonBackToHome />
          </ButtonWrap>
          <h1>Entrar</h1>
          <FormLogin />
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
