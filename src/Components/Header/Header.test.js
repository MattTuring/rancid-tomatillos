import { addUserState, addRatings, changeLoading, updateLoggedIn } from '../../actions';
import { mapDispatchToProps, matchStateProps, Header } from './Header'
import { shallow } from 'enzyme';
import React from 'react';

describe('Header', () => {
  let wrapper;
  let mockUpdateLoggedIn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Header
      user={{user: "Lucy"}}
      updateLoggedIn={mockUpdateLoggedIn}
    />)
  })

  it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
  });

  it('calls dispatch with an addRatings action when addUserState is called', () =>{
    const mockDispatch = jest.fn();
    const actionToDispatch = updateLoggedIn([{
      id:'',
      username: '',
      ratings: [],
      loggedIn: false
      }]);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.updateLoggedIn([{
      id:'',
      username: '',
      ratings: [],
      loggedIn: false
    }]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
