import styled from "styled-components";

import BackgroundHeader from "../../images/background-barber-profile.jpg";

import NovoFuncionario from "../../images/NovoFuncionario.svg"

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 992, min: 625 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 625, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const BodyPage = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
`;

export const BgPerfil = styled.div`
  width: 100%;
  height: 360px;
  background-image: url(${BackgroundHeader});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

export const ImgPerfil = styled.img`
  width: 250px;
  height: 250px;
  margin: -150px 0 0;
  background-color: #f7f4f3;
  border-radius: 50%;
  border: 10px solid #f7f4f3;
`;

export const Nome = styled.h2`
  font-weight: 400;
  font-size: 3.5rem;
  margin: 25px;
  text-align: center;
`;

export const TextoDescritivo = styled.p`
  font-size: 2rem;
  margin: 10px;
  text-align: center;
  max-width: 525px;
`;

export const Icon = styled.img`
  width: 175px;
  height: 75px;
  margin: 40px auto;
`;

export const IconePequeno = styled.img`
  width: 80px;
  height: 80px;
  margin-top: 15px;
`;

export const Logo = styled.img`
  max-width: 544px;
  width: 70%;
  margin-top: 60px;
`;

export const Descricao = styled.p`
  font-family: "Bebas Neue", Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  width: 281px;
  text-align: center;
  padding: 5px;
  font-size: 32px;
  margin: 10px auto;
  color: #f7f4f3;
`;

export const Container = styled.div`
  max-width: 1030px;
  padding: 10px;
  cursor: grab;
  width: 90vw;

  & li {
    display: flex;
    justify-content: center;
  }
`;
export const BtnOpenModal = styled.button`
    
    //position: absolute;
    right: 21px;
    top: 381px;
    height: 79px;
    width: 273px;
    background-repeat: no-repeat;
    background-size: contain;
    border: none;
    outline: none;
    cursor: pointer;
    background-image: url(${NovoFuncionario});
    background-position: center;
    border-radius: 17px;
`

export const BackDrop = styled.div`

    background: rgba(63, 61, 61, 0.692);
    height: 100%;
    position: fixed;
    transition: all 1.3s;
    width: 100%;
`

export const ModalWrapper = styled.div`

    background: #fff;
    width: 80%;
    max-width: 800px;
    margin: 4rem auto;
    transition: all .5s ease;
    border-radius: 200px;
`

export const ModalHeader = styled.div`
    background: #1B2845;
    color: #e9e9e9;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px 20px 0px 0px;
    font-family: Bebas Neue;
    font-size: 50px;    
`

export const ModalHeaderSpan = styled.span`
    font-size: 3rem;
    cursor: pointer;
    color: white;
    position: absolute;
    right: 40px;
`

export const ModalContent = styled.div`
  padding: 1.5rem 1rem;
  background-color: #1B2845;
  border-radius: 0px 0px 20px 20px;
  font-size: 40px;
  font-family: Bebas Neue;
  text-align: center;
`

export const ModalBody = styled.div`
margin-bottom: 1rem;
`

export const ModalBodyP = styled.p`
    font-size: 1rem;
    background: #1B2845;
    color: #F7F4F3;
    padding: 1rem;
    margin: 1rem 0 2rem 0;
   text-align: center;
`

export const ModalBodyH4 = styled.h4`
    font-size: 1.8rem;
    color: #F7F4F3;
`
