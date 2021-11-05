import React, {Component} from "react";
import '../menu/style.css';
import '../aside/index.js'
import MaterialIcon from 'react-google-material-icons';

class Menu extends Component{
    render(){
        var aside = false;


        function changeAside() {
            if(aside === false){
                aside = true;
            }else if(aside === true){
                aside = false;
            }
        }

        function showAside(){
            if(aside){
                return <div>olá</div>;
            }else{
                return null;
            }
        }
        return(
            <div>
                
                <nav >
                    <div className="dropdown" style={{alignItems:'flex-start'}}>
                        <button className="dropbtn" onClick={changeAside} style={{textDecoration:"none", border:"none", background:"none", color:'#fff'}}>
                            <MaterialIcon id="dropdawn" icon="menu" size={20}  />
                            script={showAside()}
                        </button>
                        <div class="dropdown-content">
                            <a><MaterialIcon id="dropdawn" icon="home" size={20}  /></a>
                            <a><MaterialIcon id="dropdawn" icon="menu" size={20}  /></a>
                            <a><MaterialIcon id="dropdawn" icon="menu" size={20}  /></a>
                        </div>
                    </div>
                    <div style={{color:'#FFF', right:"0px", alignItems:'flex-end'}}>
                        <MaterialIcon icon="person" size={30} float={"right"} />
                    </div>

                        
                    {/* <span class="material-icons-outlined">
                    search
                    </span> */}
                </nav>
            </div>
        );
    }
}

export default Menu;