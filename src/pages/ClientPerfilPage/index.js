import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import {
  BodyPage,
  BgPerfil,
  ImgPerfil,
  Nome,
  Estrelinha,
  TextoFidelidade,
  Descricao,
  BoxFidelidade,
  Tesoura,
  ContFidelidade,
  Logo,
  responsive,
  Container,
} from "./styles";
import FormProfileClient from "../../components/FormProfileClient";
import CardAgendamentos from "../../components/CardAgendamentos";
import { menuLinkPerfilClient } from "../../services/menuData";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// temporário
import perfil from "../../images/perfilClient.jpg";
import scissors from "../../images/ScissorsGold.svg";
import star from "../../images/star.svg";
import calendar from "../../images/calendar.svg";
import clock from "../../images/clock.svg";

const ClientPerfilPage = () => {
  const qtd = 4;

  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth > 900 ? true : false
  );

  window.onresize = () =>
    window.innerWidth > 900 ? setIsDesktop(true) : setIsDesktop(false);

  const buildArray = () => {
    let array = [];
    for (let i = 0; i < qtd; i++) {
      array.push(i);
    }
    return array;
  };

  return (
    <BodyPage>
      <Menu menuLink={menuLinkPerfilClient} />
      <BgPerfil />
      <ImgPerfil src={perfil} />
      <Nome>Filipe</Nome>
      <Estrelinha src={star} />
      <TextoFidelidade>Vale fidelidade</TextoFidelidade>
      <Descricao>
        a cada dez agendamentos ganhe um de graça nas barbearias participantes
      </Descricao>
      <BoxFidelidade>
        {isDesktop ? (
          buildArray().map((e) => <Tesoura src={scissors} />)
        ) : (
          <>
            <ContFidelidade>{qtd}x</ContFidelidade>
            <Tesoura src={scissors} />
          </>
        )}
      </BoxFidelidade>
      <Estrelinha src={calendar} />
      <TextoFidelidade>Seus agendamentos</TextoFidelidade>
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
          <CardAgendamentos />
          <CardAgendamentos />
          <CardAgendamentos />
          <CardAgendamentos />
        </Carousel>
      </Container>
      <Estrelinha src={clock} />
      <TextoFidelidade>Atualizar Dados</TextoFidelidade>
      <FormProfileClient />
      <Footer />
    </BodyPage>
  );
};

export default ClientPerfilPage;
