import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";

import Login from "../pages/auth/login";
import Verify from "../pages/auth/verify";
import Home from "../pages/auth/Home";
import DashboardLayout from "../layouts/DashboardLayout";
import LeadsPage from "../pages/leads/LeadPage";

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/verify",
        element: <Verify />,
      },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/leads",
        element: <LeadsPage />,
      },
    ],
  },
]);
