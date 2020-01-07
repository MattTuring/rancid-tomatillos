import React from 'react';
import { Link } from 'react-router-dom';
import RatingModal from '../RatingModal/RatingModal';
import { connect } from 'react-redux';
import { getRatings, postRating } from '../../fetchcalls';
import { addRatings } from '../../actions';
import PropTypes from 'prop-types';

export class MovieShowPage extends React.Component {
constructor() {
  super()
  this.state = {
    show: false,
    currentRating: null,
    movieRating: null
  }
}

  componentDidMount() {
    if (this.props.user.loggedIn) {
      this.setState({
        movieRating: this.findYourRating()
      })
    }
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
    postRating(this.props.user.id, this.props.movie.id, this.state.currentRating)
    .then(() => getRatings(this.props.user.id)
      .then(data => {
        this.props.addRatings(data)
        this.setState({
          movieRating: this.findYourRating()
        })
      })
    )
    .catch(error => console.log(error))
  }

  findYourRating() {
    let rating = this.props.user.ratings[0].ratings.find(rating => rating.movie_id === this.props.movie.id);
    if (rating) {
      return rating.rating;
    } else {
      return null;
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
          <p>AVERAGE RATING: {Math.round(this.props.movie.average_rating)}</p>
          {this.props.user.loggedIn ?
            this.state.movieRating ?
            <p>YOUR RATING: {this.state.movieRating}</p> :
            <button className='rate-button' onClick={this.show}>RATE THIS MOVIE</button> :
            <Link to='/login'>
              <button className='login-button'>LOG IN NOW TO RATE THIS MOVIE</button>
            </Link>}
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

export const mapStateToProps = state => ({
  movies: state.movies,
  user: state.user,
})

export const mapDispatchToProps = dispatch => ({
  addRatings: (ratings) => dispatch(addRatings( ratings ))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieShowPage);

MovieShowPage.propTypes = {
  show: PropTypes.bool,
  currentRating: PropTypes.number,
  movieRating: PropTypes.number
}
