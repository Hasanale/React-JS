import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { SiTicktick } from "react-icons/si";
import { MdEdit } from "react-icons/md";
import { removeTodo, editTodo } from "../features/todo/todoSlice";

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
  return (
    <ul className="bg-blue-300 rounded-md mt-10 h-[370px] w-[450px] m-auto p-4">
      {todos.map((todo) => {
        return (
          <li
            className="text-xl items-center justify-between flex font-mono border-b-2 p-3 border-black text-start"
            key={todo.id}
          >
            <div>
              <input type="checkbox" className="mr-2 rounded-full" />
              {isEditable === todo.id ? (
                <input
                  className="focus: border-2 border-black rounded-md p-1 bg-[#1f2937] text-gray-400"
                  type="text"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                />
              ) : (
                todo.text
              )}
            </div>
            <div className="space-x-4">
              {isEditable === todo.id ? (
                <button
                  className="bg-[#4f46e5] text-white rounded-full p-2"
                  onClick={() => {
                    HandleUpdateClick(todo.id);
                  }}
                >
                  <SiTicktick />
                </button>
              ) : (
                <button
                  className="bg-[#4f46e5] text-white rounded-full p-2"
                  onClick={() => {
                    HandleEditClick(todo);
                  }}
                >
                  <MdEdit />
                </button>
              )}

              <button
                className="bg-[#4f46e5] text-white rounded-full p-2"
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
