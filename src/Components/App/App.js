import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom'
import Form from '../Form/Form';
import Header from '../Header/Header';
import { addMovies } from '../../actions';
import { connect } from 'react-redux';
import MovieContainer from '../MovieContainer/MovieContainer'
import { retrieveMovies } from '../../fetchcalls';
import MovieShowPage from '../MovieShowPage/MovieShowPage';

export class App extends React.Component {
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
          exact path="/users/:id"
          render={() => {
            return (
              <>
                <Header />
                {this.props.loading ?
                <p>LOADING</p> :
                <MovieContainer />}
              </>
            )
          }}
        />
        <Route
          exact path="/"
          render={() => {
            return (
              <>
                <Header />
                <MovieContainer />
              </>
            )
          }}
        />
        <Route
          exact path="/movies/:id" render={({ match }) => {
            let movie = this.props.movies.find(movie => movie.id === parseInt(match.params.id))
            return movie &&
            <>
              <Header />
              <MovieShowPage movie={movie} />
            </>
          }} />
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  movies: state.movies,
  loading: state.loading
})

export const mapDispatchToProps = dispatch => ({
  addMovies: movies => dispatch( addMovies(movies) )
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
