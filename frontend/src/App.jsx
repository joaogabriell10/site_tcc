import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Router from "./config/Router";
import { RouterProvider } from "react-router-dom";
import Rodape from "./components/layout/Rodape";
import Menu from "./components/layout/Menu";

function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
