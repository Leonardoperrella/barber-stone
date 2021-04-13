import { Card } from "./styles";
import { useUsers } from "../../providers/Users";

const CardClient = ({ userId, dateTime }) => {
  const { users } = useUsers();
  const dateTimeUser = new Date(dateTime).toLocaleString();
  const data = dateTimeUser.split(" ")[0];
  const time = dateTimeUser.split(" ")[1];

  return (
    <Card>
      <img src="./img/iconPessoa.png" alt="" />
      <p>{!!users && `${users[userId][0]} ${users[userId][1]}`}</p>
      <p>{`${data} - ${time}`}</p>
    </Card>
  );
};

export default CardClient;
