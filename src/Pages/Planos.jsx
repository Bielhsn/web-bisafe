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
        <Vistoria_IA/>
      </div>
      {/* <h1 class="survey">Vistoria</h1>
      <hr class="survey_line" color="#38B6FF"></hr>
      <div className="frontal">
      <h1 id="titles_vistoria">Frontal</h1>
      <label for="file" class="custum-file-upload">
        <div class="icon">
          <svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 
            7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 
            7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 
            4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 
            4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 
            22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 
            11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 
            23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                fill=""
              ></path>{" "}
            </g>
          </svg>
        </div>
        <div class="text">
          <span>Click to upload image</span>
        </div>
        <input id="file" type="file"></input>
      </label>
      </div>

      <div className="traseira">
      <h1 id="titles_vistoria">Traseira</h1>
      <label for="file" class="custum-file-upload">
        <div class="icon">
          <svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 
            7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 
            7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 
            4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 
            4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 
            22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 
            11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 
            23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                fill=""
              ></path>{" "}
            </g>
          </svg>
        </div>
        <div class="text">
          <span>Click to upload image</span>
        </div>
        <input id="file" type="file"></input>
      </label>
      </div>

      <div className="laterais">
      <h1 id="titles_vistoria">Laterais</h1>
      <label for="file" class="custum-file-upload">
        <div class="icon">
          <svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 
            7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 
            7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 
            4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 
            4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 
            22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 
            11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 
            23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                fill=""
              ></path>{" "}
            </g>
          </svg>
        </div>
        <div class="text">
          <span>Click to upload image</span>
        </div>
        <input id="file" type="file"></input>
      </label>
      </div>
      <button class="bn_send_ar">
        <div class="svg-wrapper-1">
          <div class="svg-wrapper">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <span>Send</span>
      </button> */}
        </>
    )
}
export default Planos;