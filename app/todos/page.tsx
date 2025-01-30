type Todo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export default async function Todos() {
  const response = await fetch("http://localhost:8000/todos");

  const todos: Todo[] = await response.json();

  console.log(todos);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
