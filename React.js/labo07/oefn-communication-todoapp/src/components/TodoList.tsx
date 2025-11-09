import type { TodoItem } from "../App";

interface TodoListProps {
    todos: TodoItem[];
    markCompleted: (index: number, completed: boolean) => void
}

const TodoList = ({todos, markCompleted} : TodoListProps) => {

    return(
        <>
            {todos.map((todo, index) => (
                <div key={index}>
                    <input type="checkbox" checked={todo.completed} onChange={(event) => markCompleted(index, event.target.checked)}/>
                    <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.name}</span>
                </div>
            ))}
        </>
    )
};

export default TodoList;