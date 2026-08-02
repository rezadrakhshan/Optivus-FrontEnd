import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

import { router } from "./routes";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={router} />

    <Toaster
      theme="dark"
      richColors
      position="bottom-left"
    />
  </>
);