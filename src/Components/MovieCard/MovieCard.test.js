import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from './MovieCard';

describe('MovieCard', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<MovieCard
      title="Foster Movie"
    />);

    expect(wrapper).toMatchSnapshot();
  });
    
});