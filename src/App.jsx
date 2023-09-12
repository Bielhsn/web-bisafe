import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import Vistoria from "./components/Vistoria";
import Equipe from "./components/Equipe";
import Rodape from "./components/Rodape";

export default function App(){

  return(
    <>
      <div className="container">
        {/*Cabeçalho da página*/}
          <Cabecalho />
        {/*Conteúdo da página*/}
          <Conteudo />
        {/*Conteúdo da página*/}
          <Vistoria />
        {/*Equipe da página*/}
          <Equipe />
        {/*Rodapé da página*/}
          <Rodape />
      </div>
    </>
  )
}
