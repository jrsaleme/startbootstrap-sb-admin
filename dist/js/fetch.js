const URL_API = 'https://jsonplaceholder.typicode.com/user'

fetch(URL_API)
      .then(response => response.json())
      .then(json => console.log(json))