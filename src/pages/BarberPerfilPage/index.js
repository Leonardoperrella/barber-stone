<<<<<<< HEAD
import Menu from '../../components/Menu'
import { menuLinkPerfilBarber } from '../../services/menuData'

import {
  BodyPage, BgPerfil, ImgPerfil, Nome, TextoDescritivo,
  Icon, IconePequeno, Logo, Descricao, Container, responsive
} from './styles'
import CardClient from '../../components/CardClient';
import FormProfileBarberShop from '../../components/FormProfileBarbershop';
=======
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { menuLinkPerfilBarber } from "../../services/menuData";
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
} from "./styles";
import CardClient from "../../components/CardClient";
import FormProfileBarberShop from "../../components/FormProfileBarbershop";
import { useState, useEffect } from "react";
>>>>>>> 4655cb43c4e8be5f6fd1d66fd81de9fe0bafb32f
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSchedule } from "../../providers/Schedule";
import { useUsers } from "../../providers/Users";

<<<<<<< HEAD
import React, { useState } from 'react';
import GlobalModalNovoFuncionario from '../../components/GlobalModalNovoFuncionario';

import { BtnOpenModal, BackDrop } from '../../components/GlobalModalNovoFuncionario/styles'

const BarberPerfilPage = () => {

  const [show, setShow] = useState(false);

  const closeModalHandler = () => setShow(false);

  const buildArray = () => {
    let array = []
    for (let i = 0; i < qtd; i++) {
      array.push(i)
    }
    return array
  }
=======
// temporário
import perfil from "../../images/barberIcon.svg";
import calendar from "../../images/calendar.svg";
import clock from "../../images/clock.svg";
const BarberPerfilPage = () => {
  const { schedule, getSchedule } = useSchedule();
  const { getUsers } = useUsers();

  const userId = JSON.parse(localStorage.getItem("userId"));

  const qtd = 4;

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
  }, []);
>>>>>>> 4655cb43c4e8be5f6fd1d66fd81de9fe0bafb32f

  const qtd = 4

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 900 ? true : false)

  window.onresize = () => window.innerWidth > 911 ? setIsDesktop(true) : setIsDesktop(false)

  return (
<<<<<<< HEAD
    <>

      <BodyPage>
        <Menu menuLink={menuLinkPerfilBarber} />
        <BgPerfil src={isDesktop ? './img/imgBgProfileBarberDesktop.png' : './img/imgBgBarberProfile.png'} alt='' />       

        <ImgPerfil src='./img/imgPerfilBarber.png' alt='' />
        <Nome>Barbearia do seu Zé</Nome>
        <TextoDescritivo>Aqui você encontra o melhor serviço da região para cabelo e barba, além de ótimo atendimento!</TextoDescritivo>

        {/* <Icon src='./img/iconNovoFuncionario.png' alt='' /> */}
        
        {show ? <BackDrop onClick={closeModalHandler} > </BackDrop> : null}
        <BtnOpenModal onClick={() => setShow(true)} > </BtnOpenModal>
        <GlobalModalNovoFuncionario show={show} close={closeModalHandler} />        
        
        <IconePequeno src='./img/imgAgendamentos.png' alt='' />
        <TextoDescritivo>Seus clientes agendados</TextoDescritivo>
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
            <CardClient /><CardClient /><CardClient /><CardClient />
          </Carousel>
        </Container>
        <IconePequeno src='./img/imgAtualizar.png' alt='' />
        <TextoDescritivo>Atualizar Dados</TextoDescritivo>
        <FormProfileBarberShop />
        <Logo src='./img/imgLogo.png' alt='logo' />
        <Descricao>Desenvolvido por <span style={{ color: '#BB8C4B' }}>squad 2</span></Descricao>
      </BodyPage>

    </>
  )

=======
    <BodyPage>
      <Menu menuLink={menuLinkPerfilBarber} />
      <BgPerfil />
      <ImgPerfil src={perfil} />
      <Nome>Barbearia do seu Zé</Nome>
      <TextoDescritivo>
        Aqui você encontra o melhor serviço da região para cabelo e barba, além
        de ótimo atendimento!
      </TextoDescritivo>
      <Icon src="./img/iconNovoFuncionario.png" alt="" />
      <IconePequeno src={calendar} />
      <TextoDescritivo>Seus clientes agendados</TextoDescritivo>
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
          {schedule.map(({ userId, dataHora }, index) => (
            <CardClient key={index} userId={userId} dataHora={dataHora} />
          ))}
        </Carousel>
      </Container>
      <IconePequeno src={clock} />
      <TextoDescritivo>Atualizar Dados</TextoDescritivo>
      <FormProfileBarberShop />
      <Logo src="./img/imgLogo.png" alt="logo" />
      <Descricao>
        Desenvolvido por <span style={{ color: "#BB8C4B" }}>squad 2</span>
      </Descricao>
    </BodyPage>
  );
>>>>>>> 4655cb43c4e8be5f6fd1d66fd81de9fe0bafb32f
};

export default BarberPerfilPage;
