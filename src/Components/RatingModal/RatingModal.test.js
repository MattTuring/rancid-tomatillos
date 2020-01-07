import React from 'react';
import { shallow } from 'enzyme';
import { RatingModal } from './RatingModal';

describe('RatingModal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RatingModal
      show={true}
      addRating={jest.fn()}
      submit={jest.fn()}
      rating={4}
      id={1}
    />)
  })

  it('should match the snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  })
})
