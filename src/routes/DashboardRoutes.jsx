import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MatchDetail } from '../pages'
import { AppLanding } from '../pages/AppLading/AppLanding'

export const DashboardRoutes = () => {
  return (
    <div>
      <Routes>
        <Route 
          path="/match"
          element={<AppLanding /> }
        />

          <Route 
          path="/match/:card"
          element={<MatchDetail /> }
        />
      </Routes>
    </div>
  )
}
