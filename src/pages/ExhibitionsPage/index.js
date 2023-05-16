import week from 'src/assets/json/week.json'

import './ExhibitionsPage.css';

import { ReactComponent as InstaLogo } from 'src/assets/img/instagramIcon.svg';
import { Link } from 'react-router-dom';

export default function ExhibitionsPage() {

  return (
    <section>
      <div className="info">
        <h1>Próximas exibições</h1>
        <hr/>
        <p>{week.date}</p>
      </div>
      {week.exhibitions.map(exhibi => (
        <div key={exhibi.artist} className="contentBox">
          <div className="exhibitionBox">
            <div className="exhibitionInfo">
              <h1>{exhibi.exhibiName.toUpperCase()}</h1>
              <a href={exhibi.artistSocial} target="_blank" rel="noreferrer">
                <InstaLogo className="instagramLogo"/>
                <h2>{exhibi.artist.toUpperCase()}</h2>
              </a>
            </div>
            <div>
              <Link className="mainFrame" to={`artistas/${exhibi.artistPageName}`}>
                <p>{exhibi.frames[0].frameName}</p>
                <img src={exhibi.frames[0].frameSrc} alt={`${exhibi.artist} frame entitled ${exhibi.frames[0].frameName}`}/>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}