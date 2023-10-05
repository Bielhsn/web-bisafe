import bike from "../assets/porto_animate.png"
import microsoft from "../assets/Parceiro1.png"
import porto from "../assets/Parceiro2.png"
import ibm from "../assets/Parceiro3.png"
import facilidade from "../assets/facilidade.png"
import agilidade from "../assets/agilidade.png"
import eficiencia from "../assets/eficiencia.png"
import reducao from "../assets/reducao.png"
import experiencia from "../assets/experiencia.png"
import Bisafe from "../assets/Bisafe.png"

export default function Conteudo(props) {


    //Declarativa
        let altBikeConcert = "ConcertBike";
        let altMicrosoft = "Microsoft";
        let altPorto = "Porto";
        let altIBM = "IBM";
        let altFacilidade = "Facilidade";
        let altAgilidade = "Agilidade";
        let altEficiencia = "Eficiencia";
        let altReducao = "Reducao";
        let altExperiencia = "Experiencia";
        let altBisafe = "Bisafe";

    return (
        <>
        <div class="home">
            <div id="welcome">
                <h1 id="bem_vindo">Seja bem-vindo a Bisafe!</h1>
            </div>
            <div id="security">
                <h1>Sua segurança <br/> é nossa prioridade</h1>
            </div>
            <button class="btn-53">
                <div class="original">Saiba Mais</div>
                    <div class="letters">
                        <span>S</span>
                        <span>a</span>
                        <span>i</span>
                        <span>b</span>
                        <span>a</span>
                        <span>M</span>
                        <span>a</span>
                        <span>i</span>
                        <span>s</span>
                    </div>
            </button>
        </div>
        <div class="bike_photos">
            <img src={bike} alt={altBikeConcert}/>
        </div>
        <div class="partners">
            <img src={microsoft} alt={altMicrosoft} id="microsoft" />
        </div>
        <div class="partners">
            <img src={porto} alt={altPorto} id="porto"/>
        </div>
        <div class="partners">
            <img src={ibm} alt={altIBM} id="ibm"/>
        </div>

        <div className="about">
            <div>
                <h1 id="about_bisafe">O que é a Bisafe?</h1>
            </div>
            <div id="mission">
                <h1 id="about_mission">A Bisafe é uma empresa dedicada a oferecer um ChatBot de Proteção exclusivo para as seguradoras, sempre priorizando 
                <br/>a satisfação de seus clientes.Esta ideia surgiu da crescente popularidade do ciclismo como meio de transporte e lazer, <br/>o que demanda uma adaptação 
                por parte das seguradoras para garantir maior segurança e confiabilidade aos seus segurados.<br/> Com esse propósito em mente, concebemos o ChatBot, que 
                proporciona assistência aos ciclistas e representa <br/>uma significativa evolução tecnológica para as seguradoras.</h1>
                <img src={Bisafe} alt={altBisafe} id="bisafe"/>
                <img src={Bisafe} alt={altBisafe} id="bisafe_2"/>

            <div class="line_container">
                <label class="lines_about" for="lines_about"></label>
            </div>

                
            </div>
        </div>

        <div>
            <div>
                <img src={facilidade} alt={altFacilidade} id="facility" />
                <h2 id="facilidade">Facilidade</h2>
                <p id="about_facility">Permitir que os clientes realizem a vistoria de seus  <br />
                veículos de forma remota, sem a necessidade de <br />
                deslocamentos ou agendamentos presenciais, <br />
                tornando o processo mais conveniente e acessível.</p>
            </div>
            <div >
                <img src={agilidade} alt={altAgilidade} id="agility" />
                <h2 id="agilidade">Agilidade</h2>
                <p id="about_agility">Reduzir o tempo necessário para a conclusão <br />da vistoria,
                acelerando o processo de <br />contratação de seguros e proporcionando<br />
                uma resposta mais rápida aos clientes.</p>
            </div>
            <div >
                <img src={eficiencia} alt={altEficiencia} id="efficiency" />
                <h2 id="eficiencia">Eficiencia</h2>
                <p id="about_efficiency">Automatizar e digitalizar o processo <br />de vistoria, 
                reduzindo a dependência <br />de recursos humanos e simplificando <br />a gestão dos dados
                e informações coletadas.</p>
            </div>
            <div >
                <img src={reducao} alt={altReducao} id="reduction" />
                <h2 id="reducao">Redução</h2>
                <p id="about_reduction">Eliminar os custos associados à vistoria presencial, <br /> 
                como deslocamentos e taxas de vistoriadores,tornando o <br />seguro mais acessível 
                aos clientes e aumentando a <br />competitividade da seguradora.</p>
            </div>
            <div >
                <img src={experiencia} alt={altExperiencia} id="experience" />
                <h2 id="experiencia">Experiência</h2>
                <p id="about_experience">Proporcionar uma experiência mais moderna e conveniente <br />
                aos clientes, atendendo às suas expectativas em <br />relação à facilidade de uso de 
                serviços online e à praticidade <br />proporcionada pela tecnologia.</p>
            </div>
        </div>

        <div>
            <div>
                <h1 id="plan">Nossos planos</h1>
                <hr class="plan_line" color="#38B6FF"></hr>
            </div>
            <div>
                <ul class="plans">
                    <li> Plano Básico</li>
                    <li> Plano Médio</li>
                    <li> Plano Super</li>
                </ul>
            </div>



        </div>
        </>
    )
}