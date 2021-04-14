import { Card, Button } from "./styles";
import { useUsers } from "../../providers/Users";
import IcoPerson from "../../images/icoPerson.svg"
import Flip from 'react-card-flip'
import { useState } from "react";
import api from '../../services/api'
import { notifyDeleted } from '../../services/notifyData'

const CardClient = ({ userId, dateTime, id, isDetails }) => {

  const [flip, setFlip] = useState(false)
  
  const token = JSON.parse(localStorage.getItem("token"));

  const { users } = useUsers();
  console.log(dateTime);
  const dateTimeUser = new Date(dateTime).toLocaleString();
  const data = dateTimeUser.split(" ")[0];
  const time = dateTimeUser.split(" ")[1];

  const onSubmit = (id) => {
    api
      .delete(`/scheduling/${id}`,{
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        notifyDeleted()
      })
      .catch((e) => {
      }); 
    api
      .delete(`/scheduling/${id}`,{
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        notifyDeleted()
      })
      .catch((e) => {
      }); 
  };

  return (
    <Flip isFlipped={flip} flipDirection='horizontal'>
      <Card onClick={()=>setFlip(true)}>
        <img src={IcoPerson} alt="" />
        <p>{!!users && `${users[userId][0]} ${users[userId][1]}`}</p>
        <p>{`${data} - ${time}`}</p>
      </Card>
      <Card onClick={()=>setFlip(false)} isVerso={isDetails ? false : true}>
        {isDetails ? (
          <>
            <img src={IcoPerson} alt="" />
            <p>{!!users && `${users[userId][0]} ${users[userId][1]}`}</p>
            <p>{`${data} - ${time}`}</p>
          </>
          ) : (
          <Button onClick={()=>onSubmit(id)}>Finalizar atendimento</Button>
        )}
      </Card>
    </Flip>
  );
};

export default CardClient;
