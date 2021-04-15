import { useState, useEffect } from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { menuLinkPerfilBarber } from "../../services/menuData";
import "../../styles/global.css";
import {
  BodyPage,
  BgPerfil,
  ImgPerfil,
  Nome,
  TextoDescritivo,
  IconePequeno,
  Container,
  responsive,
} from "./styles";
import CardClient from "../../components/CardClient";
import FormProfileBarberShop from "../../components/FormProfileBarbershop";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TransitionsModal from "../../components/ModalNewFunc";
import { useUser } from "../../providers/User";
import { useSchedule } from "../../providers/Schedule";
import Notification from "../../components/Notification";

// temporário
import perfil from "../../images/barberIcon.svg";
import calendar from "../../images/calendar.svg";
import clock from "../../images/clock.svg";

const BarberPerfilPage = () => {
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);

  const { schedule, getSchedule } = useSchedule();
  const { user, getUser } = useUser();

  const userId = JSON.parse(localStorage.getItem("userId"));

  const qtd = 4;

  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth > 900 ? true : false
  );

  window.onresize = () =>
    window.innerWidth > 911 ? setIsDesktop(true) : setIsDesktop(false);

  useEffect(() => {
    getSchedule(`/scheduling/?barberId=${userId}`);
  }, []);

  useEffect(() => {
    getUser(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BodyPage>
      <Menu menuLink={menuLinkPerfilBarber} />
      <BgPerfil />
      <ImgPerfil src={perfil} />
      <Nome>{user && user.name}</Nome>
      <TextoDescritivo>{user && user.description}</TextoDescritivo>
      <TransitionsModal />
      <IconePequeno src={calendar} />
      <TextoDescritivo>Seus clientes agendados</TextoDescritivo>
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
          >
            {schedule.map(({ userId, dateTime, id }, index) => (
              <CardClient
                key={index}
                userId={userId}
                dateTime={dateTime}
                id={id}
              />
            ))}
          </Carousel>
        </Container>
      ) : (
        <TextoDescritivo erro>
          Você ainda não possui nenhum cliente agendado
        </TextoDescritivo>
      )}
      <IconePequeno src={clock} />
      <TextoDescritivo>Atualizar Dados</TextoDescritivo>
      <FormProfileBarberShop />
      <Footer />
      <Notification />
    </BodyPage>
  );
};

export default BarberPerfilPage;
