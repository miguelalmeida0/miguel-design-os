import React from "react";
import { createRoot } from "react-dom/client";
import { StudioApp } from "./app/StudioApp";
import "./styles/globals.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StudioApp />
  </React.StrictMode>
);
