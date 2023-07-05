import axios from 'axios';
import { useState } from 'react';
import "./textstyle.css";
import {Link } from "react-router-dom";


function Textai (){
  const  [prompt, setPrompt]=useState("");
  const  [response, setResponse]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    
    axios
    .post("http://localhost:8080/textai",{prompt})
    .then((res)=>{
      setResponse(res.data);
    })
    .catch((err)=>{
      console.error(err);
    });
  };

  return(
    <>
        <div>
        <Link to="/" id="link">Inapoi acasa</Link>
            <div id='textai'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="inline-full-name">
                            Intreabama ceva/Ask something :
                        </label>
                    </div>
                    <div>
                        <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
                    </div>
                    <div className='buton'>
                    <button class="button-18">Submit</button>
                    </div>
                </form>
                <div className='raspuns'>
                    <p id='response'>{response}</p>
                </div>
            </div>
        </div>

    </>
  );
}
export default Textai;