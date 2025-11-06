import { useState } from "react";

interface InputProps {
    addTodo: (toAddTodo : string) => void
}

const TodoInput = ({addTodo} : InputProps) => {

    const [todo, setTodo] = useState("");

    const addButtonClicked = () => {
        setTodo("");
        addTodo(todo)
    }

    return(
        <>
            <div>
                <input id="todo" type="text" value={todo} onChange={(event) => setTodo(event.target.value)}/>
                <button onClick={addButtonClicked}>Add</button>
            </div>
        </>
    )
};

export default TodoInput;