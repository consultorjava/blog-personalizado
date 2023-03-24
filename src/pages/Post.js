import React,{ useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogContext from "../context/BlogContext";
import Header from "../components/Header";
import Card from "../components/Card";
import Comment from "../components/Comment";
import { fetchAuthor, fetchPost, fetchComments } from "../services";


function Post() {
  const [post, setPost] = useState({});
  const [author, setAuthor] = useState('');
  const [commentsPost, setCommentsPost] = useState([]);
  const { id } = useParams();

  //Nesse função será trazido o Post selecionado e todos os omentários relacionados a ele
  useEffect(() => {
    async function getPost() {
      const post = await fetchPost(id);
      const commentsPost = await fetchComments(id);
      setPost(post);
      setCommentsPost(commentsPost);
    }
    getPost();
  }, [id]);

  //Nessa função será trazido o Author selecionado do Post.
  useEffect(() => {
    async function getAuthor() {
      const author = await fetchAuthor(post.userId);
      setAuthor(author.name);
    }
    getAuthor();
  }, [post]);

  const { posts } = useContext(BlogContext);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="container">
        <div>
          <h2>{post.title}</h2>
          <h3>Author: {author}</h3>
          <p>{post.body}</p>
        </div>
        <div>
          <h4>Comentários</h4>
          {
            commentsPost
            .map(c =>(
              <Comment
                key = {c.id}
                id = {c.id}
                name = {c.name}
                email = {c.email}
                body = {c.body}
                />
            ))
          }
        </div>
        <div className="row mt-3">
          <h4>Outros posts do mesmo autor:</h4>
          {posts
            .filter(postToFilter => postToFilter.userId === post.userId)
            .map(postToRender => (
              <Card
                key={postToRender.id}
                id={postToRender.id}
                userId={postToRender.userId}
                titulo={postToRender.title}
                descricao={postToRender.body}
              />
            ))
          }
        </div>
      </main>
    </div>
  );
}

export default Post;
