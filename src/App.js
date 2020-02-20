import React from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="shadow" >
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="text" class="form-control" id="InputText" aria-describedby="emailHelp" placeholder="Enter To Do Item" />
          </div>
          <button type="submit" class="btn btn-primary">Save</button>
        </form>
        <br />
      </div>
      <div className="row">
        <div className="col-2">
          <ul class="list-group">
            <li className="list-group-item list-group-item-action">Menu Item 1</li>
            <li className="list-group-item list-group-item-action">Menu Item 2</li>
            <li className="list-group-item list-group-item-action">Menu Item 3</li>
            <li className="list-group-item list-group-item-action">Menu Item 4</li>
            <li className="list-group-item list-group-item-action">Menu Item 5</li>
          </ul>
        </div>
        <div className="col">
          <ul class="list-group">
            <li className="list-group-item">My Action Item 1 <button className="btn btn-danger" >Delete</button> </li>
            <li className="list-group-item">My Action Item 2 <button className="btn btn-danger" >Delete</button></li>
            <li className="list-group-item">My Action Item 3 <button className="btn btn-danger" >Delete</button></li>
            <li className="list-group-item">My Action Item 4 <button className="btn btn-danger" >Delete</button></li>
            <li className="list-group-item">My Action Item 5 <button className="btn btn-danger" >Delete</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
