import Alysson from "../assets/alysson.png";
import Arthur from "../assets/arthur.png";
import Benjamin from "../assets/benjamin.png";
import Henrique from "../assets/henrique.png";
import Murilo from "../assets/murilo.png";
import Henry from "../assets/Henry.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

function Equipe(){
    let altAlysson = "Alysson Pinheiro";
        let altArthur = "Arthur Koga";
        let altGabrielB = "Gabriel Benjamin";
        let altGabrielH = "Gabriel Henrique";
        let altMurilo = "Murilo José";
        let altHenry = "Henry Ribeiro";
        let altGithub = "Github";
        let altLinkedin = "Linkedin";

    return(
        <>
        <h1 class="team">Equipe</h1>
        <hr size="1" id="line_team_mini" color= "#38B6FF"></hr>

        <div className="time">
            <div className="time_1">
            <img src={Alysson} alt={altAlysson} id="foto_equipe" />
            <img src={Arthur} alt={altArthur} id="foto_equipe" />
            <img src={Benjamin} alt={altGabrielB} id="foto_equipe" />
            </div>

            <div className="time_2">
            <img src={Henrique} alt={altGabrielH} id="foto_equipe1" />
            <img src={Henry} alt={altHenry} id="foto_equipe1" className="foto_henry" />
            <img src={Murilo} alt={altMurilo} className="foto_murilo"/>
            </div>

            <div className="alysson">
            <h1 id="name_a">Alysson Pinheiro</h1>
            <h1 id="alysson_rm">Rm: 550837</h1>
            <img src={github} alt={altGithub} id="alysson_github" />
            <img src={linkedin} alt={altLinkedin} id="alysson_linkedin" />
            </div>

            <div className="arthur">
            <h1 id="name_ar">Arthur Koga</h1>
            <h1 id="arthur_rm">Rm: 99503</h1>
            <img src={github} alt={altGithub} id="arthur_github" />
            <img src={linkedin} alt={altLinkedin} id="arthur_linkedin" />
            </div>

            <div className="benjamin">
            <h1 id="name_b">Gabriel Benjamin</h1>
            <h1 id="benjamin_rm">Rm: 552254</h1>
            <img src={github} alt={altGithub} id="benjamin_github" />
            <img src={linkedin} alt={altLinkedin} id="benjamin_linkedin" />
            </div>

            <div className="henrique">
            <h1 id="name_h">Gabriel Henrique</h1>
            <h1 id="henrique_rm">Rm: 98633</h1>
            <img src={github} alt={altGithub} id="henrique_github" />
            <img src={linkedin} alt={altLinkedin} id="henrique_linkedin" />
            </div>

            <div className="henry">
            <h1 id="name_he">Henry Ribeiro</h1>
            <h1 id="henry_rm">Rm: 550684</h1>
            <img src={github} alt={altGithub} id="henry_github" />
            <img src={linkedin} alt={altLinkedin} id="henry_linkedin" />
            </div>

            <div className="murilo">
            <h1 id="name_m">Murilo José</h1>
            <h1 id="murilo_rm">Rm: 99538</h1>
            <img src={github} alt={altGithub} id="murilo_github" />
            <img src={linkedin} alt={altLinkedin} id="murilo_linkedin" />
            </div>



        </div>
        </>
    )
}
export default Equipe;