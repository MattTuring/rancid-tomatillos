import { postUser } from './fetchCalls';



describe('postUser', () => {
    let mockResponse = 
        {
            id:3,
            username:'lucy@turing.io',
            password:'password1',
            error:null,
            loggedIn:true
    }
    let mockOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": 'lucy@turing.io',
            "password": 'password1',
        })
    }
    ;

    beforeEach(() => {
        window.fetch = jest.fn().mockImplementation(() => {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockResponse)
          });
        });
    });
    
    it('should be passed the correct url', () => {
        postUser()

        expect(window.fetch).toHaveBeenCalledWith('https://rancid-tomatillos.herokuapp.com/api/v1/login', mockOptions);
    })

    it('should return an array of ideas', () => {
        expect(postUser()).resolves.toEqual(mockResponse);
    })

    it('should return an error for response that is not ok', () => {
        window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
              ok: false,
            });
          });
        expect(postUser()).rejects.toEqual(Error('Error fetching ideas'))
        
    })
})