import "./loginstyle.css";

const Login = () =>{
    return(
        <div className="log">
            <div className="title"><h1>Log in</h1></div>
                    <div className="login">
                    <form>
                        <label for="email">Email</label>
                        <input type="email" placeholder="Email" id="email" name="email" />
                        <label for="password">Password</label>
                        <input type="password" placeholder="password" id="password" name="password" />
                        <button class="button-18">Log in</button>
                    </form>
                </div>
        </div>
    );
}

export default Login;