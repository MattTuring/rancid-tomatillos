import React from 'react';
import { shallow } from 'enzyme';
import { Form }  from './Form';

describe('Form', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<Form />)
    });

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });


    it('should return error if login validation fails', () => {
        const originalState = {
            id: '',
            username: '',
            password: '',
            error: null,
            loggedIn: false
        };

        wrapper.setState(originalState)

        wrapper.instance().login()

        expect(wrapper.state()).toEqual({
            error: "THE USERNAME OR PASSWORD IS INCORECT",
            id: "",
            loggedIn: false,
            password: "",
            username: ""
        });
    });

    it('should update state when login is called with input values', () => {
        const populatedState = {
            id: '1',
            username: 'foster',
            password: 'abc',
            error: null,
            loggedIn: false
        };

        const expected =  {
            id: '1',
            username: 'foster',
            password: 'abc',
            error: null,
            loggedIn: false
        };

        wrapper.setState(populatedState)
        // mock http request
        wrapper.instance().login()

        expect(wrapper.state()).toEqual(expected);
    });
});
