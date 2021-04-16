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
  const { schedule } = useSchedule();
  const { user, getUser } = useUser();

  
  const userId = JSON.parse(localStorage.getItem("userId"));

  const [filteredSchedule, setFilteredSchedule ] = useState([])
  
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth > 900 ? true : false
  );

  window.onresize = () =>
    window.innerWidth > 900 ? setIsDesktop(true) : setIsDesktop(false);

  useEffect(() => {
    getUser(userId);
    setFilteredSchedule(schedule.filter(e=>e.userId===userId))
  }, [schedule]);

  console.log(schedule)

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
          >
            {filteredSchedule.map(
              ({ barberId, dateTime, price, id }, index) => (
                <CardAgendamentos
                  key={index}
                  price={price}
                  barberId={barberId}
                  dateTime={dateTime}
                  id={id}
                />
              )
            )}
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
