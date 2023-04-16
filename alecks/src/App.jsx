import Gift from './components/Gift';
import Confetti from './components/Confetti';
import './App.css'
import { useState, useEffect } from 'react';

function App() {

  const [wasClicked, setWasClicked] = useState(false);

  const updateWasClicked = () => {
    setWasClicked(true);
  }

  return (
    <div className={`App ${wasClicked ? 'transition' : ' '}`}>
      <Gift update={updateWasClicked}/>
      {wasClicked && 
        <div className={`bday ${wasClicked ? 'pop' : ' '}`}>  
        <Confetti />

          <div className="columns">
            <div className="column has-text-centered">
              <article className="cta">
                <img src='https://media.giphy.com/media/TEkr9oBZ57KFmMWScZ/giphy.gif'/>
                <div className="cta__text-column">
                  <h2 className="title is-2">Happy Birthday Alex!</h2>
                    <p>"congrats on turning 14, i hope you have a fun birthday" - <i>Kat</i></p>
                    <p>"Happy birthday Alex, I hope you like this gift" - <i>Ben</i></p>
                    <p>"Feliz Cumpleaños! Thanks for sharing the same dum humor of a human rat dragging pizza" - <i>Kenia</i></p>
                    <p>"Happy Bday buddy thanks for being the bestest greatest friend. UwU Lots of love and kisses" - <i>Justin</i></p>
                    <p>"Happy Bday from a fellow gumi wuewuewuewuewue" - <i>Syed</i></p>
                </div>
              </article>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default App
