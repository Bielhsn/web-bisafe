
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
                    <a href="/Planos"> Planos e Vistoria </a> 
                </li>
                <li className="cabecalho__item-menu" >
                     <a href="/" id="cabecalho_main"> Bisafe </a>
                </li>
                <li className="cabecalho__item-menu">
                    <a href="/Equipe"> Equipe </a> 
                </li>
                <li className="cabecalho__item-menu"> 
                    <a href="/Register"> Login/Register </a> 
                </li> 
            </ul>
       </nav>
        {props.children}
     </header>
        </>
    )
}
