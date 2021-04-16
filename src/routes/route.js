import { Redirect, Route as ReactDOMRoute } from "react-router-dom";
import NotFound from "../pages/NotFoundPage";
import { useHistory } from 'react-router-dom'

const Route = ({ islogin, isprivate, isclient, isbarber, component: Component, ...rest }) => {

  const history = useHistory()

  const token = JSON.parse(localStorage.getItem("token"));

  const isBarber = JSON.parse(localStorage.getItem('isBarber'))


  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isprivate === undefined && !!islogin === !!isprivate ? (
          <Component />
        ) : !!isprivate !== !!token || !!islogin === !!token ?  (
          <Redirect to={{pathname: '/'}} />
        ) : !!islogin === !!token ? (
          <Redirect to={{pathname: '/'}} />
        ) : isbarber === undefined && isclient === undefined ? (
          <Component />
        ) : !!isbarber === isBarber ? (
          <Component />
        ) : !!isclient === !isBarber ? (
          <Component />
        ) : <NotFound />
      }}
    />
  );
};

export default Route;
