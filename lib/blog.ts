"use server";
import {db} from "@/db";
import {postsTable} from "@/db/schema";
import {eq} from "drizzle-orm";
import {redirect} from "next/navigation";

export async function getPosts() {
  return await db.select().from(postsTable)
}
export async function getPost(id: string) {
  const result = await db
    .select()
    .from(postsTable)
    .where(eq(postsTable.id, id))
  return result[0]
}
export async function createPost(form: FormData) {
  await db
    .insert(postsTable)
    .values({
      title: String(form.get("title")),
      content: String(form.get("content")),
    })
  redirect("/blog");
}
export async function editPost(form: FormData) {
  const id = String(form.get("id"));
  await db
    .update(postsTable)                       
    .set({                                  
      title: String(form.get("title")),
      content: String(form.get("content")),
    })
    .where(eq(postsTable.id, id));           
  redirect(`/blog/${id}`);
}
export async function deletePost(id:string) {
  await db
  .delete(postsTable).where(eq(postsTable.id, id))
  redirect("/blog")
  
}


  
