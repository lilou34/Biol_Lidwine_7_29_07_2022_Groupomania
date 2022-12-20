import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import ErrorPage from "../pages/Error/Error";
const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.user);

  // afficher page d'erreur si aucun utilisateur n’est trouvé dans redux store, sinon renvoi la page home et les routes protégées//
  if (!userInfo) {
    return (
      <ErrorPage/>
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
