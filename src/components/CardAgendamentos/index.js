import Tesoura from "../../images/ScissorsGold.svg";
import {Card, ImgContainer} from './styles';

const CardAgendamentos = () => {

    return (

        <Card>
            <div>
                <div>
                    <img src={Tesoura} />
                </div>
                <p>Barbearia do seu zé</p>
                <p>07/05/2021 - 14:00</p>
                <p30>R$ 30</p30>
            </div>
        </Card>
    )
};

export default CardAgendamentos;