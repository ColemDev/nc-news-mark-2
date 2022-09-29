import { useEffect, useState } from "react";
// import { fetchTopics } from "../utils/api";
// import { Link } from "react-router-dom";

/*
The home should have a list of all the topics available on the site in the form of clickable buttons and ordered by the number of articles that have the same topic as the topic slug parameter.
*/

// const topicObjectArray = fetchTopics();
// const topicSlugArray = topicObjectArray.map((topic) => {
//   return topic.slug;
// });

const Home = () => {
  // const [topicSlugs, setTopicSlugs] = useState([]);

  // useEffect(() => {
  //   setTopicSlugs(topicSlugArray);
  // }, []);

  return (
    <div>
      <section className="Welcome">
        <h1>Welcome to Northcoders News!</h1>
        <p>Insert some text here about what this site is about.</p>
        <h2>What's on the menu?</h2>
        <p>
          To find all our articles scroll up to to see a list of the main places
          to go or to submit an article yourself!
        </p>
        <p>
          Or if you have a specific author or title in mind you can use the
          search to take you there.
        </p>
        <p>
          Or if you want to see all the articles on a specific topic you can
          click on the topic button below.
        </p>
        <p>
          If you get stuck, don't worry, you can <i>always</i> click on the logo
          to take you back to the home page.
        </p>

        <p>We hope you enjoy our site!</p>
      </section>

      <section className="topics">
        <p>
          Click on a topic to check out articles for our most popular topics!
        </p>
        {/* <ul>
          {topicSlugs.map((topic) => {
            return ( */}
        /* should have a link that passes the topic slug as a parameter to the
        ArticlesByTopic component which will then fetch the articles for that
        topic and display them in a list */
        {/* <li key={topic}>
                <Link to={`/articles/topic=${topic}`}>{topic}</Link>
              </li>
            );
          })}
        </ul> */}
      </section>
    </div>
  );
};

export default Home;
