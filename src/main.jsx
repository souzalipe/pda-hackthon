import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Theme } from "@radix-ui/themes";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import "./global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  </StrictMode>
);
