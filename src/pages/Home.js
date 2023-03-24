import React,{ useContext } from "react";
import { Navigate } from "react-router-dom";
import BlogContext from "../context/BlogContext";
import Header from "../components/Header";
import Card from "../components/Card";
import './Home.css';

function Home() {
  const { postsToRender } = useContext(BlogContext);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="container ">
        <div className="row mt-2 ">
          {postsToRender
          .map(post => (
            <Card
              key={post.id}
              id={post.id}
              userId={post.userId}
              titulo={post.title}
              descricao={post.body}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
