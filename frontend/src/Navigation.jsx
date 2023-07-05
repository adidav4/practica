import "./navstyle.css";
import {Link, Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "./context/ContextProvider";
import axiosClient from "./axios-client.js";
import {useEffect} from "react";



const Navigation = () =>{
    const {user, token, setUser, setToken, notification} = useStateContext();

    if (!token) {
      return <Navigate to="/login"/>
    }
  
    const onLogout = ev => {
      ev.preventDefault()
  
      axiosClient.post('/logout')
        .then(() => {
          setUser({})
          setToken(null)
        })
    }
  
    return(
        <header>
        <div className="navigation">
        <div>
            <a onClick={onLogout} className="logout" href="#"><h2>Logout</h2></a>
          </div>
        <h2>Notitele tale</h2>
        <h2>&#x2719;</h2>
        </div>
        </header>
    );
        
}
export default Navigation;