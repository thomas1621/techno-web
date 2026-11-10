"use server";

import { redirect } from "next/navigation";

const posts: { title: string; content: string }[] = [];

export async function getPosts() {
  return posts;
}

export async function getPost(id: number) {
  return posts[id];
}

export async function createPost(form: FormData) {
  posts.push({
    title: String(form.get("title")),
    content: String(form.get("content")),
  });
  redirect("/blog");
}

export async function editPost(form: FormData) {
  const id = Number(form.get("id"));
  posts[id] = {
    title: String(form.get("title")),
    content: String(form.get("content")),
  };
  redirect(`/blog/${id}`);
}

export async function deletePost(id: number) {
  posts.splice(id, 1);
  redirect("/blog");
}
