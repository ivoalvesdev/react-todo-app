import React, { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";
import Todos from "./Todos";

export default function App() {
  const [todos, setTodos] = useState([]);

  return (
    <main className="bg-slate-900 text-slate-50 min-h-screen">
      <div className="container mx-auto p-16">
        <h1 className="text-4xl font-bold">TODO</h1>
        <br />
        <Form setTodos={setTodos} />
        <br />
        <Todos todos={todos} />
      </div>
    </main>
  );
}
