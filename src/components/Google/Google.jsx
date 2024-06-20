import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { setToken } from "../../redux/features/auth/authSlice";

const getQueryParams = (queryString) => {
  return queryString
    .slice(1) // Remove the leading '?'
    .split("&") // Split the string by '&'
    .reduce((acc, param) => {
      const [key, value] = param.split("=");
      acc[key] = decodeURIComponent(value);
      return acc;
    }, {});
};

export default function Google() {
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = getQueryParams(location.search);
  const token = queryParams.token;
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (token) {
      console.log("Token:", token);

      dispatch(setToken(token));
      setRedirect(true);
    }
  }, [token, dispatch]);

  if (redirect) {
    return <Navigate to="/home" replace />;
  }

  return <Navigate to="/welcome" replace />;
}
