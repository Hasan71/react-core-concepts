import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var name  = "Mahfuz";

  var person = {
    name: "Doktor Mahfuz",
    job: "Singer"
  }

  var person2 = {
    name: "Eva Rahman",
    job: "Kokil konthi"
  }

  var result = [];
   for(let i=0; i<10; i++){
     var result2 = result.push(i);
  }

  var mystyle = {
    color: 'orange',
    backgroundColor: 'cyan'
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <a>
          Learn React
        </a>
        <h1>My heading {2+5*25+65}</h1>
        <h2 style={{backgroundColor:'green', color: 'blue'}}>This is Doctor {name}</h2>
        <h3>{result}</h3>
        <p>My first react paragraph</p>
        <p>oh my my {person.job + " " + person.name} </p>

        <h3>She is {person2.name} and her job is {person2.job} </h3>

        <h4 style={mystyle} >Singer: {person2.name + " Job: " + person2.job} </h4>

      </header>
    </div>
  );
}

export default App;
