import { useEffect, useState } from "react";
import { fetchArticleById } from "../utils/Api";
import { fetchCommentsByArticleId } from "../utils/Api";
import { convertDateFromMilliseconds } from "./Helpers/ConvertDate";

// maybe move this date converter to a seperate helper folder

const ArticlesById = (props) => {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState({});

  useEffect(() => {
    fetchArticleById(props.article_id).then((article) => {
      setArticle(article);
    });
  }, [props.article_id]);

  useEffect(() => {
    fetchCommentsByArticleId(props.article_id).then((comments) => {
      setComments(comments);
    });
  }, [props.article_id]);
  return (
    <div>
      <section>
        <h1>{article.title}</h1>
        <article class="ArticleById">
          <p>by {article.author}</p>
          <p>
            Like this topic? Click the topic link for more
            <Link to={`/articles?topic=${article.topic}`}>{article.topic}</Link>
            !
          </p>
          <p>likes{article.votes}</p>
          <p>published on {convertDateFromMilliseconds(article.created_at)}</p>
          <p>{article.body}</p>
          <p>
            Press <button>Like</button> to like {article.title}
          </p>
        </article>
      </section>
      <section>
        {/* <h3>{commentCounterById} Comments </h3> */}
        <p>Add a Comment</p>
        <form>
          <label>
            Comment:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </section>
      {/* <section>
        <ul>
          {fetchCommentsByArticleId.map((comment) => {
            return (
              <li key={comment}>
                <article class="CommentById">
                  <p>{comment.body}</p>
                  <p>{comment.author}</p>
                  <p>{comment.votes}</p>
                  <p>{convertDateFromMilliseconds(comment.created_at)}</p>
                </article>
              </li>
            );
          })}
        </ul>
      </section> */}
    </div>
  );
};

export default ArticlesById;
