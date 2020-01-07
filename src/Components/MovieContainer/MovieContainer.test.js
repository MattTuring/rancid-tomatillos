import React from 'react';
import { shallow } from 'enzyme';
import { MovieContainer } from './MovieContainer';

describe('MovieContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieContainer
      movies={[{  id:7, title: 7,
      poster_path:7,
        average_rating:7}]}
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
