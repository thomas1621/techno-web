import { getPosts, deletePost } from "@/lib/blog";

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <section>
      <h1 className="text-2xl">Mon blog</h1>
      <a href="/blog/new">Nouvel article</a>
      <ul className="list-disc list-inside">
        {posts.map((post, id) => (
          <li key={id}>
            <a href={`/blog/${id}`}>{post.title}</a>
            <a href={`/blog/edit/${id}`} className="ml-2">
              Modifier
            </a>
            <form action={deletePost.bind(null, id)} className="inline ml-2">
              <button className="text-red-500">Supprimer</button>
            </form>
          </li>
        ))}
      </ul>
    </section>
  );
}
