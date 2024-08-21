import { Outlet } from 'react-router-dom'
import './App.css'
import Menu from './Routes/Menu/Index'
function App() {
  return (
    <>
      <div className="App">
        <h1>Teste</h1>
        <Menu />
        <Outlet />
      </div>
    </>
    
  )
}

export default App