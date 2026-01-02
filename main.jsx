import React from "react";
import { createRoot } from "react-dom/client";
import HeroSection from "./code.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HeroSection />
  </React.StrictMode>
);
