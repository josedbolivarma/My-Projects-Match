import { getAuth } from 'firebase/auth'
import React, { useContext, useEffect, useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/auth'
import { MatchDetail } from '../pages'
import { AppLanding } from '../pages/AppLading/AppLanding'

import { BsFillPersonFill } from 'react-icons/bs';
import { Footer } from '../components'
import { Header } from '../components/Header/Header'

export const DashboardRoutes = () => {

  return (
    <div>
      <Header />
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
