const endpoint = 'https://jsonplaceholder.typicode.com/posts/';

async function fetchComments(id){

    const result = fetch(endpoint + id + '/comments')
    .then((value) => value.json())
    .then( resultado => resultado)

    return result;

}
export default fetchComments;