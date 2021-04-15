import { useEffect } from "react";
import { Card, CardFlip, Button } from "./styles";
import { useUsers } from "../../providers/Users";
import { useState } from "react";
import Flip from "react-card-flip";
import Tesoura from "../../images/ScissorsGold.svg";
import api from "../../services/api";
import { notifyDeleted } from "../../services/notifyData";

const CardAgendamentos = ({ barberId, dateTime, price, id }) => {
  const { users, getUsers } = useUsers();
  const token = JSON.parse(localStorage.getItem("token"));
  const [flip, setFlip] = useState(false);
  const dateTimeUser = new Date(dateTime).toLocaleString();
  const data = dateTimeUser.split(" ")[0];
  const time = dateTimeUser.split(" ")[1];

  const onSubmit = (id) => {
    api
      .delete(`/scheduling/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        notifyDeleted();
      })
      .catch((e) => {});
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flip isFlipped={flip} flipDirection="horizontal">
      <CardFlip onClick={() => setFlip(true)}>
        <div>
          <img src={Tesoura} alt="tesoura dourada" />
        </div>
        <p>{!!users && `${users[barberId][0]}`}</p>
        <p>{`${data} - ${time}`}</p>
        <p>R$ {price}</p>
      </CardFlip>
      <Card onClick={() => setFlip(false)} isVerso>
        <Button onClick={() => onSubmit(id)}>Cancelar agendamento</Button>
        <Button>Alterar Agendamento</Button>
      </Card>
    </Flip>
  );
};

export default CardAgendamentos;
