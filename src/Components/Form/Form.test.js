import React from 'react';
import { shallow } from 'enzyme'
import { Form }  from './Form';

describe('Form', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Form />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});