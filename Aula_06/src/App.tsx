import { Outlet } from 'react-router-dom'
import './App.css'
import styles from './App.module.css'
import Footer from './Components/Footer'
import Menu from './Routes/Menu/Index'
function App() {
  return (
    <>
      <div className={styles.container}>
        <h1>Teste</h1>
        <Menu />
        <Outlet />
        <Footer />
      </div>
    </>
    
  )
}

export default App