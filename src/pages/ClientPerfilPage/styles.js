import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import "react-multi-carousel/lib/styles.css";

import BackgroundHeader from "../../images/backgroundClient.jpg";

export const breakPoints = [
  { width: 1, itemToShow: 1 },
  { width: 550, itemToShow: 2 },
  { width: 768, itemToShow: 3 },
  { width: 1200, itemToShow: 4 },
];

export const CarouselAgendamentos = styled(Carousel)``;

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

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  margin: 0 15px;
  font-size: 4em;
`;

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

export const Logo = styled.img`
  max-width: 544px;
  width: 70%;
  margin-top: 60px;
`;

export const Nome = styled.h2`
  font-weight: 400;
  font-size: 3.5rem;
  margin: 25px;
  text-align: center;
`;

export const Estrelinha = styled.img`
  width: 75px;
  height: 71px;
`;

export const Tesoura = styled.img`
  width: 107px;
  height: 80px;
  margin: 0 15px;
`;

export const TextoFidelidade = styled.p`
  font-family: "Bebas Neue", Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  padding: 5px;
  font-size: 3rem;
  margin: 5px auto;
  color: #f7f4f3;
  text-align: center;

  @media (min-width: 900px) {
    font-size: 68px;
  }
`;

export const TextoDescritivo = styled.p`
  font-size: 2rem;
  margin: 10px;
  text-align: center;
  max-width: 525px;

  color: ${({ erro }) => erro && "#bb8c4b"};
`;

export const Descricao = styled.p`
  width: 90vw;
  text-align: center;
  padding: 5px;
  font-size: 1.75rem;
  margin: 10px auto;
  color: ${({ isOther }) => isOther && "#bb8c4b"};
  width: 90%;
  max-width: 496px;
`;

export const BoxFidelidade = styled.div`
  width: 240px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-sizing: border-box;
  margin: 10px auto 40px auto;
`;

export const ContFidelidade = styled.div`
  width: 80px;
  height: 80px;
  line-height: 80px;
  border: 4px solid #bb8c4b;
  text-align: center;
  border-radius: 50%;
  font-family: "Bebas Neue", Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  color: #bb8c4b;
  box-sizing: border-box;
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
