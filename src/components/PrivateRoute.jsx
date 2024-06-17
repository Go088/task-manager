import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectToken } from "../redux/features/auth/selectors";

export default function PrivateRoute() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isTokenActive = useSelector(selectToken);
  console.log(isTokenActive);

  if(!isLoggedIn && !isTokenActive) {
    return <Navigate to="/welcome"/>;
  }

  return <Outlet/>
}
