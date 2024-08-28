import React, { useEffect, useState } from 'react';
import { demoArrayStudy } from './assets/utils/arrayStudy.js' ;
import { setupTextChange } from './assets/utils/textChange.js'; 
import { fetchTodoTitles } from './assets/utils/fetchTodos.js';

import './App.css';

function App() {

  const [todoTitles, setTodoTitles] = useState([]); // use of useState to start with an empty array


  useEffect(() => { // here we use the different functions we created
    demoArrayStudy();
    setupTextChange(); 
    fetchTodoTitles().then(titles => setTodoTitles(titles));
  }, []);
     

  return (
    <div className="App">
      <h1>My Test App</h1>
      <button id="changeTextButton">Change Text</button>
      <p id="myText">Original Text</p>


      <h2>First 5 Todo Titles:</h2>
      <ul>
        {todoTitles.map((title, index) => ( //we use .map to return a new array with just the titles
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
