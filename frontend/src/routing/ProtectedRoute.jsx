import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import ErrorPage from "../pages/Error/Error";
const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.user);

  // show unauthorized screen if no user is found in redux store
  if (!userInfo) {
    return (
      <ErrorPage/>
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
