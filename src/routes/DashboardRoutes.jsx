import { getAuth } from 'firebase/auth'
import React, { useContext, useEffect, useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/auth'
import { MatchDetail } from '../pages'
import { AppLanding } from '../pages/AppLading/AppLanding'

import { BsFillPersonFill } from 'react-icons/bs';

export const DashboardRoutes = () => {

  const [user, setUser] = useState(null);
  const { logoutAsync } = useContext(AuthContext);

  const navigate = useNavigate();
  const n = localStorage.getItem("llave");

  useEffect(() => {
    const auth = getAuth().currentUser;
    setUser(auth);
  }, []);

  const handleLogout = () => {
    logoutAsync()
    navigate("/login");
  };

  return (
    <div>
      <header>
        <button onClick={ handleLogout }>Logout</button>
        <h2>
        Hola,{" "}
                  {!user
                    ? "Guest"
                    : !user.displayName
                    ? user.email
                    : user.displayName
                    }
                    {user ? "Cerrar Sesión" : "Inicio de Sesión"}
        </h2>
        <BsFillPersonFill size={ 35 }/>
      </header>
      <Routes>
        <Route 
          path="/match"
          element={<AppLanding /> }
        />

          <Route 
          path="/match/:card"
          element={<MatchDetail /> }
        />

      <Route path="*" element={<Navigate to='/match' />} />
      </Routes>
    </div>
  )
}
