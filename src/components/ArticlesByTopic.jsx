import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchArticlesByTopic } from "../utils/Api";
import convertDateFromMilliseconds from "../utils/dateReformat";
import { useParams } from "react-router-dom";

const ArticlesByTopic = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticlesByTopic(topic).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="articles-list">
      <h1>Articles on {topic}</h1>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <h2>{article.title}</h2>
              <p>by {article.author}</p>
              <p>likes{article.votes}</p>
              <p>
                published on {convertDateFromMilliseconds(article.created_at)}
              </p>
              <Link to={`/articles/${article.article_id}`}>go to article</Link>
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

export default ArticlesByTopic;
