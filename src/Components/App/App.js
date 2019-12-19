import React from 'react';
import './App.scss';
import {Route} from 'react-router-dom'
import Form from '../Form/Form'
import Header from '../Header/Header'
import { addMovies } from '../../actions';
import { connect } from 'react-redux';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieShowPage from '../MovieShowPage/MovieShowPage';

class App extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
    .then(response => response.json())
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
          exact path="/users/:id"
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
          exact path="/movies/:id" render={({ match }) => {
            let movie = this.props.movies.find(movie => movie.id === parseInt(match.params.id))
            return movie &&
            <>
              <Header/>
              <MovieShowPage movie={movie}/>
            </>
          }} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

const mapDispatchToProps = dispatch => ({
  addMovies: movies => dispatch( addMovies(movies) )
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
