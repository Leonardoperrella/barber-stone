import styled from "styled-components";

import BackgroundHeader from "../../images/background-barber-profile.jpg";

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

  color: ${({ erro }) => erro && "#D2C65B"};
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
