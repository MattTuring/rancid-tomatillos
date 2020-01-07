import React from 'react';
import { shallow } from 'enzyme';
import { MovieShowPage, mapStateToProps, mapDispatchToProps } from './MovieShowPage';
import { addRatings } from '../../actions'

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
    { id: 2, average_rating: 4 },
    { id: 3, average_rating: 6 }
  ]

  let user = {
    id: 3,
    username: 'kayla',
    ratings: [{
      ratings: [{
        id: 1, user_id: 3, movie_id: 1, rating: 7, created_at: "someDate", updated_at: "someDate"
      }, {
        id: 2, user_id: 3, movie_id: 5, rating: 6, created_at: "someDate", updated_at: "someDate"
      }]
    }],
    loggedIn: true
  }

  let mockChangeLoading = jest.fn();

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

  it('should find movie rating', () => {
    expect(wrapper.instance().findYourRating()).toEqual(7)
  })

  it('should add current rating to state', () => {
    let mockEvent = {
      target: {
        id: '4'
      }
    }

    wrapper.instance().addRating(mockEvent);

    expect(wrapper.state('currentRating')).toEqual(4);
  })

  it('should change the state of show', () => {
    wrapper.instance().show();

    expect(wrapper.state('show')).toEqual(true);
  })

  it('should update movieRating when component mounts with logged in user', () => {
    expect(wrapper.state('movieRating')).toEqual(7)
  })

  describe('mapStateToProps', () => {
    it('should return an object with movies and user', () => {

      const mockState = {
        movies,
        user
      };

      const expected = {
        movies,
        user
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with an addRatings action when submitRating is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addRatings({type: 'ADD_RATINGS', ratings: []});

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addRatings({type: 'ADD_RATINGS', ratings: []});

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

});
