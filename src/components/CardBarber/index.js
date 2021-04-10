import { ScissorsRate, Card } from "./styles";

import BarberIcon from "../../images/barbershop.svg";
import ScissorsIcon from "../../images/ScissorsGold.svg";

const CardBarber = ({ name }) => {
  return (
    <>
      <Card>
        <img src={BarberIcon} />
        <h4>Barbearia do seu zé</h4>
        <ScissorsRate>
          <img src={ScissorsIcon} />
          <img src={ScissorsIcon} />
          <img src={ScissorsIcon} />
          <img src={ScissorsIcon} />
          <img src={ScissorsIcon} />
        </ScissorsRate>
      </Card>
    </>
  );
};

export default CardBarber;
