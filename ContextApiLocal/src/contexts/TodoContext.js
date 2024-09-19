import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (id, todo) => {},
  toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider();

export default function useTodo() {
  return useContext(TodoContext);
}
