import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import Header from "@/layout/Header";

export default function Home() {
  return (
    <div className=" h-screen">
      <Header />
      <div className="flex flex-low">
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}
