import Gift from './components/Gift';
import './App.css'
import { useState, useEffect } from 'react';
import './confetti.js';

function App() {

  const [wasClicked, setWasClicked] = useState(false);

  const updateWasClicked = () => {
    setWasClicked(true);
  }

  useEffect(() => {
    console.log("outside UseEffect");
    if(wasClicked){
      console.log("inside useEffect");
      const start = () => {
        console.log("inside start");
        setTimeout(function() {
          console.log("inside timeout");
            start()
        }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
      };
  
      //  Stop
  
      const stop = () => {
          setTimeout(function() {
              stop()
          }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
      };
  
      start();
      stop();
    }
  })

  return (
    <div className={`App ${wasClicked ? 'transition' : ' '}`}>
      <Gift update={updateWasClicked}/>
      {wasClicked && 
        <div className="bday">
          <div className="columns">
            <div className="column has-text-centered">
              <div class="columns is-flex-direction-column">
                <div class="column">
                  <div className="title is-2" id="message">Happy Birthday Alex!</div>
                  <p><i>"congrats on turning 14"</i> - Kat</p>
                  <p><i>"happy bday"</i> - Ben</p>
                  <p><i>""</i> - Justin</p>
                  <p><i>""</i> - Syed</p>
                </div>
                <div class="column">
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
