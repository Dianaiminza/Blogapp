import axios from 'axios';

const API_ENDPOINT = '/api/posts';

export const fetchPosts = async () => {
  return await axios.get("/api/posts");
};

export const fetchSinglePost = async id => {
  return await axios.get(`/api/posts/${id}`);
};

export const createPost = async post => {
  return await axios.post("/api/posts", post);
};

export const updatePost = async (id, updatedPost) => {
  return await axios.patch(`/api/posts/${id}`, updatedPost);
};

export const deletePost = async id => {
  return await axios.delete(`/api/posts/${id}`);
};