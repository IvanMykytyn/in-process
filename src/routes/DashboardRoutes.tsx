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
                <Route path="map" element={<Map/>}/>
                <Route path="timeline" element={<Timeline/>}/>
                <Route path="calendar" element={<Calendar/>}/>
                <Route path="settings" element={<Settings/>}/>
                <Route path="bookig_form_page" element={<BookingFormPage/>}/>

            </Route>
        </Routes>
    );
};

export default DashboardRoutes;
