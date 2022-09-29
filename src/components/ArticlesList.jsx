import { useEffect, useState } from "react";
import { fetchArticles } from "../utils/Api";
import convertDateFromMilliseconds from "../utils/dateReformat";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles().then((articlesArray) => {
      setArticles(articlesArray);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="articles-list">
      <h1>All Articles</h1>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <h2>{article.title}</h2>
              <p>by {article.author}</p>
              <p>Like this topic? Click the topic link for more</p>
              <p>likes{article.votes}</p>
              <p>
                published on {convertDateFromMilliseconds(article.created_at)}
              </p>
              <p>{article.body}</p>
              <p>
                Press <button>Like</button> to like {article.title}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Articles;
