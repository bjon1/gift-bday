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
              <div className="columns is-flex-direction-column">
                <div className="column" id="message">
                  <div className="title is-2">Happy Birthday Alex!</div>
                  <p><i>"congrats on turning 14"</i> - Kat</p>
                  <p><i>"happy bday"</i> - Ben</p>
                  <p><i>""</i> - Justin</p>
                  <p><i>""</i> - Syed</p>
                </div>
                <div className="column">
                  <img src="some image"/>
                </div>
              </div>
            </div>
            <div className="column">
              <img src='https://media.giphy.com/media/TEkr9oBZ57KFmMWScZ/giphy.gif'/> 
            </div>
          </div>

          
        </div>
      }
    </div>
  )
}

export default App
