import React, { useCallback, useState } from "react";
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import NormalInput from "../../components/inputs/normal";
import { useAuth } from "../../contexts/auth/auth";
import { DisplayFlexStyle, DisplayGridStyle, MarginSpaceStyle } from "../../styles/style";
import { LoginButton, PrincipalDivLogin } from "./style";

export default function SignIn() {

    let navigate = useNavigate();


    //Aqui começa o bitmask


    //enums
        const ACESSO_INVALIDO = 0,
      
        Criar_Usuarios = 2,
        Editar_Usuarios = 4,
        Remover_Usuarios = 8,
        Gerir_Usuarios = Criar_Usuarios | Editar_Usuarios | Remover_Usuarios, // 14
      
        Criar_Empresas = 16,
        Editar_Empresas = 32,
        Remover_Empresas = 64,
        Gerir_Empresas = Criar_Empresas | Editar_Empresas | Remover_Empresas, // 112
      
        Criar_Funcionarios = 128,
        Editar_Funcionarios = 256,
        Remover_Funcionarios = 512,
        Gerir_Funcionarios = Criar_Funcionarios | Editar_Funcionarios | Remover_Funcionarios, // 896
      
        Criar_Maquinas = 1024,
        Editar_Maquinas = 2048,
        Remover_Maquinas = 4096,
        Iniciar_Maquinas = 8192,
        Gerir_Maquinas = Criar_Maquinas | Editar_Maquinas | Remover_Maquinas | Iniciar_Maquinas, //15360
      
        Criar_Coletor = 16384,
        Editar_Coletor = 32768,
        Remover_Coletor = 65536,
        Iniciar_Coletor = 131072,
        Gerir_Coletor = Criar_Coletor | Editar_Coletor | Remover_Coletor | Iniciar_Coletor, //245760
      
        // Acessos Fixos
        Visitante = 268435456,
      
        Gerente = 536870912 | Gerir_Funcionarios | Gerir_Maquinas, //536887168
      
        Diretor = 1073741824 | Gerir_Usuarios | Gerir_Funcionarios | Gerir_Maquinas, //1073758094
      
        Desenvolvedor = -2147221506;

        
        -2147221506
        268435456
        //Aqui termina o bitmask




    const { token, user, refresh_token } = useAuth();

    const [userName, setUserName] = useState("");
    const [key, setKey] = useState("");

    const [errorInputUserName, setErrorInputUserName] = useState(false);
    const [errorInputKey, setErrorInputKey] = useState(false);

    const {signIn} = useAuth();


    const handleSignIn = useCallback(async (data_email, data_key) => {
        try {
            await signIn({
                email: data_email,
                password: data_key
            })
            console.log("machines")
            navigate('/machines');
        } catch (err) {
        }
    });


    return(
        <PrincipalDivLogin>
            <MarginSpaceStyle>
                <DisplayGridStyle>
                    <p>Digite o usuário</p>
                    <NormalInput
                        title=""
                        size={50}
                        setValueInput={setUserName}
                        onChange={setUserName}
                        error={errorInputUserName}
                        msgErro="Nome não pode estar vazio!"
                    />
                </DisplayGridStyle>
                <DisplayGridStyle top={10}>
                    <p>Digite sua Senha</p>
                    <NormalInput
                        title=""
                        size={50}
                        setValueInput={setKey}
                        onChange={setKey}
                        error={errorInputKey}
                        msgErro="senha não pode estar vazio!"
                    />
                </DisplayGridStyle>
{/* <button onClick={() => console.log(userName)}>usuario</button>
<button onClick={() => console.log(key)}>password</button> */}
                <DisplayFlexStyle top={10} left={51}>
                    <LoginButton  onClick={() => handleSignIn(userName, key)} /* onClick={() => navigate("/machines")} */>Login</LoginButton>
                </DisplayFlexStyle>
            </MarginSpaceStyle>
        </PrincipalDivLogin>
    );
}