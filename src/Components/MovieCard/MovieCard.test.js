import React from 'react';
import { shallow } from 'enzyme';
import { MovieCard, mapStateToProps } from './MovieCard';

jest.mock('../../fetchcalls.js');

describe('MovieCard', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const email = 'foster@ask.com'
    const wrapper = shallow(<MovieCard
      key='yello'
      id='fello'
      title='FOSTER MOVIE'
      poster='undefined'
      averageRating='say hello'
      user={email}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('mapsStateToProps', () => {
    it('should return only user properties from the store', () => {
        const mockState = {
            movies: [],
            user: {},
            loading: true
        };
        const expected = {
            user:{}
        };
        const mappedProps = mapStateToProps(mockState);

        expect(mappedProps).toEqual(expected);
    });
  });
});
