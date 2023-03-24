const endpoint = 'https://jsonplaceholder.typicode.com/users/';

async function fetchAuthor(id){
  const result = fetch(endpoint + (id ? id : ''))
    .then((value) => value.json())
    .then(resultado => resultado);

  return result;
}

export default fetchAuthor;