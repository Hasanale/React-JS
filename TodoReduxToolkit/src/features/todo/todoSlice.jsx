import { createSlice, nanoid } from "@reduxjs/toolkit";

const local = () => {
  try {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos);
      if (Array.isArray(parsedTodos)) {
        return parsedTodos;
      }
    }
  } catch (e) {
    console.error("Failed to load todos from localStorage:", e);
  }
  return [];
};
const initialState = {
  todos: local(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    completeTodo: (state, action) => {
      const { id, completed } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !completed;
      }
    },
  },
});

export const { addTodo, removeTodo, editTodo, completeTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
