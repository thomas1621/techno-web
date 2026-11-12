import { getPost, editPost } from "@/lib/blog";

type EditPostPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditPostPage(props: EditPostPageProps) {
  const id = (await props.params).id;
  const post = await getPost(id);

  return (
    <section>
      <h1 className="text-2xl">Modifier l'article</h1>
      <form action={editPost}>
        <input type="hidden" name="id" value={id} />
        Titre : <input name="title" defaultValue={post.title} />
        Contenu : <input name="content" defaultValue={post.content} />
        <button>Enregistrer</button>
      </form>
    </section>
  );
}
