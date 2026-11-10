import { createPost } from "@/lib/blog";

export default function NewPostPage() {
  return (
    <section>
      <h1 className="text-2xl">Nouvel article</h1>
      <form action={createPost}>
        Titre : <input name="title" />
        Contenu : <input name="content" />
        <button>Publier</button>
      </form>
    </section>
  );
}
