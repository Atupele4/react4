import React from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


import Appmenu from './components/Appmenu'
import Actionlist from './components/Actionlist'
import Modal from './components/modal';

function App() {
  return (
    <div className="App container">
      <div className="" >

        <br />

        <Modal namex="Click Me" />

        <br />
        <br />
      </div>
      <div className="row">
        <Appmenu />

        <div className="col">
          <Actionlist />
        </div>
      </div>
    </div>
  );
}

export default App;
