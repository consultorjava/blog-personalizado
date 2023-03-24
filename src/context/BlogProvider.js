import React, { useEffect, useState } from 'react';
import BlogContext from './BlogContext';
import fetchPost from '../services/fetchPost';
import fetchAuthor from '../services/fetchAuthor';
import { fetchComments } from '../services';

function BlogProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [postsToRender, setPostsToRender] = useState([]);

  useEffect(() => {
    async function populaPosts(){
      const posts = await fetchPost();
      //Aqui está trazendo todos os usuários que fizeram postagens
      const usersObjects = await fetchAuthor();
      const usersIds = usersObjects.map(user => user.id);
      //Aqui traz somente os Id dos usuários.
      const filteredPosts = usersIds.map(user => posts.find(post => post.userId === user));
      setPostsToRender(filteredPosts);
      setPosts(posts);
    }
    populaPosts();
  },[]);

  useEffect(() => {
    async function populaComments(){
      const comments = await fetchComments();
      setComments(comments);
    }
    populaComments();
  },[]);

  const contextValue = {
    posts,
    postsToRender,
    comments,
  };

  return (<BlogContext.Provider value={ contextValue }>
    {children}
  </BlogContext.Provider>);
}

export default BlogProvider;