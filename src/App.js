import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import BlogProvider from "./context/BlogProvider";
import Home from './pages/Home';
import Post from './pages/Post';

function App() {

  return (
    <BlogProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={ Home } />
          <Route exact path="/post/:id" Component={ Post } />
        </Routes>
      </BrowserRouter>
    </BlogProvider>
  );
}

export default App;
