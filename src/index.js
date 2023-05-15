import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./App.css";
import MyEvents from "./pages/MyEvents";
import Videos from "./pages/Videos";
import EditPage from "./pages/EditPage";
import { useParams } from "react-router-dom";
// import eventEdm from "./pages/MyEvents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "MyEvents",
    element: <MyEvents />,
  },
  {
    path: "Videos",
    element: <Videos />,
  },
  {
    path: `/events/:id/edit`,
    element: <EditPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
