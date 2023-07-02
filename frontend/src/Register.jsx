import "./styleregister.css";

const Register = () =>{
    return(
        <div className="log">
            <div className="title"><h1>Register</h1></div>
                    <div className="login">
                    <form>
                        <label for="email">Email</label>
                        <input type="email" placeholder="youremail@..." id="email" name="email" />
                        <label for="name">Name</label>
                        <input type="text" placeholder="Your name" id="name" name="name" />
                        <label for="password">Password</label>
                        <input type="password" placeholder="password" id="password" name="password" />
                        <button class="button-18">Register</button>
                    </form> 
                </div>
        </div>
         
    );
}
export default Register;
  