import { Link, useParams } from "react-router-dom";
import week from 'src/assets/json/week.json';
import ArtistExhibition from "./ArtistExhibition";

import './ArtistsPage.css';
import { useEffect } from "react";

export default function ArtistsPage() {
  const {artista} = useParams();

  const artistsList = week.exhibitions.concat(week.previousExhibi);

  let mainArtist = [...artistsList].filter(item => item.artistPageName === artista)
  mainArtist = {...mainArtist[0]}

  useEffect(() => {
    window.scrollTo({top: 0})
  }, [])

  return (
    <section>
      {artista?
        <ArtistExhibition main={mainArtist}/>
      :
        <div className="artistsListContent">
          <h1 className="title">2023</h1>
          <div className="artistsBox">
            {artistsList.map(item => (
              <Link className="linkToExhibi" key={item.artist} to={`/artistas/${item.artistPageName}`}>
                <h3>{item.artist}</h3>
                <p>{item.exhibiName?`${item.exhibiName}`:'untitled'}</p>
              </Link>
            ))}
          </div>
        </div>
      }

    </section>
  )
}
