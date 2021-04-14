import styled from "styled-components";

import { FONTS } from '../../styles/theme'
import VersoBackground from "../../images/versoCardAgendamentos.jpg";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  border-radius: 30px;
  background-color: #bb8c4b;
  align-items: center;
  padding: 20px;
 // margin: 10px 0;
  cursor:pointer;
  z-index: 10;
  width: 260px;
  height: 260px;
  background-image:  ${(props) => (props.isVerso && `url(${VersoBackground})`)};

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

export const Button = styled.button`
  background-color:transparent;
  border: 4px solid white;
  outline:none;
  color:white;
  height:100px;
  border-radius:15px;
  cursor:pointer;
  font-size:1.5rem;
  font-family: ${FONTS.normal};
  margin: 15px auto;
`
