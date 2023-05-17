import { Outlet, useLocation } from "react-router-dom";
import defaultTheme from './DefaultTheme.css'
import Header from '../Header';
import Footer from '../Footer';
import ScrollButton from '../ScrollButton';
import { useEffect } from "react";

export default function TemplatePage() {

  let {pathname} = useLocation();

  switch(pathname){
    case '/artistas':
      pathname = 'Artistas';
      break
    case '/exibicoes':
      pathname = 'Exibições';
      break
    default:
      pathname = 'Sobre nós'
  }

  useEffect(() => {
    document.title = `Galeria Duas Faces | ${pathname}`;
  }, [pathname]);

  return (
    <div className={defaultTheme.container}>
      <Header/>
      <Outlet/>
      <ScrollButton/>
      <Footer/>
    </div>
  )
}
