import React from 'react'
import { Link } from 'react-router-dom';
import RatingModal from '../RatingModal/RatingModal';
import {connect} from 'react-redux';
import { addRatings } from '../../actions';

class MovieShowPage extends React.Component {
constructor() {
  super()
  this.state = {
    show: false,
    currentRating: null,
    date: null
  }
}

  componentDidMount() {
      let dateArray = this.props.movie.release_date.split('-');
      let date = `${dateArray[1]}-${dateArray[2]}-${dateArray[0]}`;
    this.setState({ date: date })
    this.getRatings()
  }

  show = () => {
    this.setState({show: !this.state.show})
  }

  addRating = (event) => {
    if (typeof parseInt(event.target.id) === 'number' && event.target.id.length > 0) {
      this.setState({currentRating: parseInt(event.target.id)})
    }
  }

  submitRating = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${this.props.userId}/ratings`, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "movie_id": this.props.movie.id,
          "rating": this.state.currentRating
      })
    })
    .then(() => this.getRatings())
    .catch(error => console.log(error))
  }

  getRatings = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${this.props.user.id}/ratings`)
    .then(response => response.json())
    .then(data => this.props.addRatings(data))
    // .then(this.props.addRatings(this.props.movie.id, this.state.rating))
    //update global store
  }

  findYourRating() {
    let rating = this.props.user.ratings.find(rating => rating.movie_id === this.props.movie.id)
    if (rating) {
      return rating.rating
    } else {
      return false
    }
  }

  render() {
    return (
    <section className='movie-show-page'>
      <Link to='/users/3'>
        <button className='go-back-button'>GO BACK</button>
      </Link>
      <div className='movie-info-container'>
        <div className='movie-poster' style={{backgroundImage: `url(${this.props.movie.poster_path})`}}/>
        <div className='movie-info-text'>
          <h2>{this.props.movie.title.toUpperCase()}</h2>
          <p>OVERVIEW: {this.props.movie.overview}</p>
          <p>RELEASE DATE: {this.state.date}</p>
          <p>AVERAGE RATING: {this.props.movie.average_rating}</p>
          {this.findYourRating() ?
            <p>YOUR RATING: {this.findYourRating()}</p> :
            //logic: iterate through store.movies and store.user.ratings to match movies and find rating
            <button className='rate-button' onClick={this.show}>RATE THIS MOVIE</button>
          }
          {this.state.show && <RatingModal
            show={this.show}
            addRating={this.addRating}
            submit={this.submitRating}
            rating={this.state.currentRating}
            id={this.props.movie.id}
            />}
        </div>
      </div>
    </section>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  addRatings: (ratings) => dispatch(addRatings( ratings ))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieShowPage);
