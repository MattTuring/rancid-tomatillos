import React from 'react';
import './App.scss';
import {Route} from 'react-router-dom'
import Form from '../Form/Form'
import Header from '../Header/Header'

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
          exact path="/login"
          render={() => {
            return (
              <>
                <Header/>
                <Form />
              </>
            )
          }}
        />
        <Route
          exact path="/"
          render={() => {
            return (
              <>
                <Header/>
              </>
            )
          }}
      />
      </div>
    )
  }
}

export default App;
