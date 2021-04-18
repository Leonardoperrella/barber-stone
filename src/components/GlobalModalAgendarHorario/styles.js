import styled from "styled-components";
import AgendarHorario from "../../images/AgendarHorario.svg";

export const BtnOpenModal = styled.button`
  position: absolute;
  right: 21px;
  top: 381px;
  height: 79px;
  width: 273px;
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  outline: none;
  cursor: pointer;
  background-image: url(${AgendarHorario});
  background-position: center;
  border-radius: 17px;
`;

export const BackDrop = styled.div`
  background-color: rgba(63, 61, 61, 0.692);
  height: 100%;
  position: fixed;
  transition: all 1.3s;
  width: 100%;
`;

export const ModalWrapper = styled.div`
  background-color: #fff;
  width: 80%;
  max-width: 800px;
  margin: 4rem auto;
  transition: all 0.5s ease;
  border-radius: 200px;
`;

export const ModalHeader = styled.div`
  background-color: #1b2845;
  color: #e9e9e9;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px 20px 0px 0px;
  font-family: Bebas Neue;
  font-size: 50px;
`;

export const ModalHeaderSpan = styled.span`
  font-size: 3rem;
  cursor: pointer;
  color: white;
  position: absolute;
  right: 40px;
`;

export const ModalContent = styled.div`
  padding: 1.5rem 1rem;
  background-color: #1b2845;
  border-radius: 0px 0px 20px 20px;
  font-size: 40px;
  font-family: Bebas Neue;
  text-align: center;
`;

export const ModalBody = styled.div`
  margin-bottom: 1rem;
`;

export const ModalBodyP = styled.p`
  font-size: 1rem;
  background-color: #1b2845;
  color: #f7f4f3;
  padding: 1rem;
  margin: 1rem 0 2rem 0;
  text-align: center;
`;

export const ModalBodyH4 = styled.h4`
  font-size: 1.8rem;
  color: #f7f4f3;
`;
