import axios from "axios";
import { useReducer } from "react";
import { authReducer, AuthContext } from "./";
import { types } from "./types";

import Swal from "sweetalert2";

export const AuthProvider = ({ children }) => {

  const [state, dispatch] = useReducer(authReducer, null);

  const loginEmailPassword = async (user) => {

    const { email, password } = user;

        await axios.post('http://localhost:4000/api/auth', {
            email,
            password
        }).then(function (response) {
            let data = response.data;
//  saveToken(dato.token);

            Swal.fire('Bienvenido', 'Inicio de sesión exitoso!', 'success');
            
            dispatch({
                type: types.authLogin,
                payload: user
            })
        }).catch(function (error) {
            console.error("Error en la consulta : " + error);
          Swal.fire("Error!", "Contraseña o email incorrecto!", "error");
        });

  }

  return (
    <AuthContext.Provider value={{
        // Properties
        state,
        // Methods
        loginEmailPassword
    }}>
        { children }
    </AuthContext.Provider>
  )
}
