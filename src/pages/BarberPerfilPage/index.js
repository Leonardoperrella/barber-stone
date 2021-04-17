import Menu from "../../components/Menu";
import { useEffect, useState } from "react";
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
import perfil from "../../images/barberIcon.svg";
import calendar from "../../images/calendar.svg";
import clock from "../../images/clock.svg";
import { animateScroll as scroll } from "react-scroll";
import ModalNewUser from "../../components/ModalNewUser";

const BarberPerfilPage = () => {
  const { schedule } = useSchedule();
  const { user, getUser, isNew } = useUser();
  const [render, setRender] = useState(false);
  const userId = JSON.parse(localStorage.getItem("userId"));

  useEffect(() => {
    getUser(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BodyPage>
      {render && <ModalNewUser />}
      {!isNew && scroll.scrollTo(0)}
      <Menu menuLink={menuLinkPerfilBarber} />
      {!isNew && (
        <>
          <BgPerfil />
          <ImgPerfil src={perfil} />
          <Nome>{user && user.name}</Nome>
          <TextoDescritivo>{user && user.description}</TextoDescritivo>
          <TransitionsModal />
          <IconePequeno src={calendar} />
          <TextoDescritivo>Seus clientes agendados</TextoDescritivo>
          {schedule.filter((e) => e.barberId === Number(userId)).length > 0 ? (
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
                  .filter((e) => e.barberId === Number(userId))
                  .map(({ userId, dateTime, id }, index) => (
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
        </>
      )}
      <IconePequeno src={clock} />
      <TextoDescritivo>
        {isNew ? `Complete seu cadastro` : `Atualizar Dados`}
      </TextoDescritivo>
      <FormProfileBarberShop setRender={setRender} />
      <Footer />
      <Notification />
    </BodyPage>
  );
};

export default BarberPerfilPage;
