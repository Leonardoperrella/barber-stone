import styled from "styled-components";

import { FONTS } from "../../styles/theme";
import VersoBackground from "../../images/versoCardAgendamentos.jpg";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 30px;
  background-color: #bb8c4b;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  z-index: 10;
  width: 260px;
  height: 260px;
  background-image: ${(props) => props.isVerso && `url(${VersoBackground})`};

  p {
    font-size: 2rem;
    color: #1b2845;
    margin: 5px;
  }

  img {
    width: 75px;
    margin: 10px;
  }
`;

export const CardFlip = styled(Card)`
  &:hover::before {
    content: "Clique para ver mais";
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    color: rgb(27, 40, 69);
    background-color: rgba(247, 244, 243, 0.85);
    width: 100%;
    height: 100%;
    border-radius: 30px;
    font-size: 2.5rem;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: 4px solid white;
  outline: none;
  color: white;
  height: 100px;
  border-radius: 15px;
  cursor: pointer;
  font-size: 1.5rem;
  font-family: ${FONTS.normal};
  margin: 15px auto;
`;
