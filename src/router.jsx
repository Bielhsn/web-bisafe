import { BrowserRouter, Route, Routes } from "react-router-dom";

import Register from "./Pages/Register"
import Equipe from "./Pages/Equipe"
import Planos from "./Pages/Planos"
import Home from "./Pages/Home"


function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Planos" element={<Planos/>}></Route>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Equipe" element={<Equipe/>}></Route>
                <Route path="/Register" element={<Register/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;