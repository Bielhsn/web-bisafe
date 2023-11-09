
export default function Cabecalho(props){
    return(
        <>
            <header className="cabecalho">

       <nav>
            <ul>

                 <li className="cabecalho__item-menu"> 
                    <a href="/"> Início </a> 
                </li>
                <li className="cabecalho__item-menu"> 
                    <a href="/Planos"> Planos </a> 
                </li>
                <li className="cabecalho__item-menu" >
                     <a href="/" id="cabecalho_main"> Bisafe </a>
                </li>
                <li className="cabecalho__item-menu">
                    <a href="/Cadastro"> Cadastro </a> 
                </li>
                <li className="cabecalho__item-menu"> 
                    <a href="/Register"> Registre-se </a> 
                </li> 
            </ul>
       </nav>
        {props.children}
     </header>
        </>
    )
}
