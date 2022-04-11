import React from "react";
import { useSelector } from "react-redux";
import PostForm from "./components/PostForm";
import User from "./components/User";

const App = () => {

  const posts = useSelector((state) => state.postReducer)

  console.log(posts);
  return (
    <div>
      <h1>Extreme</h1>
      <PostForm />
      <div className="content">
        <div className="post-container">CONTENU</div>
        <User />
      </div>
    </div>
  );
};

export default App;
