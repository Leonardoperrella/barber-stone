import styled from "styled-components";


export const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 992, min: 664 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 664, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
};

export const BodyPage = styled.div`
display: flex;
flex-direction: column;
box-sizing:border-box;
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
export const Nome = styled.p`
    font-family: "Bebas Neue",Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    padding: 5px;
    font-size: 80px;
    margin: 25px auto 0 auto;
    color: #F7F4F3;
    text-align:center;
`
export const TextoDescritivo = styled.p`
    font-family: "Bebas Neue",Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    padding: 20px;
    font-size: 42px;
    margin: 5px auto;
    color: #F7F4F3;
    text-align:center;
    width:90%;
`
export const Icon = styled.img`
    width: 288px;
    height: 116px;
    margin: 40px auto;
`
export const IconePequeno = styled.img`
    width: 80px;
    height: 80px;
    margin: 50px auto 15px auto;
`
export const Logo = styled.img`
    max-width: 544px;
    width: 70%;
    margin-top:60px;
`
export const Descricao = styled.p`
    font-family: "Bebas Neue",Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    width:281px;
    text-align:center;
    padding: 5px;
    font-size: 32px;
    margin: 10px auto;
    color: #F7F4F3;
`

export const ImgLazer = styled.img`
    border: 10px solid white;
    border-radius: 30px;
    width: 275px;
    height: 275px;
    box-sizing: border-box;
`
export const Container = styled.div`
    max-width:1030px;
    padding: 10px;
    cursor: grab;
    width: 90vw;

    & li {
    display: flex;
    justify-content: center;
    }
`
export const BoxLazer = styled.div`
    max-width: 908px;
    display:flex;
    flex-direction:column;
    @media(min-width:912px){
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:space-between;
    }
`
export const Atracao = styled.div`
    max-width: 450px;
    width:100%;
    text-align:center;
`
