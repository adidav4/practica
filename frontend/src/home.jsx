import "./homestyle.css";
const Home = () =>{
    let not=3;
        if(not===0){
            
    return(
        <h2 id="null">adauda o notita</h2>    
    );
        }
        else{
            return(
            <div className="notbox">
                <div className="not">
                    <div className="notite">
                    <h3>Titlu</h3>
                    <p>continut notite</p>
                    </div>
                    <div className="notite">
                        <h3>Titlu</h3>
                        <p>continut notite</p>
                    </div>
                    <div className="notite">
                        <h3>Titlu</h3>
                        <p>continut notite</p>
                    </div>
                    <div className="notite">
                        <h3>Titlu</h3>
                        <p>continut notite</p>
                     </div>
                     <div className="notite">
                        <h3>Titlu</h3>
                        <p>continut notite</p>
                     </div>
                </div>
            </div>

            );
        }
}
export default Home;