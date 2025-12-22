import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
