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
        <div className="bday">  
        <Confetti />

          <div className="columns">
            <div className="column has-text-centered">
              <article class="cta">
                <img src='https://media.giphy.com/media/TEkr9oBZ57KFmMWScZ/giphy.gif'/>
                <div class="cta__text-column">
                  <h2 className="title is-2">Happy Birthday Alex!</h2>
                  <p>"congrats on turning 14" - Kat</p>
                  <p>"happy bday" - Ben</p>
                  <p>"" - Justin</p>
                  <p>"" - Syed</p>
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
