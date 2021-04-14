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
  responsive,
  Container,
  BoxLazer,
  Atracao,
} from "./styles";
import CardClient from "../../components/CardClient";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "../../styles/global.css";
import Sinuca from "../../images/sinuca.jpg";
import Playground from "../../images/playground.jpg";
import Churrasqueira from "../../images/churrasqueira.jpg";
import IcoAgenda from "../../images/icoAgenda.svg";
import Bar from "../../images/bar.jpg";

import perfil from "../../images/barberIcon.svg";
import { useSchedule } from "../../providers/Schedule";
import { useUsers, users } from "../../providers/Users";

import TransitionsModal from "../../components/ModalNewAgend";

const BarberPage = () => {
  const qtd = 4;

  const { schedule, getSchedule } = useSchedule();
  const { getUsers } = useUsers();

  const userId = JSON.parse(localStorage.getItem("userId"));

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

  useEffect(() => {
    getSchedule(`/scheduling/?barbeariaId=${userId}`);
    getUsers();
  }, [schedule]);

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
      <TransitionsModal />
      <Icon src={IcoAgenda} alt="" />
      <TextoDescritivo style={{}}>clientes agendados</TextoDescritivo>
      <Container>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className="carousel"
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
          {schedule.map(({ userId, dateTime }, index) => (
            <CardClient
              key={index}
              userId={userId}
              dateTime={dateTime}
              isDetails={true}
            />
          ))}
        </Carousel>
      </Container>
      <TextoDescritivo style={{ marginTop: "60px" }}>
        opções de lazer
      </TextoDescritivo>
      <BoxLazer>
        <Atracao>
          <TextoDescritivo>Sinuca</TextoDescritivo>
          <ImgLazer src={Sinuca} alt="" />
        </Atracao>
        <Atracao>
          <TextoDescritivo>Bar</TextoDescritivo>
          <ImgLazer src={Bar} alt="" />
        </Atracao>
        <Atracao>
          <TextoDescritivo>Churrasqueira</TextoDescritivo>
          <ImgLazer src={Churrasqueira} alt="" />
        </Atracao>
        <Atracao>
          <TextoDescritivo>Playground</TextoDescritivo>
          <ImgLazer src={Playground} alt="" />
        </Atracao>
      </BoxLazer>
      <Footer />
    </BodyPage>
  );
};

export default BarberPage;
