import React from "react";
import '../register-colector/style.css';


export default function RegisterColector(){
    return(
        <div>
             <div className="container-fluid">

                <div class="row-cabecalho">
                    <div class="col-md-10"><h1>CADASTRAR NOVO COLETOR</h1></div>
                    <div class="col-md-2"><a  href="/"><button type="button" class="btn-close " aria-label="Close"></button></a></div>
                </div>

                <div className="border">
                    <div class="row align-items-start">
                        <div class="col">
                            Identificação do coletor
                            <div class="input-group mb-3">

                                <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-md-5">
                            MAC coletor
                            <input type="text" class="form-control" aria-label="Username"></input>
                        </div>
                        
                    </div>
                    <div class="row justify-content-end">
                        <div class="col-4">
                            <a  href="/"><button type="button" class="btn btn-outline-secondary">Cancelar</button></a>
                        </div>
                        <div class="col-4">
                            <button type="button" class="btn btn-outline-secondary">Salvar</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
