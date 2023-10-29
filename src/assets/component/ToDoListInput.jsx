import { useEffect, useState } from "react"
import { postCreateTodo } from "../../services/Todo";


export default function ToDoListInput({ fetchTodos }) {
    const [todo,setTodo] = useState("")

    const handlerSubmit = async (e) => {
        e.preventDefault();
        const validateWhiteSpace = todo.trim()
        if (!todo) return;
        if (!validateWhiteSpace) {
            setTodo("")
            return
        };

        const data = {
            todo: todo,
            checked: false,
            createAt: Date.now()
        } 

        const resCreateProduct = await postCreateTodo(data);
        if (resCreateProduct) {
            fetchTodos()
            console.log("dapat")
        }
        
        setTodo("")
    }
    return (
        <div className="row">
            <form className="d-flex justify-content-center" onSubmit={ handlerSubmit }>
                <div className="form-group col-md-4 mb-3 d-flex align-items-center">
                    <input type="text" className="form-control mx-3" id="todo" placeholder="Input Your To Do List" value={ todo } onChange={ (e) => setTodo(e.target.value)}/>
                    <button type="submit" className="btn btn-primary">Send</button>
                </div>
            </form>
        </div>
    )
}