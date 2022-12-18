import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlesById from "./components/ArticlesById";
import ArticlesByTopic from "./components/ArticlesByTopic";
import ArticlesList from "./components/ArticlesList";
import TopicsList from "./components/TopicsList";
import CommentsByArticleId from "./components/CommentsByArticleId";
import Home from "./components/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/topics" element={<TopicsList />} />
          <Route path="/articles/topic/:topic" element={<ArticlesByTopic />} />
          <Route path="/articles/:article_id" element={<ArticlesById />} />
          <Route
            path="/articles/:article_id/comments"
            element={<CommentsByArticleId />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
