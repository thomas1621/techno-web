import { getTasks, createTask, deleteTask } from "@/lib/tasks";

export default async function Page() {
  const tasks = await getTasks();
  return (
    <section>
      <h1 className="text-2xl text-green-500">Mes taches</h1>
      <ul className="list-disc list-inside">
        {tasks.map((task, id) => (
          <li key={id}>
            {task.title}
            <form action={deleteTask.bind(null, id)} className="inline ml-2">
              <button className="text-red-500">Supprimer</button>
            </form>
          </li>
        ))}
      </ul>
      <form action={createTask}>
        Tache: <input name="title" />
        <button> Ajoutez </button>
      </form>
    </section>
  );
}
