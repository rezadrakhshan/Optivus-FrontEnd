import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";

import Login from "../pages/auth/login";
import Verify from "../pages/auth/verify";
import Home from "../pages/auth/Home";
import DashboardLayout from "../layouts/DashboardLayout";
import LeadsPage from "../pages/leads/LeadPage";
import LeadDetailsPage from "../pages/leads/LeadDetailPage";
import CreateLeadPage from "../pages/leads/CreateLeadPage";

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
      {
        path: "leads/:id",
        element: <LeadDetailsPage />,
      },
      {
        path: "leads/create",
        element: <CreateLeadPage />,
      },
    ],
  },
]);
