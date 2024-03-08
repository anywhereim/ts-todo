import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Todo } from "@/types/todo-types";
import {
  createTodo,
  deleteTodo,
  readTodos,
  updateTodo,
} from "@/api/axiosInstance";

export function useReadTodos() {
  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: readTodos,
  });
}

export function useCreateTodo() {
  const queryClient = useQueryClient();

  const { mutate: createTodoMutate } = useMutation<Todo, Error, Todo>({
    mutationFn: (newTodo) => createTodo(newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  return { createTodoMutate };
}

export function useDeleteTodo() {
  const queryClient = useQueryClient();

  const { mutate: deleteTodoMutate } = useMutation<void, Error, string>({
    mutationFn: (id: string) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return deleteTodoMutate;
}

export function useUpdateTodo() {
  const queryClient = useQueryClient();
  const { mutate: updateTodoMutate } = useMutation<
    Todo,
    Error,
    { id: string; newTodo: Todo }
  >({
    mutationFn: ({ id, newTodo }) => updateTodo(id, newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  return updateTodoMutate;
}
