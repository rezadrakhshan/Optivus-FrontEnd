import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Login from "../pages/auth/Login";


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/auth" element={<AuthLayout />}>
                    <Route path="login" element={<Login />} />
                </Route>

                <Route path="/app" element={<DashboardLayout />}>
                </Route>

            </Routes>
        </BrowserRouter>
    );
}