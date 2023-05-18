import { Outlet } from "react-router-dom";
import defaultTheme from './DefaultTheme.css'
import Header from '../Header';
import Footer from '../Footer';
import ScrollButton from '../ScrollButton';

export default function TemplatePage() {

  return (
    <div className={defaultTheme.container}>
      <Header/>
      <Outlet/>
      <ScrollButton/>
      <Footer/>
    </div>
  )
}
