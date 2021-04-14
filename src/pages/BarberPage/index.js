import Menu from "../../components/Menu";
import { menuLinkPerfilBarber } from "../../services/menuData";
import {
  BodyPage,
  BgPerfil,
  ImgPerfil,
  Nome,
  TextoDescritivo,
  Icon,
  ImgLazer,
  Logo,
  Descricao,
  responsive,
  Container,
  BoxLazer,
  Atracao,
} from "./styles";
import CardClient from "../../components/CardClient";
import Footer from "../../components/Footer";
import { useState } from "react";
import Carousel from "react-multi-carousel";

import perfil from "../../images/barberIcon.svg";

const BarberPage = () => {
  const qtd = 4;

  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth > 900 ? true : false
  );

  window.onresize = () =>
    window.innerWidth > 911 ? setIsDesktop(true) : setIsDesktop(false);

  const buildArray = () => {
    let array = [];
    for (let i = 0; i < qtd; i++) {
      array.push(i);
    }
    return array;
  };
  return (
    <BodyPage>
      <Menu menuLink={menuLinkPerfilBarber} />
      <BgPerfil />
      <ImgPerfil src={perfil} />
      <Nome>Barbearia do seu Zé</Nome>
      <TextoDescritivo style={{ fontSize: "32px" }}>
        Aqui você encontra o melhor serviço da região para cabelo e barba, além
        de ótimo atendimento!
      </TextoDescritivo>
      <TextoDescritivo style={{}}>
        rua mimosa, 1234. Curitiba, paraná
      </TextoDescritivo>
      <Icon src="./img/iconAgendar.png" alt="" />
      <TextoDescritivo style={{}}>clientes agendados</TextoDescritivo>
      <Container>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          responsive={responsive}
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
          arrows
        >
          <CardClient />
        </Carousel>
      </Container>
      <TextoDescritivo style={{ marginTop: "60px" }}>
        opções de lazer
      </TextoDescritivo>
      <BoxLazer>
        <Atracao>
          <TextoDescritivo>Sinuca</TextoDescritivo>
          <ImgLazer src="./img/imgSinuca.png" alt="" />
        </Atracao>
        <Atracao>
          <TextoDescritivo>Bar</TextoDescritivo>
          <ImgLazer src="./img/imgBar.png" alt="" />
        </Atracao>
        <Atracao>
          <TextoDescritivo>Churrasqueira</TextoDescritivo>
          <ImgLazer src="./img/imgChurrasqueira.png" alt="" />
        </Atracao>
        <Atracao>
          <TextoDescritivo>Playground</TextoDescritivo>
          <ImgLazer src="./img/imgPlayground.png" alt="" />
        </Atracao>
      </BoxLazer>
      <Footer />
    </BodyPage>
  );
};

export default BarberPage;
