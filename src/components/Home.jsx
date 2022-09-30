import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
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
