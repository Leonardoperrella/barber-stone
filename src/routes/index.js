import { Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LoginPage from "../pages/LoginPage";
import BarberRegisterPage from "../pages/BarberRegisterPage";
import ClientRegisterPage from "../pages/ClientRegisterPage";
import ClientPerfilPage from "../pages/ClientPerfilPage";
import BarberPerfilPage from "../pages/BarberPerfilPage";
import HomePage from "../pages/HomePage";
import Route from "./route";
import NotFound from "../pages/NotFoundPage";
import Barbershop from "../pages/Barbershop";
import BarberPage from "../pages/BarberPage";

const Routes = () => {
  
  const isBarber = JSON.parse(localStorage.getItem('isBarber'))

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/entrar" component={LoginPage} islogin/>
        <Route path="/cadastro-barbearia" component={BarberRegisterPage} />
        <Route path="/cadastro-cliente" component={ClientRegisterPage} />
        <Route path="/perfil-cliente" component={ClientPerfilPage} isprivate isclient />
        <Route path="/perfil-barbearia" component={BarberPerfilPage} isprivate isbarber />
        <Route path="/detalhes-barbearia" component={BarberPage} isprivate/>
        <Route path="/barbearias" component={Barbershop} isprivate />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
