import { useEffect } from "react";
import { Card } from "./styles";
import { useUsers } from "../../providers/Users";

const CardClient = ({ userId, dataHora }) => {
  const { users, getUsers } = useUsers();
  const dateTime = new Date(dataHora).toLocaleString();
  const data = dateTime.split(" ")[0];
  const time = dateTime.split(" ")[1];

  return (
    <Card>
      <img src="./img/iconPessoa.png" alt="" />
      <p>{`${users[userId][0]} ${users[userId][1]}`}</p>
      <p>{`${data} - ${time}`}</p>
    </Card>
  );
};

export default CardClient;
