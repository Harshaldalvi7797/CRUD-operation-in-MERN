import React from "react";

const Article = ({ posts }) => {
  console.log(posts.data);
  return (
    <div>
      {posts.data.map((article, key) => (
        <div className="container">
          <h2>{article.title}</h2>
          <p>{article.article}</p>
        </div>
      ))}
    </div>
  );
};
export default Article;
