import React, { useEffect } from 'react';
import { demoArrayStudy } from './assets/utils/arrayStudy.js' ;
import { setupTextChange } from './assets/utils/textChange.js'; 

import './App.css';

function App() {
  useEffect(() => { // here we use the different functions we created
    demoArrayStudy();
    setupTextChange(); 
     
  }, []);

  return (
    <div className="App">
      <h1>My Test App</h1>
      <button id="changeTextButton">Change Text</button>
      <p id="myText">Original Text</p>
    </div>
  );
}

export default App;
