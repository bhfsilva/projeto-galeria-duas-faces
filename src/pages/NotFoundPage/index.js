import { ReactComponent as NotFound } from 'src/assets/icons/notFound.svg';

import './NotFoundPage.css';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="notFoundContent">
      <h1 className="errorMessage">Erro 404 - Página não encontrada</h1>
      <NotFound className="maskImage"/>
      <div className="notFoundtextBox">
        <h1>A página que você tentou acessar não existe</h1>
        <Link className="backLink" to="/">Voltar para o inicío</Link>
      </div>
    </section>
  )
}
