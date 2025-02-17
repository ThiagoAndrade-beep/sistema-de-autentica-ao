import React from "react";
import { useNavigate } from "react-router-dom";
import Botao from "../../components/botao";
import useAuth from "../../hooks/useAuth";
import * as C from './style'

const Home = () => {
    const {signout} = useAuth()
    const navigate = useNavigate()
    return (
       <C.Container>
        <C.Title>Home</C.Title>
        <Botao Text="Sair" onClick={() => [signout(), navigate("/")]}>
            Sair    
        </Botao>  
        </C.Container>
    )
}

export default Home
