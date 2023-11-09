import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";

import AppRoutes from "./router";

import { Outlet } from 'react-router-dom'

export default function App(){
  return(
    <>
      <div className="container">
        {/*Cabeçalho da página*/}
          <Cabecalho/>
          <Outlet />
          <AppRoutes/>
        {/*Rodapé da página*/}
          <Rodape/>
      </div>
    </>
  )
}