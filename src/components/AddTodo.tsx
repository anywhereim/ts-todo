import { MdAddCircleOutline } from "react-icons/md";

export default function AddTodo() {
  return (
    <article className="w-1/4 mt-6">
      <form className="flex flex-col mt-10 ml-6">
        <label htmlFor="date" className="text-yellowfont font-bold">
          날짜
        </label>
        <input
          type="date"
          name="date"
          id="date"
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
          name="todo"
          id="todo"
          required
          className="bg-darkyellow mt-2 h-10 text-center"
        />
        <button
          type="button"
          className="text-sm mt-3 flex flex-row justify-center relative "
        >
          리스트 추가
          <MdAddCircleOutline className="absolute right-40 top-1 bottom-0 " />
        </button>
        <button className="bg-darkyellow mt-2 h-10">생성</button>
      </form>
    </article>
  );
}
