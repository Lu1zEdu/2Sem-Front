import { Link } from "react-router-dom"
function Menu() {
    return (
      <>
          <nav className="menu">
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