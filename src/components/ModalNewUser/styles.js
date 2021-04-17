import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import BgImage from '../../images/bgModalNewUser.jpg'

export const ModalStyled = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FadeStyled = styled(Fade)`
  background-image: url(${BgImage});
  background-size: cover;
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content:center;
  padding: 10px;
  border-radius: 20px;
  text-align: center;
  align-items: center;
  width: 90vw;
  height: 90vh;
  max-height: 500px;
  max-width: 1000px;
  color: #F7F4F3;
  font-size: 1.5rem;
  font-weight: 200;

  & img {
    max-width: 150px;
  }

  
  @media(min-width:650px) {
    & h2 {
      font-size: 2.5rem;
      font-weight: 400;
      margin: 10px;
    }

    & p {
    font-size: 2rem;
    font-weight: 400;
    margin: 10px;
    }
  }

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    position: absolute;
    top:0;
    z-index: -1;
  }


`;

export const Img = styled.img`
  position:relative;
  right: 10px;
  width:50px;
  margin-bottom:20px;
  cursor:pointer;
`

