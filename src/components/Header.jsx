import { Link } from "react-router-dom";
//Nav is a hamburger menu that appears on mobile devices
const Header = () => {
  return (
    <header>
      <h1 className="logo">
        <Link to="/">Northcoders News</Link>
      </h1>
      {/* <Nav /> */}
    </header>
  );
};
export default Header;
