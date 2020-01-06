import React from 'react';
import { shallow } from 'enzyme';
import { MovieShowPage, mapStateToProps, mapDispatchToProps } from './MovieShowPage';


describe('MovieShowPage', () => {
  let wrapper;

  let movie = {
    id: 1,
    title: "Movie Title",
    poster_path: "someURL",
    backdrop_path: "someURL",
    release_date: "2019-12-04",
    overview: "Some overview",
    average_rating: 6
  }

  let movies = [
    { id: 1, average_rating: 3 },
    { id: 2, average_rating: 4  },
    { id: 3, average_rating: 6  },
  ]

  let user = {
    id: 3,
    username: 'kayla',
    ratings: [{ratings: [{}, {}]}],
    loggedIn: true
  }

  let mockChangeLoading = jest.fn();

  // make jest.fn()

  beforeEach(() => {
    wrapper = shallow(<MovieShowPage
      movie = {movie}
      movies = {movies}
      user = {user}
      changeLoading = {mockChangeLoading}
    />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
