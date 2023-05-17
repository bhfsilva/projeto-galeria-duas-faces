import { useNavigate, useParams } from "react-router-dom";
import week from 'src/assets/json/week.json';

import './ArtistsPage.css';

export default function ArtistsPage() {
  const navigate = useNavigate();
  const {artista} = useParams();

  let artistsList = [];

  function filterArtistsList() {
    for (let arrayArg of arguments){
      arrayArg.map(item => artistsList.push({"artist":item.artist, "artistPage":item.artistPageName ,"exhibiName":item.exhibiName}))
    }
  };

  filterArtistsList(week.exhibitions,week.previousExhibi);

  return (
    <section>
      {artista?
      <>
        <button onClick={() => navigate(-1)}>{'< Voltar'}</button>
        <h1 style={{backgroundColor:"#FF0000"}}>{artista}</h1>
      </>
      :
      <div className="artistsListContent">
        <h1 className="title">2023</h1>
        <div className="artistsBox">
          {artistsList.map(item => (
            <button key={item.artist} onClick={() => navigate(`/artistas/${item.artistPage}`)}>
              <h3>{item.artist}</h3>
              <p>{item.exhibiName?`${item.exhibiName}`:'untitled'}</p>
            </button>
          ))}
        </div>
      </div>}

    </section>
  )
}
