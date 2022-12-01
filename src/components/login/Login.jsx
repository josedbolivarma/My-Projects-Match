import React, { useEffect, useState } from "react";
import "./Login.css";
import logo from "../../assets/img/match.png";

const Login = () => {

    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({
        email: null,
        password: null,
     });

     const handleEmail = (e) => {
        const email = e.target.value;
        setUser({ ...user, email });
        setErrors({ ...errors, email: null });
      };

      const handlePassword = (e) => {
        const password = e.target.value;
        setUser({ ...user, password });
        setErrors({ ...errors, password: null });
      };

      const validate = (values) => {
        console.log("values", values)
        const error = {};
      
            
        if (!values.email) error.email = "Este campo es obligatorio";
        else if (
          !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
            values.email
          )
        )
        error.email = "Email incorrecto";
        else error.email = null;
      
        if (values.password === null) error.password = "Este campo es obligatorio";
       
      
        setErrors(error);
        //if has errors return true
        if (error.password || error.email)
          return true;
        else return false;
      };

      const logUser = (e) => {
        e.preventDefault();
        
        if (validate(user)) {
          return;
        }

      
        
        console.log("final user", user)
      }

  return (
    <div className='backLogin'>

    <picture>
        <img src={logo} className="logo" alt='logo'/>
        <h3 className='logTitle'>Bonsai</h3>
    </picture>

    <div className="boxLogin">
        <h3 className='login'>Ingresar</h3>
      
        <form className='formBox'>
            <div>
                <div className='emailBox box'>
                    <label htmlFor="email">Correo</label>
                    <input
                        type="email"
                        placeholder="Correo"
                        id="email"
                        name="email"
                        value={user.email || ""}
                        onChange={handleEmail}
                                     
                    />
                      {errors.email && (
                            <p className='warningError'>{errors.email}</p>
                        )}
                </div>
                <br/>
                <div className='passwordBox box'>
                    <label htmlFor="password">Contraseña</label>
                    <input
                       className='input'
                        type="password"
                        placeholder="Contraseña"
                        id="password"
                        name="password"
                        value={user.password || ""}
                        onChange={handlePassword}
                       
                    />
                      {errors.password && (
                            <p className='warningError'>{errors.password}</p>
                        )}
                </div>
            </div>
         
            <button className='logBtn' onClick={logUser}>Iniciar Sesión</button>
        </form>

        <p className='forgotPass'>¿Ha olvidado su contraseña?</p>
       
    </div>
   
   


</div>
  )
}

export default Login