import { AboutContainer } from "./styles";
import Title from "../Title";
import ButtonGoToTop from "../../components/ButtonGoToTop";

import BarberIcon from "../../images/barberIcon.svg";

const About = () => {
  return (
    <>
      <ButtonGoToTop />
      <AboutContainer id="sobre">
        <Title>Sobre</Title>
        <img src={BarberIcon} alt="barber-icon" />
        <p>
          A Barberstone é uma solução online para você, cliente, que quer
          encontrar as melhores opções de barbearia na sua região e também para
          você, empresário, que gostaria de ampliar e escalar seu negócio
          alcançando cada vez mais clientes.
        </p>
      </AboutContainer>
    </>
  );
};

export default About;
