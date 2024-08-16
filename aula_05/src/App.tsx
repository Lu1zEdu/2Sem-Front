import Cabecalho from "./components/Header/Cabecalho"



export default function App() {
  const Titulo :string = " Pagina inicial "
  return (
    <div>
      <h1>Componentes App</h1>
      <Cabecalho tituloProps={Titulo} />
    </div>
  )
}
