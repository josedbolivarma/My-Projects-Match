import axios from "axios";
import { useReducer } from "react";
import { authReducer, AuthContext } from "./";
import { types, typesRegister } from "./types";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { facebook, google } from "../../firebase/firebaseConfig";

import Swal from "sweetalert2";

export const AuthProvider = ({ children }) => {

  const [state, dispatch] = useReducer(authReducer, null);


  // Logout Async

  const logoutAsync = () => {
    const auth = getAuth();
    signOut(auth).then(({ user }) => {
      logoutSync();
      localStorage.removeItem('userAc');
      console.log('Adios', user );
    })
    .catch((error) => {
      console.log(error);
    })
  }

  // Logout Sync
  const logoutSync = () => {
    dispatch({ type: types.authLogout });
  }



// Login Async

const loginEmailPassword = async (user) => {
  
  const { email, password } = user;
  
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then(({ user }) => {
        Swal.fire('Bienvenido', 'Inicio de sesión exitoso!', 'success');
        loginSincronico(user.email, user.password)
      })
      .catch((error) => {
        console.error("Error en la consulta : " + error);
        Swal.fire("Error!", "Contraseña o email incorrecto!", "error");
      });

}
      
      // Login Sincronico

  const loginSincronico = (email, password) => {
    dispatch({
      type: types.authLogin,
      payload: { email, password }
    });
  }

  // Register Asincronico
  const registerAsync = (email, password) => {
    const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({user}) => {
                // await updateProfile(auth.currentUser, { displayName: name })
                Swal.fire('Bienvenido', 'Registro exitoso!', 'success');
                dispatch(registerSync(user.email, user.password));
            })
            .catch(error => {
              console.error("Error en la consulta : " + error);
              Swal.fire("Error!", "Contraseña o email incorrecto!", "error");
            })
  }
  
  // Registro Sincronico
  const registerSync = (email, password) => {
    return {
      type: typesRegister.register,
      payload: {
          email,
          password,
      }
  }
  }
  return (
    <AuthContext.Provider value={{
        // Properties
        state,
        // Methods
        loginEmailPassword,
        logoutAsync,
        registerAsync
    }}>
        { children }
    </AuthContext.Provider>
  )
}
