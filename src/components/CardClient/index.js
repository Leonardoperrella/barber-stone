import Tesoura from "../../images/ScissorsGold.svg";
import { Card } from "./styles";

const CardClient = () => {
  return (
    <Card>
      <img src={Tesoura} />
      <p>Barbearia do seu zé</p>
      <p>07/05/2021 - 14:00</p>
      <p>R$ 30</p>
    </Card>
  );
};

export default CardClient;
