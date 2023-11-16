import { Link } from "react-router-dom";
import Login from "../assets/login.png";
import {  useNavigate } from 'react-router-dom';

function Bicicleta(){
  const navigate = useNavigate(); 

  let altLogin = "Login";

  const onSubmit = () => {
    alert("bike cadastrada com sucesso, adicione fotos dela agora")
    navigate('/Vistoria_IA');

  }
  
    return(
        <>
    <div id="register">
    <div class="form-bicicleta">
      <p class="title_register">Cadastre sua Bicicleta</p>
      <form class="form" onSubmit={(onSubmit)}>
        <input type="text" class="input" required= "preencha" placeholder="Marca" autoFocus/>
        <input type="text" class="input" required= "preencha" placeholder="Modelo"/>
        <input type="text" class="input" required= "preencha" placeholder="Nº de Série"/>
        <input type="text" class="input" required= "preencha" placeholder="Preço"/>
        <div class="input_cor">
        <p>Cor da Bike</p>
        <input type="color" />
        </div>
        {/* <Link class="form-btn" ><button >Cadastrar</button></Link> */}
        <button class="form-btn">Cadastrar</button>
        
        
      </form>
    </div>
    </div>
        </>
    )
}
export default Bicicleta;