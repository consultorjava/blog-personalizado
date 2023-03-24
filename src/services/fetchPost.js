const endpoint = 'https://jsonplaceholder.typicode.com/posts/';

async function fetchPost(id){

    const result = fetch(endpoint + (id ? id : ''))
    .then((value) => value.json())
    .then( resultado => resultado)

    return result;

}
export default fetchPost;