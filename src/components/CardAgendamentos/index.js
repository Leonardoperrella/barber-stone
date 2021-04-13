import Tesoura from "../../images/ScissorsGold.svg";
import { Card } from "./styles";
import { useUsers } from "../../providers/Users";

const CardAgendamentos = ({ userId, dateTime, price }) => {
  const { users } = useUsers();
  const dateTimeUser = new Date(dateTime).toLocaleString();
  const data = dateTimeUser.split(" ")[0];
  const time = dateTimeUser.split(" ")[1];
  return (
    <Card>
      <div>
        <img src={Tesoura} alt="tesoura dourada" />
      </div>
      <p>{!!users && `${users[userId][0]}`}</p>
      <p>{`${data} - ${time}`}</p>
      <p>R$ {price}</p>
    </Card>
  );
};

export default CardAgendamentos;
