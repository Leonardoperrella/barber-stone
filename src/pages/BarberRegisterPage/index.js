import GlobalContainer from "../../components/GlobalContainer";
import FooterPage from "../../components/FooterPage";
import FooterForm from "../../components/FooterForm";
import ButtonBackToHome from "../../components/ButtonBackToHome";
import {
  ButtonWrap,
  ElemP,
  ContainerForm,
  ContainerRegister,
  H1Register,
  H1Title,
} from "./styles";
import LinkGoTo from "../../components/LinkGoTo";
import FormBarberRegister from "../../components/FormBarberRegister";
import BackGroundImage from "../../components/BackGroundImage";
import Background from "../../images/backgroundRegister.jpg";
import Notification from "../../components/Notification";

const BarberRegisterPage = () => {
  return (
    <>
      <GlobalContainer>
        <BackGroundImage image={Background} />
        <ContainerForm>
          <ButtonWrap>
            <ButtonBackToHome />
          </ButtonWrap>
          <H1Title>Cadastre-se</H1Title>
          <FormBarberRegister />
          <ElemP>
            Ja possui uma conta? <LinkGoTo to={"/entrar"}>Entre Agora</LinkGoTo>
          </ElemP>
          <FooterForm />
        </ContainerForm>
        <ContainerRegister>
          <H1Register>
            Torne-se um membro e amplie sua rede de clientes
          </H1Register>
          <FooterPage />
        </ContainerRegister>
        <Notification />
      </GlobalContainer>
    </>
  );
};

export default BarberRegisterPage;
