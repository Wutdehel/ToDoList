import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../redux/reducer/ToDoReducer";

export default function ToDoListInput() {
    const [todo,setTodo] = useState("")
    const dispatch = useDispatch()
    const testing = useSelector(state => state.data.data)

    // useEffect(()=>{
    //     console.log(testing)
    // }, [testing])
    const handlerSubmit = (e) => {
        e.preventDefault();
        const id = Date.now();
        if (!todo) return;

        dispatch(addData({ id, todo, confirmed: false }));

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