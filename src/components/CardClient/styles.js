import styled from "styled-components";
import VersoBackground from "../../images/versoCardAgendamentos.jpg";
import { FONTS } from '../../styles/theme'

export const Card = styled.div`
  background-color: #bb8c4b;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  width: 260px;
  height:260px;
  background-image:  ${(props) => (props.isVerso && `url(${VersoBackground})`)};

  & img {
    width: 50px;
  }

  & p {
    font-size: 2rem;
    color: #1b2845;
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
