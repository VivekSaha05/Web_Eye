import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './index.css';
import About from "./Components/About.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './Components/Register';
import LeaderBoard from './Components/LeaderBoard';
import Alert from './Components/Alert';


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
    path: "/register",
    element: <Register />,
  },
  {
    path: "/leaderboard",
    element: <LeaderBoard />,
  },
  {
    path: "/alert",
    element: <Alert />,
  },
]);
ReactDOM.render(
  <>
    <RouterProvider router={router}/>
  </>,
  document.getElementById("root")
)

