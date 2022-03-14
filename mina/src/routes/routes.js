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

import RegisterColector from "../components/register-colector";
import Workstation from "../components/workstation";
import Machines from "../pages/begin";
import WorkstationList from "../pages/workstation list";
import Register from "../pages/workstation register";

/* import Error from '../components/404'; */

const Routees = () => {
  // const location = useLocation();

  return (
    <BrowserRouter>
      {/* { location.pathname !== '/'
         && location.pathname !== '/forgot'
          && location.pathname !== '/404'
           && !location.pathname.includes('resetpassword')
           && <Error/>} */}
      <Routes>
        <Route path="/" element={<Machines />} />
        <Route path="workstation">
          <Route index element={<WorkstationList />} />
          <Route path="details" element={<Workstation />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/registercolector" element={<RegisterColector />} />
        {/* <Route path='*' element={<Error/>}/> */}
      </Routes>
    </BrowserRouter>
  );
};
export default Routees;
