import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomeLanding, Login, Register } from "../pages";
import { DashboardRoutes } from "./DashboardRoutes"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"

export const AppRouter = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // true is Logged
  const [userAdmin, setUserAdmin] = useState(null);

  // 

  // async function getRol(uid) {
  //   const docuRef = doc(db, `usuarios/${uid}`);
  //   const docuCifrada = await getDoc(docuRef);
  //   const infoFinal = docuCifrada.data().role;

  //   return infoFinal;
  // }

  // async function setUserWithFirebaseAndRol(usuarioFirebase) {
  //   getRol(usuarioFirebase.uid).then((role) => {
  //     const userData = {
  //       uid: usuarioFirebase.uid,
  //       email: usuarioFirebase.email,
  //       role: role,
  //     };
  //     setUserAdmin(userData);
  //     localStorage.setItem("llave", JSON.stringify(userData.role));
  //   });
  // }

  const auth = getAuth();

  // onAuthStateChanged(auth, (usuarioFirebase) => {
  //   if (usuarioFirebase) {
  //     // Funcion Final
  //     if (!userAdmin) {
  //       setUserWithFirebaseAndRol(usuarioFirebase);
  //     }
  //   } else {
  //     setUserAdmin(null);
  //   }
  // });

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      // dispatch(searchAsync(user.email))
      if (user?.uid) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [setIsLoggedIn, setChecking]);

  if (checking) {
    return (
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgb(238,127,55)",
          background: "black",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            width="200px"
            height="100px"
            style={{
              borderRadius: '50%'
            }}
            src="https://previews.123rf.com/images/karom/karom1509/karom150900269/45287913-bonsai-bonsai-con-macetas-en-gris-ilustraci%C3%B3n-background-vector-.jpg"
            alt="Loader"
          />
        </div>
      </div>
    );
  }

  // 
  return (
    <BrowserRouter>
      <Routes>
      <Route
          path="/"
          element={
            <PublicRoutes isAuth={isLoggedIn}>
              <HomeLanding />
            </PublicRoutes>
          }
        />

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
              <Register />

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
