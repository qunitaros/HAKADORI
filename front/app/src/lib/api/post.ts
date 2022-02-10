import client from "./client";
import { CreatePostFormData } from "../../interfaces";
import Cookies from "js-cookie";

export const getPosts = () => {
  return client.get(`posts`, {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};

export const createPost = (data: CreatePostFormData) => {
  return client.post("posts", data);
};

export const deletePost = (id: number | undefined) => {
  return client.delete(`posts/${id}`);
};
