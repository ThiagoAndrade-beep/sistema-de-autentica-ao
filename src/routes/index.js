import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signin from "../paginas/signin"
import Home from "../paginas/home";
import Signup from "../paginas/signup";
import useAuth from "../hooks/useAuth";

const Private = ({Item}) => {
    const signed = useAuth();

    return signed == true ? <Item /> : <Signin />; 
}

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element = {<Private Item={Home} />} />
                    <Route path="/" element={<Signin />} /> {/*corresponde a url raiz da aplicação*/}
                    <Route exact  path="/signup" element={<Signup />} />
                    <Route path="*" element={<Signin />} /> {/*se acessar uma rota que nao existe, sera redirecionado a pag Signin*/}
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp