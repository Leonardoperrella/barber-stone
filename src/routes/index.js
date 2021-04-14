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
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/cadastro-barbearia" component={BarberRegisterPage} />
        <Route path="/cadastro-cliente" component={ClientRegisterPage} />
        <Route path="/perfil-cliente" component={ClientPerfilPage} />
        <Route path="/perfil-barbearia" component={BarberPerfilPage} />

        <Route path="/descricao-barbearia" component={BarberPerfilPage} />

        <Route path="/detalhes-barbearia" component={BarberPage} />

        <Route path="/barbearias" component={Barbershop} />

        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
