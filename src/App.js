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

        <br />
        <br />
      </div>
      <div className="row">
        <Appmenu />

        <div className="col">
          <div class="container">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Enter Item Description</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <button type="submit" class="btn btn-primary">Add Item</button>
            </form>
            <br />
          </div>
          <Actionlist />
        </div>
      </div>
    </div>
  );
}

export default App;
