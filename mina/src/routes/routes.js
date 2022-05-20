import PersonalizedAlerts from "../components/alert";
import Menu from "../components/menu";
import { useAlert } from "../contexts/alert/alert";
import { useAuth } from "../contexts/auth/auth";
import { SocketActions, useSocket } from "../contexts/socket/socket";
import Machines from "../pages/begin";
import Collectors from "../pages/collectors";
import RegisterColector from "../pages/collectors/register-colector";
import SignIn from "../pages/signIn";
import WorkstationList from "../pages/workstation/workstation list";
import WorkstationDetails from "../pages/workstation/workstation-details";
import ColumnOee from "../pages/workstation/workstation-details/bar-chart2/index";
import Register from "../pages/workstation/workstation-register";
import CustomRoute from "./custom";
/*import React from "react";
import { useEffect } from 'react-router-dom';
import Machines from "../components/machines";
import Workstation from "../components/workstation";
import Register from "../components/register";

export function Routes(){
    return(
        <div>
            
        </div>
    );
}

const Routes = () => {
    return(
        <BrowserRouter>
            <Route Component = { Machines } path="/" exact />
            <Route Component = { Workstation } path="/workstation" exact />
            <Route Component = { Register } path="/usuario" exact />
        </BrowserRouter>
    )
}

export default Routes;*/

import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

/* import Error from '../components/404'; */

const Routees = () => {
  //const location = useLocation(); tá deixando tudo branco, nn sei pq
  const { user } = useAuth();
  const { stateAlert } = useAlert();
  const { dispatch } = useSocket();

  /*   const handleSocketSetLocation = (value) => {
    dispatch({
      type: SocketActions.setLocation,
      payload: value,
    });
  };

  useEffect(() => {
    handleSocketSetLocation(location.pathname);
  }, [location]); */

  return (
    <BrowserRouter>
      <PersonalizedAlerts
        visibility={stateAlert.visibility}
        type={stateAlert.type}
        title={stateAlert.title}
        msg={stateAlert.msg}
      />
      <Menu />
      {/* { location.pathname !== '/'
         && location.pathname !== '/forgot'
          && location.pathname !== '/404'
           && !location.pathname.includes('resetpassword')
           && <Error/>} */}

      <Routes>
        <Route path="/" element={<CustomRoute component={<SignIn />} />} />
        <Route
          path="/machines"
          element={<CustomRoute isPrivate component={<Machines />} />}
        />
        <Route path="workstation">
          <Route
            index
            element={<CustomRoute isPrivate component={<WorkstationList />} />}
          />
          <Route
            path="details"
            element={
              <CustomRoute isPrivate component={<WorkstationDetails />} />
            }
          />
          <Route
            path="register"
            element={<CustomRoute isPrivate component={<Register />} />}
          />
        </Route>
        <Route
          path="collector"
          element={<CustomRoute isPrivate component={<Collectors />} />}
        />
        <Route
          path="/registercolector"
          element={<CustomRoute isPrivate component={<RegisterColector />} />}
        />

        <Route path="test" element={<ColumnOee />} />
        {/* <Route path='*' element={<Error/>}/> */}
      </Routes>
    </BrowserRouter>
  );
};
export default Routees;
