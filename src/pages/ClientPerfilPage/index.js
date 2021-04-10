import Menu from '../../components/Menu'
import { BodyPage, BgPerfil, ImgPerfil, Nome, Estrelinha, TextoFidelidade, Descricao,
        BoxFidelidade, Tesoura, ContFidelidade, Logo } from './styles'
import FormProfileClient from '../../components/FormProfileClient'
import CardAgendamentos from '../../components/CardAgendamentos'
import { menuLinkPerfilClient } from '../../services/menuData'

const ClientPerfilPage = () => {
    return (
        <BodyPage>
            <Menu menuLink={menuLinkPerfilClient} />
            <BgPerfil src='./img/imagePerfilClient.png' alt='background perfil' />
            <ImgPerfil src='./img/imageClient.png' alt='imagem de perfil' />
            <Nome>Filipe</Nome>
            <Estrelinha src='./img/imgEstrela.png' alt='background perfil' />
            <TextoFidelidade>Vale fidelidade</TextoFidelidade>
            <Descricao>a cada dez agendamentos ganhe um de graça nas barbearias participantes</ Descricao>
            <BoxFidelidade>
                <ContFidelidade>4x</ContFidelidade>
                <Tesoura src='./img/imgTesoura.png' />
            </BoxFidelidade>
            <Estrelinha src='./img/imgAgendamentos.png' />
            <TextoFidelidade>Seus agendamentos</TextoFidelidade>
            <CardAgendamentos />
            <Estrelinha src='./img/imgAtualizar.png' />
            <TextoFidelidade>Atualizar Dados</TextoFidelidade>
            <FormProfileClient />
            <Logo src='./img/imgLogo.png' />
            <Descricao>Desenvolvido por <span style={{color:'#BB8C4B'}}>squad 2</span></Descricao>
        </BodyPage>
    )
}

export default ClientPerfilPage