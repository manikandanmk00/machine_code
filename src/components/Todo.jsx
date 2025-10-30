import { useState } from "react";
import "./Todo.css";

const TodoList = () => {
  const [input, SetInput] = useState("");
  const [todoList, SetTodoList] = useState([]);

  const addTodoItem = () => {
    const item = {
      id: todoList.length + 1,
      text: input,
      completed: false,
    };

    SetTodoList((prev) => [...prev, item]);
    SetInput("");
  };

  const toggleCompleted = (id) => {
    SetTodoList(
      todoList.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            completed: !t.completed,
          };
        } else {
          return t;
        }
      })
    );
  };

  const deleteTodo = (id) => {
    SetTodoList(todoList.filter((t) => t.id !== id));
  };

  return (
    <div className="todo-container">
    <h1>ToDoList</h1>
      <input
        type="text"
        placeholder="Enter todo.."
        value={input}
        onChange={(e) => SetInput(e.target.value)}
      />
      <button onClick={() => addTodoItem()}>Add</button>
      <div className="todo-list-view">
        <ul>
          {todoList.map((t) => (
            <li key={t.id}>
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggleCompleted(t.id)}
              />
              <span className={t.completed ? "strike-through" : ""}>
                {t.text}
              </span>
              <button onClick={() => deleteTodo(t.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
