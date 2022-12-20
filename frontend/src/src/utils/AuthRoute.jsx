import React from 'react';
import { useContext } from 'react';
import { Navigate, Route } from "react-router-dom";
import Auth from "./context/Auth";


const AuthRoute = ({path, component}) => {
const {isAuth} = useContext(Auth);

return isAuth ? (
<Route exact path={path} component={component} />
) : (
    <Navigate to="/login" />
)
}
export default AuthRoute;
// import { Navigate } from "react-router-dom";
// import { useAuth } from "./Hook/UseAuth";

// export const ProtectedRoute = ({ children }) => {
//   const { user } = useAuth();
//   if (!user) {
//     // user is not authenticated
//     return <Navigate to="/" />;
//   }
//   return children;
// };