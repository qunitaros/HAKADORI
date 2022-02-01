import client from "./client";
import { CreatePostFormData } from "../../interfaces";

export const getPosts = () => {
  return client.get(`posts`);
};

export const createPost = (data: CreatePostFormData) => {
  return client.post("posts", data);
};

export const deletePost = (id: number | undefined) => {
  return client.delete(`posts/${id}`);
};
