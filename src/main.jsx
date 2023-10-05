import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import About from "./views/About.jsx";
import Careers from "./views/Careers.jsx";
import Events from "./views/Events.jsx";
import Technology from "./views/Technology.jsx";
import Support from "./views/Support.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/careers",
    element: <Careers />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/technology",
    element: <Technology />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
