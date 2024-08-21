import { Link } from "react-router-dom"
import styles from '../../App.module.css'
function Menu() {
    return (
      <>
          <nav className={styles.menu}>
              <Link to="/">Home</Link>
              <span> | </span>
              <Link to="/Produtos">Produtos</Link>
              <span> | </span>
              <Link to="/Produtos/Editar/0">Editar Produtos</Link>
        </nav>
      </>
    )
  }
  
export default Menu