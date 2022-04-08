import React, { ReactElement } from "react";
import { Navigate, Route as ReactDOMRoute, RouteProps as ReactDOMRouteProps } from "react-router-dom";

import { useAuth } from "../contexts/auth/auth";

/* interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: ReactElement;
} */

/* const CustomRoute = ({ isPrivate = false, component }) => {
  const { token, user } = useAuth();

  return isPrivate === !!user ? (
    component
  ) : (
    <Navigate to={isPrivate ? "/" : "/machines"} />
  );
};
 */

const CustomRoute = ({ isPrivate = false, component: Component }) => {
  const { user } = useAuth();
  return Component;

/*   return isPrivate === !!user ? (
    Component
  ) : (
    <Navigate to={isPrivate ? "/" : "/machines"} />
  ); */
};

/* return !!user? (component) : (<Navigate to={isPrivate ? "/" : "/machines"} state={location}/>)};
 */

/* return isPrivate === true && !!user ? (
    component
  ) : (
    <Navigate to={isPrivate === false ? component : "/"} />
  );
}; */
export default CustomRoute;
