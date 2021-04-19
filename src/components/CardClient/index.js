import { Card, CardFlip, Button } from "./styles";
import { useUsers } from "../../providers/Users";
import IcoPerson from "../../images/icoPerson.svg";
import Flip from "react-card-flip";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { notifyDeleted, notifyErrorClient } from "../../services/notifyData";
import { useSchedule } from "../../providers/Schedule";

const CardClient = ({ userId, dateTime, id, isDetails, isClient }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const { users, getUsers } = useUsers();
  const { getSchedule, setGetSchedule } = useSchedule();
  const [scissors, setScissors] = useState(0);
  const [flip, setFlip] = useState(false);
  const dateTimeUser = new Date(dateTime).toLocaleString();
  const data = dateTimeUser.split(" ")[0];
  const time = dateTimeUser.split(" ")[1];

  const onSubmit = (id, userId) => {
    api
      .delete(`/scheduling/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        notifyDeleted();
        updateClientStart(userId);
        setGetSchedule(!getSchedule);
      })
      .catch((e) => {});
  };

  const updateClientStart = (userId) => {
    setScissors(users[userId][2]);

    api
      .patch(
        `/users/${userId}`,
        { scissors: scissors === 9 ? 0 : users[userId][2] + 1 },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {})
      .catch(() => {
        notifyErrorClient();
      });
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scissors]);

  return (
    <>
      {isClient ? (
        <Flip isFlipped={flip} flipDirection="horizontal">
          <Card onClick={() => setFlip(true)}>
            <img src={IcoPerson} alt="" />
            <p>{!!users && `${users[userId][0]} ${users[userId][1]}`}</p>
            <p>{`${data} - ${time}`}</p>
          </Card>
          <Card
            onClick={() => setFlip(false)}
            isVerso={isDetails ? false : true}
          >
            {isDetails ? (
              <>
                <img src={IcoPerson} alt="" />
                <p>{!!users && `${users[userId][0]} ${users[userId][1]}`}</p>
                <p>{`${data} - ${time}`}</p>
              </>
            ) : (
              <Button onClick={() => onSubmit(id, userId)}>
                Finalizar atendimento
              </Button>
            )}
          </Card>
        </Flip>
      ) : (
        <Flip isFlipped={flip} flipDirection="horizontal">
          <CardFlip onClick={() => setFlip(true)}>
            <img src={IcoPerson} alt="" />
            <p>{!!users && `${users[userId][0]} ${users[userId][1]}`}</p>
            <p>{`${data} - ${time}`}</p>
          </CardFlip>
          <Card
            onClick={() => setFlip(false)}
            isVerso={isDetails ? false : true}
          >
            {isDetails ? (
              <>
                <img src={IcoPerson} alt="" />
                <p>{!!users && `${users[userId][0]} ${users[userId][1]}`}</p>
                <p>{`${data} - ${time}`}</p>
              </>
            ) : (
              <Button onClick={() => onSubmit(id, userId)}>
                Finalizar atendimento
              </Button>
            )}
          </Card>
        </Flip>
      )}
    </>
  );
};

export default CardClient;
