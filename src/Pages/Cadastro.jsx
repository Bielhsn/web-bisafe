import { useForm } from 'react-hook-form';
import {  useNavigate } from 'react-router-dom';

import { Link } from "react-router-dom";
import Login from "../assets/login.png";

const Cadastro = () => {
    const navigate = useNavigate(); 
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    const onSubmit = (data) => {
  
      const userData = {
        nome: data.nome,
        email: data.email,
        password: data.password
      };
  
      //pega os dados q já tem 
      const existingData = JSON.parse(localStorage.getItem('users')) || [];
  
      // Add outros cadastros
      const updatedData = [...existingData, userData];
  
      
      localStorage.setItem('users', JSON.stringify(updatedData));
      alert("voce se cadastrou com sucesso")
      navigate('/Login');
  
    }

  let altLogin = "Login";
    return(
        <>
    <div id="register">
    <div class="form-cadastro">
      <p class="title_register">Cadastro</p>
      <form class="form" onSubmit={handleSubmit(onSubmit)}>
        <input type="name" required= "preencha" class="input" placeholder="Nome"{...register("nome", { required: "preencha" })} autoFocus />
        <input type="email" required= "preencha" class="input" placeholder="Email"{...register("email", { required: "preencha" })}/>
        <input type="email" required= "preencha" class="input" placeholder="Confirme o Email"></input>
        <input type="password" required= "preencha" class="input" placeholder="Senha"{...register("password", { required: "preencha" })}  />
        <input type="password" required= "preencha" class="input" placeholder="Confirme a Senha"></input>
        <button class="form-btn">Cadastrar</button>
      </form>
    </div>
    </div>
    <img src={Login} alt={altLogin} id="login" />
        </>
    )
}
export default Cadastro;



