import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import "react-multi-carousel/lib/styles.css";

export const breakPoints= [
    { width: 1, itemToShow: 1 },
    { width: 550, itemToShow: 2 },
    { width: 768, itemToShow: 3 },
    { width: 1200, itemToShow: 4 },    
];

export const CarouselAgendamentos = styled(Carousel)`
`

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
    justify-content:center;
    align-items:center;
    height: 250px;
    width:100%;
    margin:0 15px;
    background-color:#00008B;
    font-size:4em;
`

export const BodyPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
`
export const BgPerfil = styled.img`
    width: 100%;
    height: 360px;
    object-fit: cover;
`
export const ImgPerfil = styled.img`
    width: 300px;
    height: 300px;
    margin: -150px auto 0 auto;
`
export const Logo = styled.img`
    max-width: 544px;
    width: 70%;
    /* height: 148px; */
    margin-top:60px;
`
export const Nome = styled.p`
    font-family: "Bebas Neue",Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    padding: 5px;
    font-size: 80px;
    margin: 25px auto 0 auto;
    color: #F7F4F3;
`
export const Estrelinha = styled.img`
    width: 75px;
    height: 71px;
    margin: 50px auto 15px auto;
`
export const Tesoura = styled.img`
    width: 107px;
    height: 80px;
    margin: 0 15px;
`
export const TextoFidelidade = styled.p`
    font-family: "Bebas Neue",Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    padding: 5px;
    font-size: 42px;
    margin: 5px auto;
    color: #F7F4F3;
    @media(min-width:900px) {
        font-size:68px;
    }
`
export const Descricao = styled.p`
    font-family: "Bebas Neue",Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    width:90vw;
    text-align:center;
    padding: 5px;
    font-size: 32px;
    margin: 10px auto;
    color: #F7F4F3;

    @media(min-width: 900px) {
        font-size: 48px;
    } 
`

export const BoxFidelidade = styled.div`
    width:240px;
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    box-sizing: border-box;
    margin: 10px auto 40px auto;
`
export const ContFidelidade = styled.div`
    width:80px;
    height:80px;
    line-height:80px;
    border: 4px solid #FAEB67;
    text-align: center;
    border-radius:50%;
    font-family: "Bebas Neue",Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    color:#FAEB67;
    box-sizing:border-box;
`
export const Container = styled.div`
    padding: 10px;
    cursor: grab;
    width: 90vw;

    & li {
    display: flex;
    justify-content: center;
}

`