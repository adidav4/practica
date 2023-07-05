import "./loginstyle.css";
import {Link} from "react-router-dom";
import axiosClient from "./axios-client.js";
import {createRef} from "react";
import {useStateContext} from "./context/ContextProvider.jsx";
import { useState } from "react";

export default function Login() {
  const emailRef = createRef()
  const passwordRef = createRef()
  const { setUser, setToken } = useStateContext()
  const [message, setMessage] = useState(null)

  const onSubmit = ev => {
    ev.preventDefault()

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    axiosClient.post('/login', payload)
      .then(({data}) => {
        setUser(data.user)
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setMessage(response.data.message)
        }
      })
  }

  return (
    <div className="log">
            <div className="title"><h1>Log in</h1></div>
                    <div className="login">
                    <form onSubmit={onSubmit}>
                    {message &&
            <div className="alert">
              <p>{message}</p>
            </div>
          }
                        <label for="email">Email</label>
                        <input ref={emailRef} type="email"  id="email" name="email" />
                        <label  for="password">Password</label>
                        <input ref={passwordRef} type="password" id="password" name="password" />
                        <div id="but"><button class="button-18">Log in</button></div>
                        <Link to="/register" id="link">Daca nu aveti con inregistrativa</Link>
                    </form>
                </div>
        </div>
  )
};