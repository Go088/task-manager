import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectToken,
} from "../redux/features/auth/selectors";

export default function PrivateRoute({
  component: Component,
  redirectTo = "/home",
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isTokenActive = useSelector(selectToken);

  if (!isLoggedIn || !isTokenActive) {
    return <Navigate to={redirectTo} />;
  }

  return Component;
}
