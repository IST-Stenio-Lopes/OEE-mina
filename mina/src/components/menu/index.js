import React, {Component} from "react";
import '../menu/style.css';
import MaterialIcon from 'react-google-material-icons';

class Menu extends Component{
    render(){
        var aside = true;

        /*
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
        }*/
        function drop(){
            var div = document.getElementById("dropdown-content");
            if(aside == false){
                div.style.display= "block";
                aside = true;
            }else{
                div.style.display= "none";
                aside = false;
            }
        }


        return(
            <div>
                
                <nav >
                    <div className="dropdown" style={{alignItems:'flex-start'}}>
                        <button className="dropbtn" /*onClick={changeAside}*/ onClick={drop} style={{textDecoration:"none", border:"none", background:"none", color:'#fff'}}>
                            <MaterialIcon id="dropdawn" icon="menu" size={20} />
                            
                        </button>
                        <div id="dropdown-content">
                            <a><p id="icon"><MaterialIcon id="dropdawn" icon="home" size={20} /></p> <p>INÍCIO</p></a>
                            <a><p id="icon"><MaterialIcon id="dropdawn" icon="view_agenda" size={20} /></p> <p>ESTAÇÕES</p></a>
                            <a><p id="icon"><MaterialIcon id="dropdawn" icon="settings_remote" size={20} /></p> <p>COLETORES</p></a>
                            <a><p id="icon"><MaterialIcon id="dropdawn" icon="settings" size={20} /></p> <p>CONFIGURAÇÕES</p></a>
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