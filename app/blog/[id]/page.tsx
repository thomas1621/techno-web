import { getPost } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ id: string }>;
};

export default async function BlogPostPage(props: BlogPostPageProps) {
  const id = Number((await props.params).id);
  const post = await getPost(id);

  return (
    <section>
      <h1 className="text-2xl">{post.title}</h1>
      {post.content}
      <br />
      <a href="/blog">Retour</a>
    </section>
  );
}
