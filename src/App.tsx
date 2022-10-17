
import * as React from 'react';
import cn from 'classnames'
import css from './App.module.scss'

import { Routes, Route } from 'react-router-dom'

// toastify setup
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


import {
  Login,
  NotFound,
  ProtectedRoute,
  DashboardLayout,
  Rooms,
  Map,
  Timeline,
  Calendar,
  Settings,
} from './pages'

function App() {
  return (
    <>
      <Login/>
      {/*<Routes>*/}
      {/*  <Route path="/">*/}
      {/*    <Route*/}
      {/*      path="dashboard"*/}
      {/*      element={*/}
      {/*        <ProtectedRoute>*/}
      {/*          <DashboardLayout />*/}
      {/*        </ProtectedRoute>*/}
      {/*      }*/}
      {/*    >*/}
      {/*      <Route index element={<Rooms />} />*/}
      {/*      <Route path="map" element={<Map />} />*/}
      {/*      <Route path="timeline" element={<Timeline />} />*/}
      {/*      <Route path="calendar" element={<Calendar />} />*/}
      {/*      <Route path="settings" element={<Settings />} />*/}
      {/*    </Route>*/}

      {/*    <Route path="login" element={<Login />} />*/}
      {/*    <Route path="*" element={<NotFound />} />*/}
      {/*  </Route>*/}
      {/*</Routes>*/}
      {/*<ToastContainer />*/}
    </>
  )
}

export default App
