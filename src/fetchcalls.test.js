import { postUser, retrieveMovies } from './fetchCalls';



describe('retrieveMovies', () => {
    let mockResponse = [
        {
            "id": 1,
            "title": "Jumanji: The Next Level",
            "poster_path": "https://image.tmdb.org/t/p/original//l4iknLOenijaB85Zyb5SxH1gGz8.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg",
            "release_date": "2019-12-04",
            "overview": "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
            "average_rating": 6
          },
          {
            "id": 2,
            "title": "Ad Astra",
            "poster_path": "https://image.tmdb.org/t/p/original//xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//5BwqwxMEjeFtdknRV792Svo0K1v.jpg",
            "release_date": "2019-09-17",
            "overview": "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
            "average_rating": 5
          },
    ]


    beforeEach(() => {
        window.fetch = jest.fn().mockImplementation(() => {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockResponse)
          });
        });
    });

    it('should be passed the correct url', () => {
        retrieveMovies()

        expect(window.fetch).toHaveBeenCalledWith('https://rancid-tomatillos.herokuapp.com/api/v1/movies');
    })

    it('should return an array of ideas', () => {
        expect(retrieveMovies()).resolves.toEqual(mockResponse);
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
        postUser('https://rancid-tomatillos.herokuapp.com/api/v1/login', {
            "email": 'lucy@turing.io',
            "password": 'password1',
        })
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
