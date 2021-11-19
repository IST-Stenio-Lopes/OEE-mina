import React from 'react';
import MaterialIcon from 'react-google-material-icons';
import '../drop/style.css'

export default function Drop() {



    return (
        <div id="drop">
            <a href="/"><p id="icon"><MaterialIcon id="dropdawn" icon="home" size={20} /></p><p>INÍCIO</p></a>
            <a href="/workstation"><p id="icon"><MaterialIcon id="dropdawn" icon="view_agenda" size={20} /></p> <p>ESTAÇÕES</p></a>
            <a href="/workstationlist"><p id="icon"><MaterialIcon id="dropdawn" icon="settings_remote" size={20} /></p> <p>COLETORES</p></a>
            <a href="#"><p id="icon"><MaterialIcon id="dropdawn" icon="settings" size={20} /></p> <p>CONFIGURAÇÕES</p></a>
        </div>
    );
}