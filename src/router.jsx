import { BrowserRouter, Route, Routes } from "react-router-dom";

import Register from "./Pages/Register"
import Cadastro from "./Pages/Cadastro"
import Planos from "./Pages/Planos"
import Home from "./Pages/Home"


function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Planos" element={<Planos/>}></Route>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Cadastro" element={<Cadastro/>}></Route>
                <Route path="/Register" element={<Register/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;