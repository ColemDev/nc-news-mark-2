import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ArticlesList from "./components/ArticlesList";
import ArticlesByTopic from "./components/ArticlesByTopic";
import ArticlesById from "./components/ArticlesById";
import Home from "./components/Home";
import CommentsByArticleId from "./components/CommentsByArticleId";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticlesList />} />
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
