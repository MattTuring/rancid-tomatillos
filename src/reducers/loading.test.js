import { loading } from '../reducers/loading';

describe('loading reducer', () => {
  it('should return the initial state', () => {
    const expected = false;

    const result = loading(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is CHANGE_LOADING', () => {
    const initialState = false
    const action = {
      type: 'CHANGE_LOADING'
    }
    const result = loading(initialState, action);
    const expected = true;

    expect(result).toEqual(expected);
  })

});
