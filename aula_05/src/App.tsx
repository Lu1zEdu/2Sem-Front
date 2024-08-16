import Cabecalho from "./components/Cabecalho/Cabecalho";

function App(){

    const pagina:string = "Página principal";
    // const nrPagina:number = 2;
    const nrPagina:string = "2";
    // const status = "loading";
    const status = "deployed";
    const aviso = ()=> alert(pagina);

  return(
    <div>
      <h1>Componente App</h1>
      <Cabecalho paginaProps={pagina} nrPaginaProps={nrPagina} statusProps={status} avisoProps={aviso}>
        <ul>
          <li><a href="#">Aluno-1</a></li>
          <li><a href="#">Aluno-2</a></li>
          <li><a href="#">Aluno-3</a></li>
          <li><a href="#">Aluno-4</a></li>
          <li><a href="#">Aluno-5</a></li>
          <li><a href="#">Aluno-6</a></li>
          <li><a href="#">Aluno-7</a></li>
          <li><a href="#">Aluno-8</a></li>
          <li><a href="#">Aluno-9</a></li>
          <li><a href="#">Aluno-10</a></li>
        </ul>
      </Cabecalho>
    </div>
  );
}

export default App;