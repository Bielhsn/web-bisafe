
import React from 'react';
import { Link } from "react-router-dom";
export default function Cabecalho(props){
    return (
        <header className="cabecalho">
          <nav>
            <ul>
              {/* ta o "*" para qual ser igual o do main e n der o erro 404 */}
              <li className="cabecalho__item-menu"><Link to="/"> Início</Link></li> 
              <li className="cabecalho__item-menu"><Link to="/Planos"> Planos</Link></li> 
              <li className="cabecalho__item-menu"><Link to="/" id="cabecalho_main"> Bisafe</Link></li> 
              <li className="cabecalho__item-menu"><Link to="/Equipe"> Equipe </Link></li> 
              <li className="cabecalho__item-menu"><Link to="/Login"> Login </Link></li> 

            </ul>
          </nav>
          {props.children}
        </header>
        
      );
}
