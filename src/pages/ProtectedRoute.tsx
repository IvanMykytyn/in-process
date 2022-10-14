// React Router dom
import React, { FC, PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const user = true

  if (!user) {
    return <Navigate to="/login" />
  }
  return <>{children}</>
}

export { ProtectedRoute }
