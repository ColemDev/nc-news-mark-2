import { fetchTopics } from "../utils/Api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopicsList = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchTopics().then((topics) => {
      setTopics(topics);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="topics-list">
      {topics.map((topic) => {
        return (
          <pre className="topic" key={topic.slug}>
            {" "}
            <Link to={`/articles/topic/${topic.slug}`}>
              read about: {topic.slug}
            </Link>{" "}
          </pre>
        );
      })}
    </div>
  );
};

export default TopicsList;
