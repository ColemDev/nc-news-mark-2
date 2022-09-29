// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ArticlesList from "./components/ArticlesList";
import { useParams } from "react-router-dom";
// import ArticlesByTopic from "./components/ArticlesByTopic";
// import Article
import Home from "./components/Home";
// import Nav from "./components/Nav";
// import Search from "./components/Search";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* <Nav /> */}
        {/* <Search /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticlesList />} />
          {/* <Route path="/articles/:topic" element={<ArticlesByTopic />} /> */}
          {/* <Route path="/articles/:article_id" element={<Article />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
