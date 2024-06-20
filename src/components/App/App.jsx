import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import ScreenPage from "../ScreenPage/ScreenPage";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/features/auth/operations";
import { selectIsRefreshing } from "../../redux/features/auth/selectors";
import Loader from "../Loader/Loader";
import RestrictedRoute from "../RestrictedRoute";
import { Toaster } from "react-hot-toast";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import PrivateRoute from "../PrivateRoute";

const WelcomePage = lazy(() => import("../../pages/WelcomePage/WelcomePage"));
const AuthPage = lazy(() => import("../../pages/AuthPage/AuthPage"));
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Layout>
        {isRefreshing ? (
          <Loader />
        ) : (
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/welcome"
                element={
                  <RestrictedRoute
                    component={<WelcomePage />}
                    redirectTo="/home"
                  />
                }
              />
              <Route
                path="/auth/:id"
                element={
                  <RestrictedRoute
                    component={<AuthPage />}
                    redirectTo="/home"
                  />
                }
              />
              <Route
                path="/home"
                element={
                  // <HomePage />
                  <PrivateRoute
                    component={<HomePage />}
                    redirectTo="/welcome"
                  />
                }
              >
                <Route path=":id" element={<ScreenPage />} />
              </Route>
              <Route
                path="*"
                element={
                  <RestrictedRoute
                    component={<NotFoundPage />}
                    redirectTo="/welcome"
                  />
                }
              />
            </Routes>
          </Suspense>
        )}
      </Layout>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default App;
