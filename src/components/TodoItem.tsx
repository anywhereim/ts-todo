import { useDeleteTodo, useUpdateTodo } from "@/hooks/useTodo";
import { Todo } from "@/types/todo-types";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const deleteTodoMutate = useDeleteTodo();
  const updateTodoMutate = useUpdateTodo();

  return (
    <div>
      <li className="flex flex-col border rounded-lg bg-darkyellow w-80 h-40 mt-3">
        <div className="ml-4">
          <h1 className="text-xl font-semibold mt-3">{todo.title}</h1>
          <p className="mt-4">{todo.content}</p>
          <time className=" text-sm text-gray-400 mt-3">{todo.deadline}</time>
        </div>
        <div className="flex flex-row justify-around mt-5">
          <button
            className=" hover:text-slate-600"
            onClick={() =>
              updateTodoMutate({
                id: todo.id!,
                newTodo: {
                  deadline: todo.deadline,
                  title: todo.title,
                  content: todo.content,
                  state: !todo.state,
                },
              })
            }
          >
            {todo.state ? "취소" : "⭐완료⭐"}
          </button>
          <button
            onClick={() => deleteTodoMutate(todo.id!)}
            className=" hover:text-slate-600"
          >
            삭제
          </button>
        </div>
      </li>
    </div>
  );
}

//최초 렌더링시에는 값이 비어있기 때문에 todos&&todos.map 에서 todos&&로 써주어야 한다.
