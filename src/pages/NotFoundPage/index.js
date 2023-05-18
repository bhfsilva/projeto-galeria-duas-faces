import { useNavigate } from 'react-router-dom';
import { ReactComponent as NotFound } from 'src/assets/icons/notFound.svg';
import { ReactComponent as Arrow } from 'src/assets/icons/chevron.svg';

import './NotFoundPage.css';

export default function NotFoundPage() {
  const nav = useNavigate()

  return (
    <section className="notFoundContent">
      <h1 className="errorMessage">Erro 404 - Página não encontrada</h1>
      <NotFound className="maskImage"/>
      <div className="notFoundtextBox">
        <h1>A página que você tentou acessar não existe</h1>
        <button onClick={() => nav(-1)}className="backLink" to="/">
          <Arrow className="backIcon"/>
          Voltar
        </button>
      </div>
    </section>
  )
}
