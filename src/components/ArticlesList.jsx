import { useEffect, useState } from "react";
import { fetchArticles } from "../utils/Api";
import convertDateFromMilliseconds from "../utils/dateReformat";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


const Articles = () => {

  const { topic_slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState({});
  const [params, setParams] = useState({});

  useEffect(() => {
    fetchArticles(params).then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [params]);

  if(isLoading) return <p>Loading...</p>

  return (
    <div className="articles-list">
      <button onClick={() => setParams({ sort_by: "created_at" })}>Most Recent</button>
        <button onClick={() => setParams({ sort_by: "votes" })}>Most popular </button>
        <button onClick={() => setParams({ sort_by: "comment_count" })}>Most commented</button>
        <button onClick={() => setParams({ filter : "topic_slug" value: "coding" })}>Coding</button>
        <button onClick={() => setParams({ filter : "topic_slug" value: "cooking" })}>Cooking</button>
        <button onClick={() => setParams({ filter : "topic_slug" value: "football" })}>Football</button>
        <button onClick={() => setParams({ clear : true })}>All Articles</button>
    
     <h1>All Articles</h1>
      <ul>
        {Object.keys(articles).map((article) => {
          return (
            <li key={article}>

              <article className="articles-list-item">
                <h2>{articles[article].title}</h2>
                <p>by {articles[article].author}</p>
                <p>
                  <button>
                  <button onClick={() => setParams({ filter : "topic_slug" value: `${articles[article].topic}` })}>{articles[article].topic}</button>
                  </button>
                </p>
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

export default Articles;
