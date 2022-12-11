import React, { useContext, useState } from "react";
import "./Login.css";
import logo from "../../../assets/img/match.png";
import { AuthContext } from "../../../context/auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks";
import { AiOutlineArrowLeft } from 'react-icons/ai';

export const Login = () => {
  const [errors, setErrors] = useState({});
  const [values, handleInputChange, reset] = useForm({
    email: "",
    password: "",
  });

  const { loginEmailPassword } = useContext(AuthContext);

  const navigate = useNavigate();
 

  const validate = (value) => {
    console.log("values", value);
    const error = {};

    if (!value.email) error.email = "Este campo es obligatorio";
    else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
        value.email
      )
    )
      error.email = "Email incorrecto";
      else error.email = null;

    if (value.password === null) error.password = "Este campo es obligatorio";

    setErrors(error);
    //if has errors return true
    if (error.password || error.email) return true;
    else return false;
  };

  const handleSubmit  = (e) => {
    e.preventDefault();
    if (validate(values)) {
      return;
    }
    console.log('Valores', { e });
    loginEmailPassword(values);
    reset();
    handleNavigate('/match');
  };

  const handleNavigate=(url)=>{
    navigate(url);
}

  return (
    <>
          <div className="backLogin">
            <picture>
              <img src={logo} className="logo" alt="logo" />
              <h3 className="logTitle">Bonsai</h3>
            </picture>

            <div className="boxLogin">
              <h3 className="login">Ingresar</h3>

              <form className="formBox" onSubmit={handleSubmit}>
                <div>
                  <div className="emailBox box">
                    <label htmlFor="email">Correo</label>
                    <input
                      type="email"
                      placeholder="Correo"
                      id="email"
                      name="email"
                      value={values.email || ""}
                      onChange={handleInputChange}
                    />
                    {errors.email && (
                      <p className="warningError">{errors.email}</p>
                    )}
                  </div>
                  <br />
                  <div className="passwordBox box">
                    <label htmlFor="password">Contraseña</label>
                    <input
                      className="input"
                      type="password"
                      placeholder="Contraseña"
                      id="password"
                      name="password"
                      value={values.password || ""}
                      onChange={handleInputChange}
                    />
                    {errors.password && (
                      <p className="warningError">{errors.password}</p>
                    )}
                  </div>
                </div>

                <button className="logBtn" type="submit">
                  Iniciar Sesión
                </button>

                <button onClick={ () => handleNavigate('/register') } className="logBtn" style={{
                  backgroundColor: 'black'
                }} type="submit">
                  Registrarse
                </button>
              </form>

              <p className="forgotPass mb-2">¿Ha olvidado su contraseña?</p>
              <p className="flex items-center gap-2 text-1xl cursor-pointer" onClick={ () => handleNavigate('/') }><AiOutlineArrowLeft /> Regresar</p>
            </div>
          </div>
    </>
  );
};