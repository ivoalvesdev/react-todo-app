import React from "react";
import Todo from "./Todo";

export default function Todos({ todos }) {
  return (
    <div className="grid grid-cols-fluid gap-4">
      {todos.map((todo, i) => (
        <Todo key={i} text={todo} />
      ))}
    </div>
  );
}
