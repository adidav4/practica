import {createBrowserRouter, Navigate} from "react-router-dom";
import GuestLayout from "./components/GuestLayout.jsx";
import Login from "./login";
import Register from "./Register";
import Home from "./home";



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Navigate to="/users"/>
      },
    ]
  },
  {
    path: '/',
    element: <GuestLayout/>,
    children: [
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/Register',
        element: <Register/>
      }
    ]
  },
])

export default router;