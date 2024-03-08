import { useCreateTodo } from "@/hooks/useTodo";
import React from "react";

export default function AddTodo() {
  const { createTodoMutate } = useCreateTodo();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const deadline = formData.get("deadline") as string;
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    const newTodo = {
      deadline,
      title,
      content,
      state: false,
    };

    createTodoMutate(newTodo, {
      onSuccess: () => {
        (e.target as HTMLFormElement).reset();
      },
      onError: (error) => {
        console.log("fail to createTodoMutate", error);
      },
    });
  };

  //(e.target as HTMLFormElement).reset();
  //reset는 매서드이나 내장 매서드로 타입을 함께 선언해 주어야 한다. 내가 한 방법은 단언

  return (
    <article
      className="flex w-1/3 h-full items-center justify-center border-r m-0 border-yellowfont"
      style={{ height: `calc(100vh - var(--header-height))` }}
    >
      <form
        className="flex flex-col h-full m-0 w-80 justify-center"
        onSubmit={handleSubmit}
      >
        <label htmlFor="date" className="text-yellowfont font-bold ">
          마감 일자
        </label>
        <input
          type="date"
          name="deadline"
          id="deadline"
          required
          className="bg-darkyellow mt-2 h-10 text-center"
        />
        <label htmlFor="title" className="text-yellowfont font-bold mt-5">
          제목
        </label>
        <input
          type="text"
          name="title"
          id="title"
          required
          className="bg-darkyellow mt-2 h-10 text-center"
        />
        <label htmlFor="todo" className="text-yellowfont font-bold mt-5">
          할일
        </label>
        <input
          type="text"
          name="content"
          id="content"
          required
          className="bg-darkyellow mt-2 h-10 text-center"
        />
        <button className="bg-darkyellow mt-20 h-10 font-bold text-3xl">
          추가
        </button>
      </form>
    </article>
  );
}
