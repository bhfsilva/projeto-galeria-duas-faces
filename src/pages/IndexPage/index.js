import { Link } from 'react-router-dom';
import './IndexPage.css';

export default function IndexPage() {
  return (
    <section className="indexContent">
      <div>
        <h1>Histórico</h1>
        <p>A galeria Duas Faces foi fundada em 2023 na divisa das cidades de Jandira e Itapevi com o propósito de exibir arte contemporânea de artistas emergentes e independentes do Brasil e ao redor do mundo.</p>
      </div>
      <div>
        <h1>Horários</h1>
        <p>Nossa galeria está aberta de Segunda a Sexta das 11h às 17h durante as semanas que ocorrerem exibições.</p>
        <p>Visite também nossas <Link to="exibicoes">exibições virtuais!</Link></p>
      </div>
      <div>
        <h1>Encontrando a galeria</h1>
        <p>Estamos à 20 minutos da estação Sagrado Coração - Linha 8 Diamante!</p>
        <iframe className="indexMap" title="Localizacao" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14631.242369178339!2d-46.9166442!3d-23.5393139!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf06a4b8deb0f3%3A0xb141abf17d1bd0c4!2sN%C3%A3o%20existe.!5e0!3m2!1spt-BR!2sbr!4v1684249325947!5m2!1spt-BR!2sbr" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  )
}
