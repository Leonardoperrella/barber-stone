import GlobalContainer from "../../components/GlobalContainer";
import FooterPage from "../../components/FooterPage";
import FooterForm from "../../components/FooterForm";
import ButtonBackToHome from "../../components/ButtonBackToHome";
import {
  ButtonWrap,
  ElemP,
  ContainerRegister,
  ContainerForm,
  H1Title,
  H1Register,
} from "./styles";
import LinkToLogin from "../../components/LinkToLogin";
import FormClientRegister from "../../components/FormClientRegister";
import BackGroundImage from "../../components/BackGroundImage";
import Background from "../../images/backgroundClientRegister.jpg";

const ClientRegisterPage = () => {
  return (
    <>
      <GlobalContainer>
        <BackGroundImage image={Background} />
        <ContainerForm>
          <ButtonWrap>
            <ButtonBackToHome />
          </ButtonWrap>
          <H1Title>Cadastre-se</H1Title>
          <FormClientRegister />
          <ElemP>
            Ja possui uma conta? <LinkToLogin>Entre Agora</LinkToLogin>
          </ElemP>
          <FooterForm />
        </ContainerForm>
        <ContainerRegister>
          <H1Register>
            Encontre aqui a melhor barbearia da sua região!
          </H1Register>
          <FooterPage />
        </ContainerRegister>
      </GlobalContainer>
    </>
  );
};

export default ClientRegisterPage;
