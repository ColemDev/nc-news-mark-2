import axios from "axios";

const baseURL = "https://colemdev-nc-news-site.herokuapp.com/api";

export const fetchArticles = async () => {
  const { data } = await axios.get(`${baseURL}/articles`);
  return data.articles;
};

export const fetchArticleById = async (article_id) => {
  const { data } = await axios.get(`${baseURL}/articles/${article_id}`);
  return data.article;
};

export const fetchCommentsByArticleId = async (article_id) => {
  const { data } = await axios.get(
    `${baseURL}/articles/${article_id}/comments`
  );
  return data.comments;
};

export const fetchTopics = async () => {
  const { data } = await axios.get(`${baseURL}/topics`);
  return data.topics;
};
//my versioni
export const fetchArticlesByTopic = async (topic) => {
  const { data } = await axios.get(`${baseURL}/articles?topic=${topic}`);
  return data.articles;
};
