import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <>
      <div className="w-full max-w-[700px] rounded-md mx-auto p-5 bg-white/30 ">
        <AddTodo />
        <TodoList />
      </div>
    </>
  );
}

export default App;
