import Menu from "../../components/Menu";
import { menuLinkPerfil } from "../../services/menuData";
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
  ImgLazerFalse,
} from "./styles";
import CardClient from "../../components/CardClient";
import Footer from "../../components/Footer";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "../../styles/global.css";
import IcoAgenda from "../../images/icoAgenda.svg";
import perfil from "../../images/barberIcon.svg";
import { useSchedule } from "../../providers/Schedule";
import { useLocation } from "react-router-dom";
import TransitionsModal from "../../components/ModalNewAgend";
import Notification from "../../components/Notification";

import Sinuca from "../../images/sinuca.jpg";
import Playground from "../../images/playground.jpg";
import Churrasqueira from "../../images/churrasqueira.jpg";
import Bar from "../../images/bar.jpg";

const BarberPage = () => {
  const barberUser = useLocation();

  const { schedule } = useSchedule();

  const isBarber = JSON.parse(localStorage.getItem("isBarber"));

  const arrayLeisure = [];
  arrayLeisure.push(barberUser.state.leisureOptions);

  const leisure = [
    {
      text: "Sinuca",
      image: Sinuca,
    },
    {
      text: "Bar",
      image: Bar,
    },
    {
      text: "Churrasqueira",
      image: Churrasqueira,
    },
    {
      text: "Playground",
      image: Playground,
    },
  ];

  arrayLeisure.forEach((l, i) => {
    const SinucaBool = l.pool;
    const BarBool = l.bar;
    const ChurrasqueiraBool = l.barbecue;
    const PlaygroundBool = l.playGround;

    leisure[0].bool = SinucaBool;
    leisure[1].bool = BarBool;
    leisure[2].bool = ChurrasqueiraBool;
    leisure[3].bool = PlaygroundBool;
  });

  return (
    <BodyPage>
      <Menu menuLink={menuLinkPerfil} />
      <BgPerfil />
      <ImgPerfil src={perfil} />
      <Nome>{barberUser.state.name}</Nome>
      <TextoDescritivo style={{ fontSize: "32px" }}>
        {barberUser.state.description}
      </TextoDescritivo>
      <TextoDescritivo style={{}}>{barberUser.state.address}</TextoDescritivo>
      {!isBarber && <TransitionsModal barberId={barberUser.state.id} />}
      <Icon src={IcoAgenda} alt="" />
      <TextoDescritivo style={{}}>clientes agendados</TextoDescritivo>
      {schedule.filter((e) => e.barberId === barberUser.state.id).length > 0 ? (
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
          >
            {schedule
              .filter((e) => e.barberId === barberUser.state.id)
              .map(({ userId, dateTime }, index) => (
                <CardClient
                  key={index}
                  userId={userId}
                  dateTime={dateTime}
                  isDetails={true}
                />
              ))}
          </Carousel>
        </Container>
      ) : (
        <TextoDescritivo erro>
          Em breve haverá clientes aqui! ;)
        </TextoDescritivo>
      )}
      <TextoDescritivo style={{ marginTop: "60px" }}>
        opções de lazer
      </TextoDescritivo>
      <BoxLazer>
        {leisure.map((lazer, index) => (
          <Atracao key={index}>
            <TextoDescritivo>{lazer.text}</TextoDescritivo>
            {lazer.bool ? (
              <ImgLazer src={lazer.image} />
            ) : (
              <ImgLazerFalse src={lazer.image} />
            )}
          </Atracao>
        ))}
      </BoxLazer>
      <Footer />
      <Notification />
    </BodyPage>
  );
};

export default BarberPage;
