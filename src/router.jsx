import { BrowserRouter, Route, Routes } from "react-router-dom";

import Register from "./Pages/Register"
import Equipe from "./Pages/Equipe"
import Planos from "./Pages/Planos"
import Home from "./Pages/Home"
import Vistoria_IA from "./Pages/Vistoria_IA";


function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Planos" element={<Planos/>}></Route>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Equipe" element={<Equipe/>}></Route>
                <Route path="/Register" element={<Register/>}></Route>
                <Route path="/Vistoria_IA" element={<Vistoria_IA/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;