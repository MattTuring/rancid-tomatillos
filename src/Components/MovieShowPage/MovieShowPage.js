import React from 'react'
import { Link } from 'react-router-dom';
import RatingModal from '../RatingModal/RatingModal'
import {connect} from 'react-redux'

class MovieShowPage extends React.Component {
constructor() {
  super()
  this.state = {
    show: false,
    rating: null,
    date: null
  }
}

componentDidMount() {
    let dateArray = this.props.movie.release_date.split('-');
    let date = `${dateArray[1]}-${dateArray[2]}-${dateArray[0]}`;
    this.setState({date: date})
  }

  show = () => {
    this.setState({show: !this.state.show})
  }

  addRating = (event) => {
    if (typeof parseInt(event.target.id) === 'number'&& event.target.id.length > 0) {
      this.setState({rating: parseInt(event.target.id)})
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
            "rating": this.state.rating
        })

  })
  .then(response => console.log(response.json()))
}

render() {
  return (
  <section className='movie-show-page'>
    <Link to='/'>
      <button className='go-back-button'>GO BACK</button>
    </Link>
    <div className='movie-info-container'>
      <div className='movie-poster' style={{backgroundImage: `url(${this.props.movie.poster_path})`}}/>
      <div className='movie-info-text'>
        <h2>{this.props.movie.title.toUpperCase()}</h2>
        <p>OVERVIEW: {this.props.movie.overview}</p>
        <p>RELEASE DATE: {this.state.date}</p>
        <p>AVERAGE RATING: {this.props.movie.average_rating}</p>
        <button className='rate-button' onClick={this.show}>RATE THIS MOVIE</button>
          {this.state.show && <RatingModal show={this.show} addRating={this.addRating} submit={this.submitRating} rating={this.state.rating}/>}
      </div>
    </div>
  </section>

  )
}
}
const mapStateToProps = state => ({
  userId: state.login.id
})

export default connect(mapStateToProps)(MovieShowPage);
