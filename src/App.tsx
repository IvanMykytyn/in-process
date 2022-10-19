import * as React from 'react'
import cn from 'classnames'
import css from './App.module.scss'

import {Routes, Route, Link} from 'react-router-dom'

// toastify setup
import {ToastContainer} from 'react-toastify'
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
    ForgotPassword,
    ResetPassword,
    GetAccess,
    SignUp
} from './pages'
import {Button} from 'components'

function App() {
    return (
        <>
            <div className={css.container}>
                <header className={css.header}>
                    <div className={css.header__menu}>
                        <Link to={'/login'}>
                            <Button type={'button'}>Login</Button>
                        </Link>
                        <Link to={'/get-access'}>
                            <Button type={'button'}>Get Access Page</Button>
                        </Link>
                        <Link to={'/sign-up'}>
                            <Button type={'button'}>Sign Up</Button>
                        </Link>
                        <Link to={'/forgot-password'}>
                            <Button type={'button'}>Forgot Password</Button>
                        </Link>
                        <Link to={'/reset-password/1/1'}>
                            <Button type={'button'}>Reset Password</Button>
                        </Link>
                    </div>
                </header>
            </div>
            <Routes>
                <Route path="/">
                    <Route
                        path="dashboard"
                        element={
                            <ProtectedRoute>
                                <DashboardLayout/>
                            </ProtectedRoute>
                        }
                    >
                        <Route index element={<Rooms/>}/>
                        <Route path="map" element={<Map/>}/>
                        <Route path="timeline" element={<Timeline/>}/>
                        <Route path="calendar" element={<Calendar/>}/>
                        <Route path="settings" element={<Settings/>}/>
                    </Route>
                    <Route path="login" element={<Login/>}/>
                    <Route path="sign-up" element={<SignUp/>}/>
                    <Route path="get-access" element={<GetAccess/>}/>
                    <Route path="forgot-password" element={<ForgotPassword/>}/>
                    <Route path="reset-password/:id/:token" element={<ResetPassword/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
            <ToastContainer/>
        </>
    )
}

export default App;
