import GlobalContainer from "../../components/GlobalContainer";
import ButtonBackToHome from "../../components/ButtonBackToHome";
import {
  ButtonWrap,
  ElemP,
  ContainerForm,
  ContainerLogin,
  H1Login,
} from "./styles";
import LinkToHome from "../../components/LinkToHome";
import FormLogin from "../../components/FormLogin";
import FooterForm from "../../components/FooterForm";
import FooterLogin from "../../components/FooterLogin";
import BackGroundImage from "../../components/BackGroundImage";
import Background from "../../images/backgroundLogin.svg";

const BarberRegisterPage = () => {
  return (
    <>
      <GlobalContainer>
        <BackGroundImage image={Background} />
        <ContainerForm>
          <ButtonWrap>
            <ButtonBackToHome />
          </ButtonWrap>
          <h1>Entrar</h1>
          <FormLogin />
          <ElemP>
            Ainda não possui uma conta? <LinkToHome>Cadastre-se</LinkToHome>
          </ElemP>
          <FooterForm />
        </ContainerForm>
        <ContainerLogin>
          <H1Login>Encontre aqui a melhor barbearia da sua região!</H1Login>
          <FooterLogin />
        </ContainerLogin>
      </GlobalContainer>
    </>
  );
};

export default BarberRegisterPage;
