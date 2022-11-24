import {FC} from 'react';
import {Route, Routes} from 'react-router-dom';

import {
    Calendar,
    DashboardLayout,
    Map,
    ProtectedRoute,
    Rooms,
    Settings,
    Timeline,
    BookingFormPage
} from 'pages';

const DashboardRoutes: FC = () => {
    return (
        <Routes>
            <Route
                element={
                    <ProtectedRoute>
                        <DashboardLayout/>
                    </ProtectedRoute>
                }
            >
                <Route index element={<Rooms/>}/>
                <Route path="rooms" element={<Map/>}/>
                <Route path="timeline" element={<Timeline/>}/>
                <Route path="calendar" element={<Calendar/>}/>
                <Route path="settings" element={<Settings/>}/>
                <Route path="booking-form" element={<BookingFormPage/>}/>
            </Route>
        </Routes>
    );
};

export default DashboardRoutes;
