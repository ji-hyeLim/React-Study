import React, { useState } from "react";
import "./App.css";
import TodoBoard from "./components/TodoBoard";

export default function App() {
  const [inputValue, setInputvalue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    setTodoList([...todoList, inputValue]);
  };
  return (
    <main>
      <input
        value={inputValue}
        type="text"
        onChange={(e) => setInputvalue(e.target.value)}
      ></input>
      <button type="button" onClick={addItem}>
        추가
      </button>

      <TodoBoard todoList={todoList}></TodoBoard>
    </main>
  );
}
