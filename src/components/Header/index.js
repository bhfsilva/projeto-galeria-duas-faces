import { Link } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as Logo } from './logo.svg';
import './Header.css';

export default function Inicio() {
  const routes = [
    {label:"Sobre nós",path:"/"},
    {label:"Artistas",path:"artistas"},
    {label:"Exibições",path:"exibicoes"}
  ]

  const [show, setShow] = useState(false);

  return (
    <header>
      <Link to="/" className="logoBox">
        <Logo className="logo"/>
        <h1>Galeria Duas Faces</h1>
      </Link>
      <button className={`menuIcon ${show?'closeIcon':''}`} onClick={() => setShow(!show)}>
        <div/>
        <div/>
        <div/>
      </button>
      <nav className={`navBox ${show?'showNav':''}`}>
        {routes.map(route => (
          <Link to={route.path} key={route.label} onClick={() => setShow(false)}>
            {route.label}
          </Link> 
        ))}
      </nav>
    </header>
  )
}
