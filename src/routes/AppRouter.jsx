import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../components/login/Login"
import { AppLanding } from "../pages/AppLading/AppLanding"
import { DashboardRoutes } from "./DashboardRoutes"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"

export const AppRouter = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // true is Logged
  const [userAdmin, setUserAdmin] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoutes isAuth={isLoggedIn}>
              <Login />
            </PublicRoutes>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoutes isAuth={isLoggedIn}>
              {/* <Register /> */}
            </PublicRoutes>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoutes isAuth={isLoggedIn}>
              <DashboardRoutes userAdmin={userAdmin} />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
