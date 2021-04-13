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
        <Route path="/home" component={HomePage} isPrivate />
        <Route
          path="/register-barber"
          component={BarberRegisterPage}
          isPrivate
        />
        <Route path="/register-client" component={ClientRegisterPage} />
        <Route path="/profile-client" component={ClientPerfilPage} isPrivate />
        <Route path="/profile-barbershop" component={BarberPerfilPage} />
        <Route
          path="/description-barbershop"
          component={BarberPerfilPage}
          isPrivate
        />
        <Route path="/barbershops" component={Barbershop} isPrivate />
        <Route path="/barber-page" component={BarberPage} isPrivate />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
