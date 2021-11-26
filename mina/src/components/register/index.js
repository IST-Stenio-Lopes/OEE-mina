import React from "react";
import '../register/style.css';





export default function Register() {

    return (
        <div>
            <div className="container-fluid" id="register">
                <div class="row-cabecalho">
                    <div class="col-md-10"><h1>CADASTRAR NOVA ESTAÇÃO DE TRABALHO</h1></div>
                    <div class="col-md-2"><a  href="/"><button type="button" class="btn-close " aria-label="Close"></button></a></div>
                </div>
                <div className="border">
                    <div class="row align-items-start">
                        <div class="col">
                            Nome Estação de trabalho
                            <div class="input-group mb-3">

                                <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col">
                            Turnos
                            <input type="text" class="form-control" aria-label="Username"></input>
                        </div>
                        <div class="col">
                            Meta OEE%
                            <input type="text" class="form-control" aria-label="Username"></input>
                        </div>
                        <div class="col">
                            Taxa de produção/h
                            <input type="text" class="form-control" aria-label="Username"></input>
                        </div>
                    </div>
                    <div class="row align-items-start">
                        <div class="col-md-5">
                            Tempo Disponivel (Horas trabalhadas durante o dia)
                            <div class="input-group mb-3">

                                <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-evenly">
                        <div class="col-4">
                            Descontar refugos da produção
                        </div>
                        <div class="col-4">
                            <div>
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-evenly">
                        <div class="col-4">
                            Descontar retrabalho
                        </div>
                        <div class="col-4">
                            <div>
                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                            </div>
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