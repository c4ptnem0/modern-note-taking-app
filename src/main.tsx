import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/themes/theme-provider.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routes } from "./routes/routers.tsx";

const routes = createBrowserRouter(Routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={routes} />
    </ThemeProvider>
  </StrictMode>
);
