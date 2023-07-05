import Navigation from "./Navigation";
import "./homestyle.css";
import {Link } from "react-router-dom";


const Home = () =>{
    let not=3;
        if(not===0){
            
    return(
        <h2 id="null">adauda o notita</h2>    
    );
        }
        else{
            return(
                
                <body>
                    <Navigation/>
                     <Link to="/textai" id="linkai">Intreaba ceva pe AI</Link>    
            <div className="notbox">
                <div className="not">
                    <div className="notite">
                    <h3 id="titlu">Titlu</h3>
                    <textarea id="text" name="text" rows="14" cols="37">text aici</textarea>
                    </div>
                    <div className="notite">
                        <h3 id="titlu">Titlu</h3>
                        <textarea id="text" name="text" rows="14" cols="37">text aici</textarea>
                    </div>
                    <div className="notite">
                        <h3 id="titlu">Titlu</h3>
                        <textarea id="text" name="text" rows="14" cols="37">text aici</textarea>
                    </div>
                    <div className="notite">
                        <h3 id="titlu">Titlu</h3>
                        <textarea id="text" name="text" rows="14" cols="37">text aici</textarea>
                     </div>
                     <div className="notite">
                        <h3 id="titlu">Titlu</h3>
                        <textarea id="text" name="text" rows="14" cols="37">text aici</textarea>
                     </div>
                     
                </div>
            </div>
            </body>

            );
        }
}
export default Home;