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
  TextoDescritivo,
} from "./styles";
import FormProfileClient from "../../components/FormProfileClient";
import CardAgendamentos from "../../components/CardAgendamentos";
import { menuLinkPerfilClient } from "../../services/menuData";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSchedule } from "../../providers/Schedule";
import { useUsers } from "../../providers/Users";
import '../../styles/global.css'
import Notification from '../../components/Notification'

// temporário
import perfil from "../../images/perfilClient.jpg";
import scissors from "../../images/ScissorsGold.svg";
import star from "../../images/star.svg";
import calendar from "../../images/calendar.svg";
import clock from "../../images/clock.svg";

const ClientPerfilPage = () => {
  const { schedule, getSchedule } = useSchedule();
  const { getUsers, users } = useUsers();
  const qtd = 4;
  const userId = JSON.parse(localStorage.getItem("userId"));
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

  useEffect(() => {
    getSchedule(`/scheduling/?userId=${userId}`);
    getUsers();
  }, [users]);

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
      {schedule.length > 0 ? (
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
            {schedule.map(({ userId, dateTime, price, id }, index) => (
              <CardAgendamentos
                key={index}
                price={price}
                userId={userId}
                dateTime={dateTime}
                id={id}
              />
            ))}
          </Carousel>
        </Container>
      ) : (
        <TextoDescritivo erro>
          Você ainda não possui agendamentos
        </TextoDescritivo>
      )}
      <Estrelinha src={clock} />
      <TextoFidelidade>Atualizar Dados</TextoFidelidade>
      <FormProfileClient />
      <Footer />
      <Notification />
    </BodyPage>
  );
};

export default ClientPerfilPage;
