import React, { useState } from "react";

export default function Form({ setTodos }) {
  const [todoText, setTodoText] = useState("");

  return (
    <form
      className="rounded-lg overflow-hidden w-full max-w-2xl flex"
      onSubmit={(e) => {
        e.preventDefault();
        setTodos((prev) => [...prev, todoText]);
      }}
    >
      <input
        className="p-4 w-full text-slate-900"
        placeholder="Create a New Todo..."
        type="text"
        id="todoInput"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button type="submit" className="p-4 bg-teal-500">
        Add
      </button>
    </form>
  );
}
