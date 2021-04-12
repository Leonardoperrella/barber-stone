import { Card } from "./styles";
import { useUsers } from "../../providers/Users";

const CardClient = ({ userId, dataHora }) => {
  const { users } = useUsers();
  const dateTime = new Date(dataHora).toLocaleString();
  const data = dateTime.split(" ")[0];
  const time = dateTime.split(" ")[1];

  console.log(users);

  return (
    <Card>
      <img src="./img/iconPessoa.png" alt="" />
      <p>{!!users && `${users[userId][0]} ${users[userId][1]}`}</p>
      <p>{`${data} - ${time}`}</p>
    </Card>
  );
};

export default CardClient;
