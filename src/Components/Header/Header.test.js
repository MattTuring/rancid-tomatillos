import Header from './Header'
import { addUserState, addRatings, changeLoading } from '../../actions';
import { mapDispatchToProps } from './Header'

describe('Header', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Header
          />)
        })


    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

it('calls dispatch with an addRatings action when addUserState is called', () =>{
               const mockDispatch = jest.fn();
               const actionToDispatch = updateLoggedIn([{ id:'',
               username: '',
               ratings: [],
               loggedIn: false }]);
               const mappedProps = mapDispatchToProps(mockDispatch);

               mappedProps.updateLoggedIn([{ id:'',
               username: '',
               ratings: [],
               loggedIn: false }]);

               expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
})

});
