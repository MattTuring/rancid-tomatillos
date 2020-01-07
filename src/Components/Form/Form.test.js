import React from 'react';
import { shallow } from 'enzyme'
import { Form }  from './Form';
import { addUserState, addRatings, changeLoading } from '../../actions';
import { mapDispatchToProps } from './form'

describe('Form', () => {
    let wrapper
    let fakeChangeLoading

    beforeEach(() => {
        fakeChangeLoading = jest.fn()
        wrapper = shallow(<Form
          changeLoading={fakeChangeLoading}
          />)
    });

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });


    it('should return error if login validation fails', () => {
        const originalState = {
            id: '',
            username: '',
            password: '',
            passwordLength: "",
            error: null,
            loggedIn: false
        };

        wrapper.setState(originalState)

        wrapper.instance().login()

        expect(wrapper.state()).toEqual({
            error: "THE USERNAME OR PASSWORD IS INCORECT",
            id: "",
            loggedIn: false,
            passwordLength: "",
            password: "",
            username: ""
        });
    });

    it('should update state when login is called with input values', () => {
        const populatedState = {
            id: '1',
            username: 'lucy@turing.io',
            password: 'password1',
            passwordLength: 9,
            error: null,
            loggedIn: false
        };

        let expected =  {
            id: '1',
            username: 'lucy@turing.io',
            password: 'password1',
            passwordLength: 9,
            error: "THE USERNAME OR PASSWORD IS INCORECT",
            loggedIn: false
        };

        wrapper.setState(populatedState)


        wrapper.instance().login()
            // mock http request
            window.fetch = jest.fn().mockImplementation(() => {
              return Promise.resolve({
                json: () => Promise.resolve(expected)
              });
            });

        expect(wrapper.state()).toEqual(expected);
    });


      it('should update state when handleChange is called', () => {

        const populatedState = {
            id: '1',
            username: 'lucy@turing.io',
            password: 'password1',
            passwordLength: 9,
            error: null,
            loggedIn: false
        };

        wrapper.setState(populatedState)

        const mockEvent = { target: { value: 'lucy@turing.io'} };
        const expected = 'lucy@turing.io';
        wrapper.find('#username').simulate('change', mockEvent);
        expect(wrapper.state('username')).toEqual(expected);

        wrapper.find('#password').simulate('change', mockEvent);
        expect(wrapper.state('password')).toEqual(expected);
  })

  it('calls dispatch with an addMovies action when addUserState is called', () =>{
                 const mockDispatch = jest.fn();
                 const actionToDispatch = addUserState([{ rating: 7 }]);
                 const mappedProps = mapDispatchToProps(mockDispatch);

                 mappedProps.addUserState([{ rating: 7 }]);

                 expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
})

it('calls dispatch with an changeLoading action when addUserState is called', () =>{
               const mockDispatch = jest.fn();
               const actionToDispatch = changeLoading([{ rating: 7 }]);
               const mappedProps = mapDispatchToProps(mockDispatch);

               mappedProps.changeLoading([{ rating: 7 }]);

               expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
})

it('calls dispatch with an addRatings action when addUserState is called', () =>{
               const mockDispatch = jest.fn();
               const actionToDispatch = addRatings([{ rating: 7 }]);
               const mappedProps = mapDispatchToProps(mockDispatch);

               mappedProps.addRatings([{ rating: 7 }]);

               expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
})

});
