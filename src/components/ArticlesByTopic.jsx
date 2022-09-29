import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchArticlesByTopic } from "../utils/api";
import convertDateFromMilliseconds from "../utils/dateReformat";

/* the user clicks on a topic button on the home page which uses `/articles/topic=${topic}` as the path and passes the topic slug as a parameter to the ArticlesByTopic component which will then fetch the articles for that topic and display them in a list in nearly the same way as the ArticlesList component does */

const ArticlesByTopic = (props) => {
  console.log(props);
  const [articles, setArticles] = useState({});

  useEffect(() => {
    fetchArticlesByTopic(props.topic).then((articles) => {
      setArticles(articles);
    });
  }, [props.topic]);

  return (
    <div className="articles-list">
      <h1>Articles on {props.topic}</h1>
      <ul>
        {Object.keys(articles).map((article) => {
          return (
            <li key={article}>
              <article className="articles-list-item">
                <h2>{articles[article].title}</h2>
                <p>by {articles[article].author}</p>
                <p>Likes {articles[article].votes}</p>
                <p>
                  published on{" "}
                  {convertDateFromMilliseconds(articles[article].created_at)}
                </p>
                <p>
                  {" "}
                  Read {articles[article].title}
                  <Link to={`/articles/${articles[article].article_id}`}>
                    here
                  </Link>
                  .
                </p>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
