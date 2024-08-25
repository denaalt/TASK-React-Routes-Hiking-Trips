import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TripDetail from "./components/TripDetail";
import Home from "./components/Home";
import TripsList from "./components/TripsList";

const routre = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/TripList",
    element: <TripsList />,
  },
  {
    path: "/TripDetail",
    element: <TripDetail />,
  },
  {
    path: "/details/:tripId",
    element: <TripDetail />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={routre} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
