import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as InstaLogo } from 'src/assets/icons/instagram.svg';
import { ReactComponent as Arrow } from 'src/assets/icons/chevron.svg';
import { ReactComponent as Close } from './close.svg';

import './ArtistExhibition.css';

export default function ArtistExhibition({main}) {
  const navigate = useNavigate();

  const [focus, setFocus] = useState('');

  function focusFrame(index){
    focus !== index?setFocus(index):setFocus('');
  }

  function slide(num){
    if(focus + num >= main.frames.length){
      setFocus(0)
    } else if (focus + num === -1) {
      setFocus(main.frames.length-1)
    } else {
      setFocus(focus + num)
    }
  }

  return (
    <div>
      <div className="artistExhibitionHeader">
        <button onClick={() => navigate(-1)}>
          <Arrow className="buttonIcon icon"/>
        </button>
        <h1>{main.exhibiName}</h1>
        <a href={main.artistSocial} target="_blank" rel="noreferrer">
          <InstaLogo className="icon"/>
          <h3>{main.artist}</h3>
        </a>
      </div>
      <div className="framesBox">
        {focus.toString() ?
          <button className="closeButton" onClick={() => setFocus('')}>
            <Close className="icon"/>
          </button>
        :null}
        {focus.toString() ? 
          <div className="navButtonsBox">
            <button onClick={() => slide(-1)}>
              <Arrow className="leftButtonIcon icon"/>
            </button>
            <button onClick={() => slide(1)}>
              <Arrow className="rightButtonIcon icon"/>
            </button>
          </div>
        :null}
        {main.frames.map((frame, index) => (
          <div key={frame.frameSrc} className={`frame ${focus === index?'active':''}`} onClick={() => focusFrame(index)}>
            <img src={frame.frameSrc} alt={frame.frameName}/>
            <p>{frame.frameName}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
