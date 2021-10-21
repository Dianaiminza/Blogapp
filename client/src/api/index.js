import Axios from 'axios';

const API_ENDPOINT = '/api/posts';

export const fetchPosts = async () => {
  return await Axios.get("/api/posts");
};

export const fetchSinglePost = async id => {
  return await Axios.get(`/api/posts/${id}`);
};

export const createPost = async post => {
  return await Axios.post("/api/posts", post);
};

export const updatePost = async (id, updatedPost) => {
  return await Axios.patch(`/api/posts/${id}`, updatedPost);
};

export const deletePost = async id => {
  return await Axios.delete(`/api/posts/${id}`);
};