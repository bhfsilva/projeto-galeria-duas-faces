import week from 'src/assets/json/week.json'

import './ExhibitionsPage.css';

import Frame from './Frame';

export default function ExhibitionsPage() {

  return (
    <section>
      <div className="info">
        <h1>Próximas exibições</h1>
        <p>{week.date}</p>
      </div>
      <div className="mainExhibitions">
        {week.exhibitions.map(exhibi => (
          <Frame src={exhibi} key={exhibi.exhibiName}/>
        ))}
      </div>
      <div className="info">
        <h1>Exibições passadas</h1>
      </div>
      <div className="previousExhibitions">
        {week.previousExhibi.map(previous => (
          <Frame isMiniature src={previous} key={previous.exhibiName}/>
        ))}
      </div>
    </section>
  )
}