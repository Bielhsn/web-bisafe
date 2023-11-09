import bike from "../assets/porto_animate.png";
import microsoft from "../assets/Parceiro1.png";
import porto from "../assets/Parceiro2.png";
import ibm from "../assets/Parceiro3.png";
import Bisafe from "../assets/Bisafe.png";

export default function Conteudo(props) {
  //Declarativa
  let altBikeConcert = "ConcertBike";
  let altMicrosoft = "Microsoft";
  let altPorto = "Porto";
  let altIBM = "IBM";
  let altBisafe = "Bisafe";

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

      
    </>
  );
}
