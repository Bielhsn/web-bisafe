import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import './cabecalho.css'
import './conteudo.css'
import './vistoria.css'
import './equipe.css'
import './rodape.css'
import './register.css'
import Home from './Pages/Home.jsx';
import Planos from './Pages/Planos.jsx';
import Vistoria_IA from './Pages/Vistoria_IA.jsx';
import Cadastro from './Pages/Cadastro.jsx';
import Login from './Pages/Login.jsx';
import Equipe from './Pages/Equipe.jsx';
import Bicicleta from './Pages/Bicicleta.jsx';

const routes = createBrowserRouter([
  { path: "/" , element: <App/>,errorElement: <Home/>,
   children: [
    
      {path: "/", element: <Home/>},
      {path: "/Planos", element: <Planos/>},
      // {path: "/Equipe", element: <Equipe grupo ={ this.state.equipe }/>},
      {path: "/Vistoria_IA", element: <Vistoria_IA/>},
      {path: "/Cadastro", element: <Cadastro/>},
      {path: "/Login", element: <Login/>},
      {path: "/Bicicleta", element: <Bicicleta/>},

      
      {path: "*", element: <Home/>}
   ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={routes} />
  </React.StrictMode>
  
)
