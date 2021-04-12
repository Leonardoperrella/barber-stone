import Menu from '../../components/Menu'
import { BodyPage, BgPerfil, ImgPerfil, Nome, Estrelinha, TextoFidelidade, Descricao,
        BoxFidelidade, Tesoura, ContFidelidade, Logo, responsive,
        Container } from './styles'
import FormProfileClient from '../../components/FormProfileClient'
import CardAgendamentos from '../../components/CardAgendamentos'
import { menuLinkPerfilClient } from '../../services/menuData'
import { useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ClientPerfilPage = () => {

    const qtd = 4

    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 900 ? true : false)

    window.onresize= () => window.innerWidth > 900 ? setIsDesktop(true) : setIsDesktop(false)

    const buildArray = () => {
        let array = []
        for(let i = 0; i < qtd; i++) {
            array.push(i)
        }
        return array
    }

    return (
        <BodyPage>
            <Menu menuLink={menuLinkPerfilClient} />
            <BgPerfil src={isDesktop ? './img/imgBgProfileClientDesktop.png' : './img/imagePerfilClient.png' } alt='background perfil' />
            <ImgPerfil src='./img/imageClient.png' alt='imagem de perfil' />
            <Nome>Filipe</Nome>
            <Estrelinha src='./img/imgEstrela.png' alt='background perfil' />
            <TextoFidelidade>Vale fidelidade</TextoFidelidade>
            <Descricao>a cada dez agendamentos ganhe um de graça nas barbearias participantes</ Descricao>
            <BoxFidelidade>
                {isDesktop ? buildArray().map(e=><Tesoura src='./img/imgTesoura.png' />): (
                    <>
                        <ContFidelidade>{qtd}x</ContFidelidade>
                        <Tesoura src='./img/imgTesoura.png' />
                    </>
                )}
            </BoxFidelidade>
            <Estrelinha src='./img/imgAgendamentos.png' />
            <TextoFidelidade>Seus agendamentos</TextoFidelidade>
            <Container id='odio'>
                <Carousel
                    id='amor'
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
                    <CardAgendamentos /><CardAgendamentos /><CardAgendamentos /><CardAgendamentos />
                </Carousel>
            </Container>
            <Estrelinha src='./img/imgAtualizar.png' />
            <TextoFidelidade>Atualizar Dados</TextoFidelidade>
            <FormProfileClient />
            <Logo src='./img/imgLogo.png' />
            <Descricao>Desenvolvido por <span style={{color:'#BB8C4B'}}>squad 2</span></Descricao>
        </BodyPage>
    )
}

export default ClientPerfilPage