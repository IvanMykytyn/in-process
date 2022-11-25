import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import {
  Calendar,
  DashboardLayout,
  Map,
  ProtectedRoute,
  Rooms,
  Settings,
  Timeline,
  BookingFormPage,
} from 'pages';

const DashboardRoutes: FC = () => {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Navigate to="rooms" />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="map" element={<Map />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="settings" element={<Settings />} />
        <Route path="booking-form" element={<BookingFormPage />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
