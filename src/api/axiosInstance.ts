import axios, { AxiosResponse } from "axios";
import requests from "./request";

interface Todo {
  id?: string;
  deadline: string;
  title: string;
  content: string;
  state: boolean;
}
//  id?: string;
// id 는 서버에서 생성해서 보내주어야 함으로 todo가 생성되었을 때가 아닌

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
});

//todos 읽어오기
export async function readTodos(): Promise<Todo[]> {
  const response: AxiosResponse<Todo[]> = await axiosInstance.get(
    requests.fetchTodo
  );
  return response.data;
}

//AxiosResponse<Todo[]>
//응답데이터가 Todo[] 객체의 배열을 담고 있음을 알려준다.

//todo 보내기
export async function createTodo(newTodo: Todo): Promise<Todo> {
  const response: AxiosResponse<Todo> = await axiosInstance.post<Todo>(
    requests.fetchTodo,
    newTodo
  );
  return response.data;
}

//AxiosResponse<Todo>
//응답데이터 자체가 Todo 타입의 객체임을 나타낸다.

export async function deleteTodo(id: string): Promise<void> {
  await axiosInstance.delete(`${requests.fetchTodo}/${id}`);
}

//(id: string): Promise<void>
// 인터페이스에 아이디는 string으로 설정해 주었으므로 타입을 string 으로 명시해주고
// 삭제된 Todo데이터는 필요하지 않으므로 반환 타입을 void로 설정해 주면 된다.

export async function updateTodo(id: string, newTodo: Todo): Promise<Todo> {
  const response: AxiosResponse<Todo> = await axiosInstance.patch<Todo>(
    `${requests.fetchTodo}/${id}`,
    newTodo
  );
  return response.data;
}
