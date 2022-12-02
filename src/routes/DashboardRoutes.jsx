import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DevLanding, MatchDetail } from '../pages'
import { AppLanding } from '../pages';

// import { Footer } from '../components'
import { Header } from '../components'
import { HomeLanding } from '../pages/';

export const DashboardRoutes = () => {

  return (
    <div>
      <Header />
      <Routes>
      <Route 
          path="/"
          element={<HomeLanding /> }
        />

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
