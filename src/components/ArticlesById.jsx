import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchArticleById } from "../utils/Api";
import convertDateFromMilliseconds from "../utils/dateReformat";
import { useParams } from "react-router-dom";
import CommentsByArticleId from "./CommentsByArticleId";
const ArticlesById = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticleById(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...article</p>;
  }

  return (
    <div className="articles-by-id">
      <h1>{article.title}</h1>
      <p>by {article.author}</p>
      <p>likes {article.votes}</p>
      <p>published on {convertDateFromMilliseconds(article.created_at)}</p>
      <p>{article.body}</p>
      <Link to={`/articles`}>go to all articles</Link>
      <p>
        Like articles like this? We do too! You can{" "}
        <Link to={`/articles/topic/${article.topic}`}>click this link</Link> for{" "}
        <i>more</i> articles on {article.topic}!
      </p>
      <p>
        Press <button>Like</button> to like {article.title}
      </p>
      <CommentsByArticleId />
    </div>
  );
};

export default ArticlesById;
