import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render(){
    return (

      <div className="App">
      <Route
           exact
           path="/"
           render={() => {
             return (
               <h1>Movie APP is Finished</h1>
           )
           }}
         />
      </div>
    )
  }
}

export default App;
