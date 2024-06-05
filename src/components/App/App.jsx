import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const WelcomePage = lazy(() => import("../../pages/WelcomePage/WelcomePage"));
const AuthPage = lazy(() => import("../../pages/AuthPage/AuthPage"));
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));

export const App = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/auth/:id" element={<AuthPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
