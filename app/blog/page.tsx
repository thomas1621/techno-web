import { getPosts, deletePost } from "@/lib/blog";

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <section>
      <h1 className="text-2xl">Mon blog</h1>
      <a href="/blog/new">Nouvel article</a>
      <ul className="list-disc list-inside">
        {posts.map((post) => (
          <li key={post.id}>
            {" "}
            // ← post.id
            <a href={`/blog/${post.id}`}>{post.title}</a> // ← post.id
            <a href={`/blog/edit/${post.id}`} className="ml-2">
              {" "}
              // ← post.id Modifier
            </a>
            <form
              action={deletePost.bind(null, post.id)}
              className="inline ml-2"
            >
              <button className="text-red-500">Supprimer</button>
            </form>
          </li>
        ))}
      </ul>
    </section>
  );
}
