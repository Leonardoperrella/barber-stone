import Tesoura from "../../images/ScissorsGold.svg";
import { Card, Button } from "./styles";
import { useUsers } from "../../providers/Users";
import Flip from 'react-card-flip'
import { useState } from "react";
import { FormatListBulleted } from "@material-ui/icons";
import api from '../../services/api'
import { notifyDeleted } from '../../services/notifyData'
 
const CardAgendamentos = ({ userId, dateTime, price, id }) => {
  
  const token = JSON.parse(localStorage.getItem("token"));


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
  };

  const [flip, setFlip] = useState(false)
  const { users } = useUsers();
  const dateTimeUser = new Date(dateTime).toLocaleString();
  const data = dateTimeUser.split(" ")[0];
  const time = dateTimeUser.split(" ")[1];
  return (
    <Flip isFlipped={flip} flipDirection='horizontal'>
      <Card onClick={()=>setFlip(true)}>
        <div >
          <img src={Tesoura} alt="tesoura dourada" />
        </div>
        <p>{!!users && `${users[userId][0]}`}</p>
        <p>{`${data} - ${time}`}</p>
        <p>R$ {price}</p>
      </Card>
      <Card onClick={()=>setFlip(false)} isVerso>
        <Button onClick={()=>onSubmit(id)}>Cancelar agendamento</Button>
        <Button>Alterar Agendamento</Button>
      </Card>
    </Flip>
  );
};

export default CardAgendamentos;
