import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DevLanding, MatchDetail } from '../pages'
import { AppLanding } from '../pages';

// import { Footer } from '../components'
import { Header } from '../components'

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
