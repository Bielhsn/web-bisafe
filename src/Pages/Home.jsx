import Conteudo from "../components/Conteudo";
import Vistoria from "../components/Vistoria";
import Equipe from "../components/Equipe";

function Home(){
    return(
        <div className="container">
            <Conteudo/>
            <Vistoria/>
            <Equipe/>
        </div>
    )
}
export default Home;