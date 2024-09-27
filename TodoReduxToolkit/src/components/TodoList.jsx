import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { SiTicktick } from "react-icons/si";
import { MdEdit } from "react-icons/md";
import { removeTodo, editTodo, completeTodo } from "../features/todo/todoSlice";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);
  const [newText, setNewText] = useState("");
  const HandleEditClick = (todo) => {
    setIsEditable(todo.id);
    setNewText(todo.text);
  };
  const HandleUpdateClick = (id) => {
    dispatch(editTodo({ id, text: newText }));
    setIsEditable(null);
    setNewText("");
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <ul className="bg-blue-700 rounded-md mt-10 min-h-[250px]  m-auto p-4">
      {todos.map((todo) => {
        return (
          <li
            className="text-xl items-center justify-between flex font-mono border-b-2 p-3 border-white text-white text-start"
            key={todo.id}
          >
            <div>
              <input
                disabled={isEditable}
                type="checkbox"
                className="mr-2 rounded-full"
                checked={todo.completed}
                onChange={() => {
                  dispatch(
                    completeTodo({ id: todo.id, completed: todo.completed })
                  );
                }}
              />
              {isEditable === todo.id ? (
                <input
                  className="focus:outline-none rounded-md p-1 bg-white text-gray-400"
                  type="text"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                />
              ) : (
                <div
                  className={`${
                    todo.completed ? "line-through" : ""
                  } inline-block`}
                >
                  {todo.text}
                </div>
              )}
            </div>
            <div className="space-x-4">
              {isEditable === todo.id ? (
                <button
                  className="bg-green-600 text-white rounded-full p-2"
                  onClick={() => {
                    HandleUpdateClick(todo.id);
                  }}
                >
                  <SiTicktick />
                </button>
              ) : (
                <button
                  className={`${
                    todo.completed
                      ? " bg-gray-400 text-white"
                      : "bg-white text-blue-700"
                  }   rounded-full p-2`}
                  onClick={() => {
                    HandleEditClick(todo);
                  }}
                  disabled={todo.completed}
                >
                  <MdEdit />
                </button>
              )}

              <button
                className="bg-red-600 text-white rounded-full p-2"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                <AiOutlineDelete />
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
