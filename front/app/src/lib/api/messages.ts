import { Message } from "../../interfaces";
import client from "./client";

export const createMessage = (data: Message) => {
  return client.post("message", data);
};
