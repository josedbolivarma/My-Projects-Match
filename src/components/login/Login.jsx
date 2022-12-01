import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import logo from "../../assets/img/match.png";
import { Formik } from "formik";
import { AuthContext } from "../../context/auth";

const Login = () => {
  const [errors, setErrors] = useState({});
  // const [user, setUser] = useState({
  //   email: null,
  //   password: null,
  // });
  const { loginEmailPassword } = useContext(AuthContext);

  // const handleEmail = (e) => {
  //   const email = e.target.value;
  //   setUser({ ...user, email });
  //   setErrors({ ...errors, email: null });
  // };

  // const handlePassword = (e) => {
  //   const password = e.target.value;
  //   setUser({ ...user, password });
  //   setErrors({ ...errors, password: null });
  // };

  const validate = (values) => {
    console.log("values", values);
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
    if (error.password || error.email) return true;
    else return false;
  };

  const loginUser = (e) => {
    // if (validate(user)) {
    //   return;
    // }

    console.log('Valores', { e });
    loginEmailPassword(e);
    console.log("final user", e);
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(valores) => {
          let errores = {};

          if (!valores.email) {
            errores.email = "Por favor ingresa un email";
          }
          return errores;

          //Validación Password
        }}
        onSubmit={(valores, { resetForm }) => {
          loginUser(valores);
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
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
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && (
                      <p className="warningError">{errors.password}</p>
                    )}
                  </div>
                </div>

                <button className="logBtn" type="submit">
                  Iniciar Sesión
                </button>
              </form>

              <p className="forgotPass">¿Ha olvidado su contraseña?</p>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Login;
