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
  Icon,
  IconePequeno,
  Logo,
  Descricao,
  Container,
  responsive,
  BtnOpenModal,
  BackDrop,
  ModalWrapper,
  ModalHeader,
  ModalHeaderSpan,
  ModalContent,
  ModalBody,
  ModalBodyP,
  ModalBodyH4,
} from "./styles";
import CardClient from "../../components/CardClient";
import FormProfileBarberShop from "../../components/FormProfileBarbershop";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSchedule } from "../../providers/Schedule";
import { useUsers } from "../../providers/Users";
import GlobalModalAgendarHorario from "../../components/GlobalModalAgendarHorario";
import { useUser, getUser } from "../../providers/User";

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

  const baseDate = new Date().toLocaleString().split(" ")[0].split("/");
  const baseDateYear = Number(baseDate[2]);
  const baseDateMonth = Number(baseDate[1]) - 1;
  const baseDateDay = Number(baseDate[0]);
  const today = new Date(baseDateYear, baseDateMonth, baseDateDay);

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
    getUser(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BodyPage>
      <Menu menuLink={menuLinkPerfilBarber} />
      <BgPerfil />
      <ImgPerfil src={perfil} />
      <Nome>{user && user.name}</Nome>
      <TextoDescritivo>
        Aqui você encontra o melhor serviço da região para cabelo e barba, além
        de ótimo atendimento!
      </TextoDescritivo>

      {show ? <BackDrop onClick={closeModalHandler}> </BackDrop> : null}
      <BtnOpenModal onClick={() => setShow(true)}> </BtnOpenModal>
      <GlobalModalAgendarHorario show={show} close={closeModalHandler} />

      {/* <Icon src="./img/iconNovoFuncionario.png" alt="" /> */}

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
            arrows
          >
            {schedule
              .filter((obj) => new Date(obj.dateTime) >= today)
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
      <IconePequeno src={clock} />
      <TextoDescritivo>Atualizar Dados</TextoDescritivo>
      <FormProfileBarberShop />
      <Footer />
    </BodyPage>
  );
};

export default BarberPerfilPage;
