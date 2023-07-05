import "./styleregister.css";
import {Link} from "react-router-dom";
import {createRef, useState} from "react";
import axiosClient from "./axios-client.js";
import {useStateContext} from "./context/ContextProvider.jsx";

export default function Register() {
  const nameRef = createRef()
  const emailRef = createRef()
  const passwordRef = createRef()
  const passwordConfirmationRef = createRef()
  const {setUser, setToken} = useStateContext()
  const [errors, setErrors] = useState(null)

  const onSubmit = ev => {
    ev.preventDefault()

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }
    axiosClient.post('/signup', payload)
      .then(({data}) => {
        setUser(data.user)
        setToken(data.token);
      })
      .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors)
        }
      })
  }

  return (
        <div className="reg">
            <div className="title"><h1>Register</h1></div>
                    <div className="register">
                    <form onSubmit={onSubmit}>
                    {errors &&
            <div className="alert">
              {Object.keys(errors).map(key => (
                <p key={key}>{errors[key][0]}</p>
              ))}
            </div>
          }
                        <label  for="email">Email</label>
                        <input ref={emailRef}  type="email" placeholder="youremail@..." id="email" name="email" />
                        <label  for="name">Name</label>
                        <input ref={nameRef}  type="text" placeholder="Your name" id="name" name="name" />
                        <label for="password">Password</label>
                        <input ref={passwordRef}  type="password" placeholder="password" id="password" name="password" />
                        <label for="password">Repeat Password</label>
                        <input ref={passwordConfirmationRef} type="password" id="password" />
                        <div id="but"><button class="button-18">Register</button></div>
                        <Link to="/login" id="link">Inapoi la login</Link>
                    </form> 
                </div>
        </div>
  );
}
  