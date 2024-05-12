import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom/dist/index.js";
import "./index.css";
import { router } from "./Router/Router";
import ContextProvider from "./ContextProvider/ContextProvider";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </HelmetProvider>
      <Toaster />
    </ContextProvider>
  </React.StrictMode>
);
