import { ITodo } from "../utils/interfaces";
import service from "../utils/services";

export const createPostRequest = async (postData: ITodo) => {
  await service.post("/post", { ...postData, createdAt: new Date().getTime() });
  return postData;
};

export const updatePostRequest = async (updatedPostData: ITodo) => {
  await service.put(`/post/${updatedPostData._id}`, updatedPostData);
  return updatedPostData;
};

export const deletePostRequest = async (postData: ITodo) => {
  await service.delete(`/post/${postData._id}`);
  return postData;
};

export const postListRequest = async () => {
  const { data } = await service.get("/posts");
  return { postList: data.posts };
};
