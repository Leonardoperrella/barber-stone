import { ServicesProvidedContainer } from "./styles";

import image1 from "../../images/services1.svg";
import image2 from "../../images/services2.svg";

import Title from "../Title";

const ServicesProvided = () => {
  return (
    <>
      <ServicesProvidedContainer>
        <Title>Serviços</Title>
        <div>
          <img src={image1} />
          <h4>Para clientes</h4>
          <p>
            Agende agora em apenas um clique seu cortes nas principais
            barbearias perto de você. Acumule pontos de cashback após cada
            agendamento para ganhar ofertas e promoções.
          </p>
        </div>
        <div>
          <img src={image2} />
          <h4>Para barbeiros</h4>
          <p>
            Apresente para todos sua barbearia listando serviços, agendamentos,
            disponibilidade de horários e profissionais. Ganhe mais clientes e
            tenha mais flexibilidade e produtividade!
          </p>
        </div>
      </ServicesProvidedContainer>
    </>
  );
};

export default ServicesProvided;
