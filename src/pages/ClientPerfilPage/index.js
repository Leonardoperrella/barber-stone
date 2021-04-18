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
  responsive,
  Container,
  TextoDescritivo,
  IconePequeno,
  TextoComplete,
} from "./styles";
import FormProfileClient from "../../components/FormProfileClient";
import CardAgendamentos from "../../components/CardAgendamentos";
import { menuLinkPerfilClient } from "../../services/menuData";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSchedule } from "../../providers/Schedule";
import { useUser } from "../../providers/User";
import { animateScroll as scroll } from "react-scroll";
import perfil from "../../images/perfilClient.jpg";
import scissors from "../../images/ScissorsGold.svg";
import star from "../../images/star.svg";
import calendar from "../../images/calendar.svg";
import clock from "../../images/clock.svg";
import ModalNewUser from "../../components/ModalNewUser";

const ClientPerfilPage = () => {
  const { schedule } = useSchedule();
  const { user, getUser, isNew } = useUser();
  const [render, setRender] = useState(false);
  const userId = JSON.parse(localStorage.getItem("userId"));
  const [filteredSchedule, setFilteredSchedule] = useState([]);

  useEffect(() => {
    getUser(userId);
    setFilteredSchedule(schedule.filter((e) => e.userId === userId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schedule]);

  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth > 900 ? true : false
  );

  window.onresize = () =>
    window.innerWidth > 900 ? setIsDesktop(true) : setIsDesktop(false);

  useEffect(() => {
    getUser(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BodyPage>
      {render && <ModalNewUser />}
      {!isNew && scroll.scrollTo(0)}
      <Menu menuLink={menuLinkPerfilClient} isNew={isNew} />
      {!isNew && (
        <>
          <BgPerfil />
          <ImgPerfil src={perfil} />
          <Nome>{user.name}</Nome>
          <Estrelinha src={star} />
          <TextoFidelidade>Vale fidelidade</TextoFidelidade>
          <Descricao>
            a cada dez serviços ganhe um corte de graça nas barbearias
            participantes
          </Descricao>
          <Descricao isOther="true">Seus selos</Descricao>
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
        </>
      )}
      <IconePequeno src={clock} />
      <TextoFidelidade>
        {isNew ? `Complete seu cadastro` : `Atualizar Dados`}
      </TextoFidelidade>
      <TextoComplete>
        Conclua aqui seu cadastro para poder avançar
      </TextoComplete>
      <FormProfileClient setRender={setRender} />
      <Footer />
      <Notification />
    </BodyPage>
  );
};

export default ClientPerfilPage;
