import React, { ReactElement, useEffect } from "react";
import {
  Navigate,
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  useLocation,
} from "react-router-dom";

import { useAuth } from "../contexts/auth/auth";
import { useSocket } from "../contexts/socket/socket";

/* interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: ReactElement;
} */

const CustomRoute = ({ isPrivate = false, component }) => {
  const { token, user } = useAuth();
  const location = useLocation();
  const { stateSocket } = useSocket();

  useEffect(() => {
    if (
      location.pathname != "/workstation/details" &&
      location.pathname != "/machines"
    ) {
      //console.log("Iniciou");
      stateSocket.ioSocket.emit("set_socket_data", {
        inMachineList: false,
        inMachineDetails: false,
        machine_list: new Array(),
        locationUrl: "No list and no details",
      });
    }
  }, []);

  return isPrivate === !!user ? (
    component
  ) : (
    <Navigate to={isPrivate ? "/" : "/machines"} />
  );
};

/*const CustomRoute = ({ isPrivate = false, component: Component }) => {
  const { user } = useAuth();
  return Component;

   return isPrivate === !!user ? (
    Component
  ) : (
    <Navigate to={isPrivate ? "/" : "/machines"} />
  ); 
};*/

/* return !!user? (component) : (<Navigate to={isPrivate ? "/" : "/machines"} state={location}/>)};
 */

/* return isPrivate === true && !!user ? (
    component
  ) : (
    <Navigate to={isPrivate === false ? component : "/"} />
  );
}; */
export default CustomRoute;
