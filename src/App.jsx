import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import React, { Component } from "react";

import axios from "axios"; //tem q baixa com npm install axios


import { Route, Routes } from "react-router-dom";
// import AppRoutes from "./router";

// import { Outlet } from 'react-router-dom'
import Login from "./Pages/Login"
import Equipe from "./Pages/Equipe"
import Planos from "./Pages/Planos"
import Home from "./Pages/Home"
import Vistoria_IA from "./Pages/Vistoria_IA";
import Cadastro from "./Pages/Cadastro";
import Bicicleta from "./Pages/Bicicleta";

// import { Outlet } from "react-router-dom";


class App extends Component{
  state = {
    equipe : [],
  }
  async componentDidMount(){
    try{
      const { data : equipe } = await axios.get("/src/api/equipe.json");//tralhamos com o metodo get pq queremos pegar dados 
      this.setState({ equipe });
    }catch(error){
      console.log(error);

      // //o 0 diz pra trazer o 1º q ele encontrar d erro
      // document.querySelectorAll(".home")[0] 
      // .insertAdjacentHTML(
      //   "beforeend",
      //   "<p> Erro ao carregar o arquivo</p>"
      // );

    }
  }


render(){
  return(
    <>
      <Cabecalho />

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Planos" element={<Planos/>}/>
          <Route path="/Equipe" element={<Equipe grupo ={ this.state.equipe }/>}/> 
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Cadastro" element={<Cadastro/>}/>
          <Route path="/Bicicleta" element={<Bicicleta/>}/>
          <Route path="/Vistoria_IA" element={<Vistoria_IA/>}/>
          </Routes>
          {/* <Outlet/> */}
        <Rodape />
    </>
  )
}
}
export default App;

