import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import Header from "./components/Layouts/Header";
import { Router, Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Footer from "./components/footer/Footer";
import Article from "./components/Article/Article";

const App = () => {
  const [post, setPost] = useState({ data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios
        .get("http://localhost:4600/api/fetch/articles")
        .then(res => {
          setPost(res.data);
          console.log(res.data);
        })
        .catch(error => console.log(error));
      console.log(result);
    };

    fetchData();
  }, []);

  console.log(post);

  return (
    <div>
      <Header />

      {/* <ul>
        {post.data.map(item => (
          <li key={item.id}>
            <a>{item.title}</a>
            <h1>{item.author}</h1>
          </li>
        ))}
      </ul> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
      <Article posts={post} />
      <Footer />
    </div>
  );
};

export default App;
