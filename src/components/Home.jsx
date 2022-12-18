import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <section className="Welcome">
        <h1>Welcome to Northcoders News!</h1>
        <p>
          Northcoders News is a social news aggregation, web content rating, and
          discussion website. It is a place where users can post links to news
          articles, blog posts, images, videos, and other content. Users can
          comment on these posts, and vote on them. The posts are organized by
          topic, and users can filter the posts by topic.
        </p>
        <p>We hope you enjoy our site!</p>
        <p>
          <h2>Navigation instructions</h2>
        </p>
        <p>
          If you get stuck, don't worry, you can <i>always</i> click on the
          Nortcoder News link at the top of the page to take you back to the
          this page and start over.
        </p>
        <p>
          To find all our articles <Link to="/articles">click this link</Link>{" "}
          to to see a list of all our topics.
        </p>
        <p>
          If you want to see all the articles on a specific topic you can click
          on the topic buttons below.
        </p>
      </section>
      <section className="topics">
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to="/articles/topic/coding">Coding</Link>
          </li>
          <li>
            <Link to="/articles/topic/cooking">Cooking</Link>
          </li>
          <li>
            <Link to="/articles/topic/football">Football</Link>
          </li>
          <li>
            <Link to="/articles/topic/cats">Cats</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
