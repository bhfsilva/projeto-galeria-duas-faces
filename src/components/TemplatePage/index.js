import { Outlet } from "react-router-dom";
import defaultTheme from './DefaultTheme.css'
import Header from 'src/components/Header';
import Footer from "../Footer";

export default function TemplatePage() {
  return (
    <div className={defaultTheme.container}>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
