import facilidade from "../assets/facilidade.png";
import agilidade from "../assets/agilidade.png";
import eficiencia from "../assets/eficiencia.png";
import reducao from "../assets/reducao.png";
import experiencia from "../assets/experiencia.png";
import Vistoria_IA from "./Vistoria_IA";

function Planos(){

    let altFacilidade = "Facilidade";
    let altAgilidade = "Agilidade";
    let altEficiencia = "Eficiencia";
    let altReducao = "Reducao";
    let altExperiencia = "Experiencia";

    return(
        <>
        <div>
        <div class="card_1">
          <div>
            <img src={facilidade} alt={altFacilidade} id="facility" />
            <h2 id="facilidade">Facilidade</h2>
            <p id="about_facility">
              Permitir que os clientes realizem a vistoria de seus <br />
              veículos de forma remota, sem a necessidade de <br />
              deslocamentos ou agendamentos presenciais, <br />
              tornando o processo mais conveniente e acessível.
            </p>
          </div>
        </div>
        <div class="card_2">
          <div>
            <img src={agilidade} alt={altAgilidade} id="agility" />
            <h2 id="agilidade">Agilidade</h2>
            <p id="about_agility">
              Reduzir o tempo necessário para a conclusão <br />
              da vistoria, acelerando o processo de <br />
              contratação de seguros e proporcionando
              <br />
              uma resposta mais rápida aos clientes.
            </p>
          </div>
        </div>


        <div class="card_3">
          <div>
            <img src={eficiencia} alt={altEficiencia} id="efficiency" />
            <h2 id="eficiencia">Eficiencia</h2>
            <p id="about_efficiency">
              Automatizar e digitalizar o processo <br />
              de vistoria, reduzindo a dependência <br />
              de recursos humanos e simplificando <br />a gestão dos dados e
              informações coletadas.
            </p>
          </div>
        </div>
        <div class="card_4">
          <div>
            <img src={reducao} alt={altReducao} id="reduction" />
            <h2 id="reducao">Redução</h2>
            <p id="about_reduction">
              Eliminar os custos associados à vistoria presencial, <br />
              como deslocamentos e taxas de vistoriadores,tornando o <br />
              seguro mais acessível aos clientes e aumentando a <br />
              competitividade da seguradora.
            </p>
          </div>
        </div>
        <div class="card_5">
          <div>
            <img src={experiencia} alt={altExperiencia} id="experience" />
            <h2 id="experiencia">Experiência</h2>
            <p id="about_experience">
              Proporcionar uma experiência mais moderna e conveniente <br />
              aos clientes, atendendo às suas expectativas em <br />
              relação à facilidade de uso de serviços online e à praticidade{" "}
              <br />
              proporcionada pela tecnologia.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1 id="benefit">Benefícios</h1>
          <hr class="benefits_line" color="#38B6FF"></hr>
        </div>

        <div class="card_ciclista">
            <h1 id="title_ciclista">Ciclistas</h1>
            <ul>
                <li>Atendimento 24/7: O chatbot está disponível 24 horas por dia, 7 dias por semana, 
                    permitindo que os segurados obtenham assistência imediata, independentemente do horário.</li>
                <li>Facilidade de Reivindicações: Os ciclistas podem relatar incidentes, fazer perguntas sobre suas 
                    apólices e até mesmo iniciar processos de reivindicações diretamente através do chatbot, economizando 
                    tempo e eliminando a burocracia.</li>
                <li>Aconselhamento Personalizado: O chatbot utiliza algoritmos inteligentes para fornecer conselhos 
                    personalizados, como dicas de segurança para evitar acidentes e informações sobre manutenção de bicicletas.</li>
            </ul>
        </div>
        <div class="card_seguradora">
            <h1 id="title_seguradora">Seguradoras</h1>
            <ul>
                <li>Redução de Custos: Com o chatbot, as seguradoras podem automatizar uma série de tarefas 
                    administrativas, reduzindo os custos operacionais e liberando recursos para atividades mais estratégicas.</li>
                <li>Melhoria da Retenção de Clientes: A resposta rápida e eficiente do chatbot contribui para a satisfação 
                    do cliente, o que, por sua vez, aumenta a fidelidade dos segurados.</li>
                <li>Coleta de Dados Inteligentes: O chatbot coleta dados valiosos sobre as interações dos segurados, 
                    permitindo que as seguradoras identifiquem tendências e tomem decisões informadas para melhorar seus serviços.</li>
            </ul>
        </div>
      </div>
      
        </>
    )
}
export default Planos;