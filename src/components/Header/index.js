import { Link } from "react-router-dom";
import { ReactComponent as Logo } from './logo.svg';
import './Header.css';

export default function Inicio() {
  const routes = [
    {label:"Sobre nós",path:"/"},
    {label:"Artistas",path:"artistas"},
    {label:"Exibições",path:"exibicoes"}
  ]

  return (
    <header>
      <Link to="/" className="logoBox">
        <Logo className="logo"/>
        <h1>Galeria Duas Faces</h1>
      </Link>
      <nav className="innerBox">
        {routes.map(route => (
          <Link to={route.path} key={route.label}>
            {route.label}
          </Link> 
        ))}
      </nav>
    </header>
  )
}
