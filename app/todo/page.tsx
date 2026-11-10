import { getTasks, addTask, removeTask } from "@/lib/task";

export default async function Page() {
  const tasks = await getTasks();
  return (
    <section>
      <h1 className="text-2xl text-green-500">Mes taches</h1>
      <ul className="list-disc list-inside">
        {tasks.map((task, id) => (
          <li key={id}>
            {task.title}
            <form
              action={removeTask.bind(null, task.id)}
              className="inline ml-2"
            >
              <button className="text-red-500">Supprimer</button>
            </form>
          </li>
        ))}
      </ul>
      <form action={addTask}>
        Tache: <input name="title" />
        <button> Ajoutez </button>
      </form>
    </section>
  );
}
