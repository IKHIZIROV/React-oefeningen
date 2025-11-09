import {useState} from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export interface TodoItem {
  name: string;
  completed: boolean;
}

const App = () => {

  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = (todo: string) => {
    setTodos([...todos, { name: todo, completed: false }]);
  };

  const markCompleted = (index: number, completed: boolean) => {
    setTodos(todos.map((todo, i) => i === index ? {...todo, completed: completed} : todo));
  };

  return (
    <>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} markCompleted={markCompleted}  />
    </>
  );

}

export default App;