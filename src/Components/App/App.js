import React from 'react';
import './App.scss';
import {Route} from 'react-router-dom'
import Form from '../Form/Form'
import Header from '../Header/Header'
import { addMovies } from '../../actions';
import { connect } from 'react-redux';
import MovieContainer from '../MovieContainer/MovieContainer'
import { retrieveMovies } from '../../fetchcalls';

class App extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    retrieveMovies('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
      .then(data => {
        this.props.addMovies(data)
      })
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
          exact path="/users/:id/ratings"
          render={() => {
            return (
              <>
                <Header/>
                <MovieContainer/>
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
                <MovieContainer/>
              </>
            )
          }}
        />
        <Route
          exact path="/movies/:id"
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

const mapDispatchToProps = dispatch => ({
  addMovies: movies => dispatch( addMovies(movies) )
})

export default connect(null, mapDispatchToProps)(App)
