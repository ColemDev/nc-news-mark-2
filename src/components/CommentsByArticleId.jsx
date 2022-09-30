import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsByArticleId } from "../utils/Api";
import convertDateFromMilliseconds from "../utils/dateReformat";

const CommentsByArticleId = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchCommentsByArticleId(article_id).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...comments</p>;
  }

  return (
    <div className="comments-by-article-id">
      <h1>Comments</h1>
      <p>Add your own comment</p>
      <form>
        <label>
          Comment:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>{comment.author}</p>
              <p>{convertDateFromMilliseconds(comment.created_at)}</p>
              <p>{comment.body}</p>
              <p>likes{comment.votes}</p>
              <p>
                <button>Like</button>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CommentsByArticleId;
