import { useState } from "react"
import { ReactComponent as Arrow } from 'src/assets/icons/chevron.svg';
import './ScrollButton.css';

export default function TopButton() {
  const [fixed, setFixed] = useState(false)
  
  window.addEventListener("scroll", () => window.scrollY > 20?setFixed(true):setFixed(false))

  return (
    <button className={`button ${fixed?'active':''}`} onClick={() => window.scrollTo({top: 0})}>
      <Arrow className="arrowIcon"/>
    </button>
  )
}
