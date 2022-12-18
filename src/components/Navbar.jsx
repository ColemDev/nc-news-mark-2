import { Link } from "react-router-dom";
import TopicsList from "./TopicsList";

const Nav = () => {
  return (
    <nav>
      <div className="nav-links">
        <Link to={`/`}>Home</Link> <TopicsList />{" "}
        <Link to={`/articles`}>All Articles</Link>
      </div>
    </nav>
  );
};

export default Nav;
