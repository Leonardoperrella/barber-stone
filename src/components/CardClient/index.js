import { Card, CardFlip, Button } from "./styles";
import { useUsers } from "../../providers/Users";
import IcoPerson from "../../images/icoPerson.svg";
import Flip from "react-card-flip";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { notifyDeleted } from "../../services/notifyData";
import { useSchedule } from "../../providers/Schedule";

const CardClient = ({ userId, dateTime, id, isDetails }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const barberId = JSON.parse(localStorage.getItem("userId"));

  const { users, getUsers } = useUsers();
  const { getSchedule } = useSchedule();
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
        getSchedule(`/scheduling/?barberId=${barberId}`);
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
        <img src={IcoPerson} alt="" />
        <p>{!!users && `${users[userId][0]} ${users[userId][1]}`}</p>
        <p>{`${data} - ${time}`}</p>
      </CardFlip>
      <Card onClick={() => setFlip(false)} isVerso={isDetails ? false : true}>
        {isDetails ? (
          <>
            <img src={IcoPerson} alt="" />
            <p>{!!users && `${users[userId][0]} ${users[userId][1]}`}</p>
            <p>{`${data} - ${time}`}</p>
          </>
        ) : (
          <Button onClick={() => onSubmit(id)}>Finalizar atendimento</Button>
        )}
      </Card>
    </Flip>
  );
};

export default CardClient;
