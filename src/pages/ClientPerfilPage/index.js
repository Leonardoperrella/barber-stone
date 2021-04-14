import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import Notification from "../../components/Notification";
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
import { useUser } from "../../providers/User";

// temporário
import perfil from "../../images/perfilClient.jpg";
import scissors from "../../images/ScissorsGold.svg";
import star from "../../images/star.svg";
import calendar from "../../images/calendar.svg";
import clock from "../../images/clock.svg";

const ClientPerfilPage = () => {
  const { schedule, getSchedule } = useSchedule();
  const { user, getUser } = useUser();

  const [filteredSchedule, setFilteredSchedule] = useState([]);

  const userId = JSON.parse(localStorage.getItem("userId"));
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth > 900 ? true : false
  );

  window.onresize = () =>
    window.innerWidth > 900 ? setIsDesktop(true) : setIsDesktop(false);

  const baseDate = new Date().toLocaleString().split(" ")[0].split("/");
  const baseDateYear = Number(baseDate[2]);
  const baseDateMonth = Number(baseDate[1]) - 1;
  const baseDateDay = Number(baseDate[0]);
  const today = new Date(baseDateYear, baseDateMonth, baseDateDay);

  useEffect(() => {
    getSchedule(`/scheduling/?userId=${userId}`);
    setFilteredSchedule(
      schedule.filter((obj) => new Date(obj.dateTime) >= today)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schedule]);

  useEffect(() => {
    getUser(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BodyPage>
      <Menu menuLink={menuLinkPerfilClient} />
      <BgPerfil />
      <ImgPerfil src={perfil} />
      <Nome>{user && user.name}</Nome>
      <Estrelinha src={star} />
      <TextoFidelidade>Vale fidelidade</TextoFidelidade>
      <Descricao>
        a cada dez serviços ganhe um de graça nas barbearias participantes
      </Descricao>
      {user && user.scissors > 0 ? (
        <BoxFidelidade>
          {isDesktop && user && user.scissors < 5 ? (
            Array(user && user.scissors)
              .fill(0)
              .map((item, index) => <Tesoura key={index} src={scissors} />)
          ) : (
            <>
              <ContFidelidade>{user && user.scissors}x</ContFidelidade>
              <Tesoura src={scissors} />
            </>
          )}
        </BoxFidelidade>
      ) : (
        <TextoDescritivo erro>
          Você ainda não possui serviços concluídos
        </TextoDescritivo>
      )}
      <Estrelinha src={calendar} />
      <TextoFidelidade>Seus agendamentos</TextoFidelidade>
      {filteredSchedule.length > 0 ? (
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
            {filteredSchedule
              .filter((obj) => new Date(obj.dateTime) >= today)
              .map(({ barberId, dateTime, price, id }, index) => (
                <CardAgendamentos
                  key={index}
                  price={price}
                  barberId={barberId}
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
