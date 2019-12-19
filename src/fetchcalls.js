export const postUser = (url) => {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v1/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": 'lucy@turing.io',
            "password": 'password1',
        })
    }) .then(response => {
        if (!response.ok) {
          throw Error('Error fetching ideas');
        }
        return response.json();
      })
}