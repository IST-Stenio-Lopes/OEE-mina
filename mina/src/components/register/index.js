import React from "react";
import '../register/style.css';



export default function Register() {

    return (
        <div>
            <h1>CADASTRAR NOVA ESTAÇÃO DE TRABALHO</h1>
            <div id="box-register">
                <div id="box-register-1" className="position">
                    <div id="box-register-field">
                        <p>Nome estação de trabalho</p>
                        <input type="text" className="padding" />
                    </div>
                </div>
                <div id="box-register-2" className="position">
                    <div id="box-register-field">
                        <p>Turnos</p>
                        <input type="text" className="padding"/>
                    </div>
                    <div id="box-register-field">
                        <p>Meta OEE%</p>
                        <input type="text" className="padding"/>
                    </div>
                    <div id="box-register-field">
                        <p>Taxa produção/h</p>
                        <input type="text" className="padding"/>
                    </div>

                </div>
                <div id="box-register-3" className="position">

                </div>
                <div id="box-register-4" className="position">

                </div>
            </div>
        </div>
    );
}