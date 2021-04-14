import { ScissorsRate, Card } from "./styles";

import BarberIcon from "../../images/barbershop.svg";
import Star from "../../images/star.svg";
import { useEffect, useState } from "react";
import { useUsers } from "../../providers/Users";
import { useHistory } from "react-router-dom";

const CardBarber = ({ name, rating, scissors, id }) => {
  const history = useHistory();

  const [array, setArray] = useState([]);

  const { barberUsers } = useUsers();

  const redirect = (id) => {
    const barberUser = barberUsers.filter((e) => e.id === id);
    history.push({ pathname: "/detalhes-barbearia", state: barberUser[0] });
  };

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < rating; i++) {
      arr.push(i);
    }
    setArray(arr);
  }, [rating]);

  return (
    <>
      <Card onClick={() => redirect(id)}>
        <img src={BarberIcon} alt="barber-icon" />
        <h4>{name}</h4>
        <ScissorsRate>
          {array.map((e) => (
            <img src={Star} alt="scissors-icon" />
          ))}
        </ScissorsRate>
      </Card>
    </>
  );
};

export default CardBarber;
