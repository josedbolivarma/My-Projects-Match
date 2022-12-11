import React, { useContext } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/auth';
import { useForm } from '../../../hooks';

import styles from './Register.module.css';

export const Register = () => {

    const navigate = useNavigate();

  const [values, handleInputChange, reset] = useForm({
    email: "",
    password: "",
  });

  const { email, password, name, role } = values;

    const { registerAsync } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        registerAsync(email, password);
        reset();
        handleNavigate("/match");
      };

      const handleNavigate=(url)=>{
        navigate(url);
      }

  return (
    <div className={styles.root}>
      <div className={styles.root__sidebar}>
        <img
          className={`${styles.root__sidebarImage} hidden sm:inline-flex`}
          src="https://img.freepik.com/fotos-premium/desarrollador-software-trabajo-remoto-linea-chica-computadora-portatil-codigo-escritura-desarrollador-gerente-proyecto-ofertas-trabajo-desarrollador-junior-navegacion-internet-programacion-estudios-concepto-blogs_474717-77230.jpg?w=2000"
          alt="sidebar auth"
        />
      </div>

      <div className={`${styles.login__container}`}>
        <h1>Regístrate Gratis</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <h5>Nombre</h5>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Ingresa tu Nombre"
            onChange={handleInputChange}
          />

          <h5>E-mail</h5>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Ingresa tu email"
            onChange={handleInputChange}
          />

          <h5>Rol</h5>
          <select value={role} name="role" onChange={handleInputChange}>
            <option value="usuario">Usuario</option>
            <option value="admin">Administrador</option>
          </select>

          <h5>Contraseña</h5>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Crea tu Contraseña"
            onChange={handleInputChange}
          />

          <button type="submit" className={styles.login__signUpButton}>
            Registro y Logueo
          </button>

          {/* <ButtonGoogle type="button" onClick={handleGoogle}>
            <img
              width="20px"
              height="20px"
              src={googleIcon}
              alt="Google Icon"
            />
            Registro con Google
          </ButtonGoogle>

          <ButtonFacebook type="button" onClick={handleFacebook}>
            <img
              width="20px"
              height="20px"
              src={facebookIcon}
              alt="Facebook Icon"
            />
            Registro con Facebook
          </ButtonFacebook> */}
        </form>
        <button type="submit" className={styles.login__signInButton1} onClick={() => handleNavigate('/login') }>Inicio de Sesión</button>
        <h3 style={{marginTop:"2rem"}}>Your Project Match</h3>
        <p className='flex items-center gap-2 cursor-pointer' onClick={ () => handleNavigate('/') }><AiOutlineArrowLeft size={ 32 }/> <span className='text-2xl'>Regresar</span></p>
      </div>
    </div>
  )
}
