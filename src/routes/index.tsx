import { Route, Routes } from 'react-router-dom';
import DashboardRoutes from 'routes/DashboardRoutes';
import { NotFound } from 'pages';
import { ForgotPassword, GetAccess, Login, ResetPassword, SignUp } from 'pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
        <Route path="login" element={<Login />} />
        <Route path="signup/:userId" element={<SignUp />} />
        <Route path="get-access" element={<GetAccess />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password/:id/:token" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export { AppRoutes };
