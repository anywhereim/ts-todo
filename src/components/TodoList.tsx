import { useReadTodos } from "@/hooks/useTodo";
import TodoItem from "./TodoItem"; // TodoItem 컴포넌트를 임포트
import { DoneTodos, WorkingTodos } from "@/types/todo-types";

export default function TodoList() {
  const { data: todos, isError, isLoading } = useReadTodos();

  if (isLoading) return <div>Loading..</div>;
  if (isError) return <div>Error fetching todos.</div>;

  const workingTodos = todos?.filter((todo) => !todo.state) as WorkingTodos[];
  const doneTodos = todos?.filter((todo) => todo.state) as DoneTodos[];

  return (
    <div className="flex flex-row justify-around w-full">
      <article className="mt-10">
        <h2>Working</h2>
        <div className="">
          {workingTodos?.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      </article>
      <article className="mt-10">
        <h2>Done</h2>
        <div>
          {doneTodos?.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      </article>
    </div>
  );
}
