import { ReactComponent as InstaLogo } from 'src/assets/img/instagram.svg';
import { ReactComponent as FaceLogo } from 'src/assets/img/facebook.svg';
import { useState } from 'react';
import './Footer.css';

export default function Footer() {

  const logos = [InstaLogo, FaceLogo];

  const linkProps = {"href":'https://github.com/bhS1lva',"target":"_blank","rel":"noreferrer"}

  const [mail, setMail] = useState('');

  function sendForm(event){
    event.preventDefault();
    alert(`E-mail ${mail} cadastrado com sucesso!`);
    setMail('')
  }

  return (
    <footer>
      <div className="formBox">
        <h1>Inscreva-se</h1>
        <p>Faça parte da nossa newsletter e se informe sobre exibições futuras!</p>
        <form onSubmit={(event) => sendForm(event)}>
          <input type="email" placeholder="Insira seu email" value={mail} onChange={event => setMail(event.target.value)} required/>
          <button type="submit">Me inscreva</button>
        </form>
        <i>Nós respeitamos sua privacidade.</i>
      </div>
      <div className="infoBox">
        <div className="socialMediaBox">
          {logos.map((Logo, index) => (
            <a {...linkProps} key={index}>
              <Logo className="instaLogo"/>
            </a>
          ))}
        </div>
        <div>
          <h3>Galeria Duas Faces</h3>
          <p>Segunda a Sexta das 11 às 19h*</p>
          <i>*Quando ocorrerem exibições.</i>
        </div>
        <div>
          <h3>Contato</h3>
          <p>bhfs.contato@gmail.com</p>
          <p>+55 (11) 33333-3333</p>
        </div>
      </div>
      <div className="copyrightBox">
        <p>&copy; <a {...linkProps}>Bruno Henrique</a> - {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
