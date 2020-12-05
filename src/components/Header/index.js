import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="navbar navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link to="/">🏠 Home</Link>
        <Link to="/nova-tarefa">➕ Nova Tarefa</Link>
      </div>
    </div>
  )
}

export default Header
