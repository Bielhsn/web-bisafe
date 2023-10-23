import bike from "../assets/porto_animate.png";
import microsoft from "../assets/Parceiro1.png";
import porto from "../assets/Parceiro2.png";
import ibm from "../assets/Parceiro3.png";
import facilidade from "../assets/facilidade.png";
import agilidade from "../assets/agilidade.png";
import eficiencia from "../assets/eficiencia.png";
import reducao from "../assets/reducao.png";
import experiencia from "../assets/experiencia.png";
import Bisafe from "../assets/Bisafe.png";
import Corrente from "../assets/corrente.png";
import Corrente2 from "../assets/corrente2.png";
import Corrente3 from "../assets/corrente3.png";

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
  let altCorrente = "Corrente";
  let altCorrente1 = "Corrente1";
  let altCorrente2 = "Corrente2";

  return (
    <>
      <div class="home">
        <div id="welcome">
          <h1 id="bem_vindo">Seja bem-vindo a Bisafe!</h1>
        </div>
        <div id="security">
          <h1>
            Sua segurança <br /> é nossa prioridade
          </h1>
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
        <img src={bike} alt={altBikeConcert} />
      </div>
      <div class="partners">
        <img src={microsoft} alt={altMicrosoft} id="microsoft" />
      </div>
      <div class="partners">
        <img src={porto} alt={altPorto} id="porto" />
      </div>
      <div class="partners">
        <img src={ibm} alt={altIBM} id="ibm" />
      </div>

      <div className="about">
        <div>
          <h1 id="about_bisafe">O que é a Bisafe?</h1>
        </div>
        <div id="mission">
          <h1 id="about_mission">
            A Bisafe é uma empresa dedicada a oferecer um ChatBot de Proteção
            exclusivo para as seguradoras, sempre priorizando
            <br />a satisfação de seus clientes.Esta ideia surgiu da crescente
            popularidade do ciclismo como meio de transporte e lazer, <br />o
            que demanda uma adaptação por parte das seguradoras para garantir
            maior segurança e confiabilidade aos seus segurados.
            <br /> Com esse propósito em mente, concebemos o ChatBot, que
            proporciona assistência aos ciclistas e representa <br />
            uma significativa evolução tecnológica para as seguradoras.
          </h1>
          <img src={Bisafe} alt={altBisafe} id="bisafe" />
          <img src={Bisafe} alt={altBisafe} id="bisafe_2" />

          <div class="line_container">
            <label class="lines_about" for="lines_about"></label>
          </div>
        </div>
      </div>

      <div>
        <div id="corrente">
          {" "}
          <img src={Corrente} alt={altCorrente} />{" "}
        </div>
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
        <div id="corrente2">
          {" "}
          <img src={Corrente2} alt={altCorrente1} />{" "}
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
        <div id="corrente3">
          {" "}
          <img src={Corrente3} alt={altCorrente2} />{" "}
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
  );
}
