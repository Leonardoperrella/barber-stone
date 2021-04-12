import Menu from '../../components/Menu'
import { menuLinkPerfilBarber } from '../../services/menuData'

import {
  BodyPage, BgPerfil, ImgPerfil, Nome, TextoDescritivo,
  Icon, IconePequeno, Logo, Descricao, Container, responsive
} from './styles'
import CardClient from '../../components/CardClient';
import FormProfileBarberShop from '../../components/FormProfileBarbershop';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React, { useState } from 'react';
import GlobalModal from '../../components/GlobalModal';

import { BtnOpenModal, BackDrop } from '../../components/GlobalModal/styles'


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

  const qtd = 4

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 900 ? true : false)

  window.onresize = () => window.innerWidth > 911 ? setIsDesktop(true) : setIsDesktop(false)

  return (
    <>

      <BodyPage>
        <Menu menuLink={menuLinkPerfilBarber} />
        <BgPerfil src='./img/imgBgBarberProfile.png' alt='' />

        {show ? <BackDrop onClick={closeModalHandler} > </BackDrop> : null}
        <BtnOpenModal onClick={() => setShow(true)} > </BtnOpenModal>
        <GlobalModal show={show} close={closeModalHandler} />

        <ImgPerfil src='./img/imgPerfilBarber.png' alt='' />
        <Nome>Barbearia do seu Zé</Nome>
        <TextoDescritivo>Aqui você encontra o melhor serviço da região para cabelo e barba, além de ótimo atendimento!</TextoDescritivo>


        <IconePequeno src='./img/imgAgendamentos.png' alt='' />
        <TextoDescritivo>Seus clientes agendados</TextoDescritivo>
        <CardClient />
        <IconePequeno src='./img/imgAtualizar.png' alt='' />
        <TextoDescritivo>Atualizar Dados</TextoDescritivo>
        <FormProfileBarberShop />
        <Logo src='./img/imgLogo.png' alt='logo' />
        <Descricao>Desenvolvido por <span style={{ color: '#BB8C4B' }}>squad 2</span></Descricao>

        <Menu menuLink={menuLinkPerfilBarber} />
        <BgPerfil src={isDesktop ? './img/imgBgProfileBarberDesktop.png' : './img/imgBgBarberProfile.png'} alt='' />
        <ImgPerfil src='./img/imgPerfilBarber.png' alt='' />
        <Nome>Barbearia do seu Zé</Nome>
        <TextoDescritivo>Aqui você encontra o melhor serviço da região para cabelo e barba, além de ótimo atendimento!</TextoDescritivo>
        <Icon src='./img/iconNovoFuncionario.png' alt='' />
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

};

export default BarberPerfilPage;
