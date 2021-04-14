import { useEffect } from "react";
import { Card } from "./styles";
import { useUsers } from "../../providers/Users";

const CardClient = ({ userId, dateTime }) => {
  const { users, getUsers } = useUsers();
  const dateTimeUser = new Date(dateTime).toLocaleString();
  const data = dateTimeUser.split(" ")[0];
  const time = dateTimeUser.split(" ")[1];

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card>
      <img src="./img/iconPessoa.png" alt="" />
      <p>{!!users && `${users[userId][0]} ${users[userId][1]}`}</p>
      <p>{`${data} - ${time}`}</p>
    </Card>
  );
};

export default CardClient;
