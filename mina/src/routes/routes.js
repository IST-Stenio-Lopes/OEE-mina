/*import React from "react";
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
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

import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import PersonalizedAlerts from "../components/alert";
import RegisterColector from "../pages/collectors/register-colector";
import ColumnOee from "../pages/workstation/workstation-details/bar-chart2/index";
import { useAlert } from "../contexts/alert/alert";
import { useAuth } from "../contexts/auth/auth";
import Machines from "../pages/begin";
import Collectors from "../pages/collectors";
import SignIn from "../pages/signIn";
import WorkstationList from "../pages/workstation/workstation list";
import Register from "../pages/workstation/workstation-register";
import CustomRoute from "./custom";
import WorkstationDetails from "../pages/workstation/workstation-details";

/* import Error from '../components/404'; */

const Routees = () => {
  //const location = useLocation(); tá deixando tudo branco, nn sei pq
  const { user } = useAuth();
  const { stateAlert, dispatch } = useAlert();

  return (
    <BrowserRouter>
      <PersonalizedAlerts
        visibility={stateAlert.visibility}
        type={stateAlert.type}
        title={stateAlert.title}
        msg={stateAlert.msg}
      />
      {/* { location.pathname !== '/'
         && location.pathname !== '/forgot'
          && location.pathname !== '/404'
           && !location.pathname.includes('resetpassword')
           && <Error/>} */}

      <Routes>
        <Route path="/" element={<CustomRoute component={<SignIn />} />} />
        <Route
          path="/machines"
          element={<CustomRoute component={<Machines />} />}
        />
        <Route path="workstation">
          <Route
            index
            element={<CustomRoute component={<WorkstationList />} />}
          />
          <Route
            path="details"
            element={<CustomRoute component={<WorkstationDetails />} />}
          />
          <Route
            path="register"
            element={<CustomRoute component={<Register />} />}
          />
        </Route>
        <Route
          path="collector"
          element={<CustomRoute component={<Collectors />} />}
        />
        <Route
          path="/registercolector"
          element={<CustomRoute component={<RegisterColector />} />}
        />

        <Route path="test" element={<ColumnOee />} />
        {/* <Route path='*' element={<Error/>}/> */}
      </Routes>
    </BrowserRouter>
  );
};
export default Routees;
