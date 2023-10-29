import "font-awesome/css/font-awesome.min.css";
import ToDoListHeader from "./component/ToDoListHeader";
import ToDoListInput from "./component/ToDoListInput";
import FilterToDoList from "./component/FilterToDoList";
import CardToDoList from "./component/CardToDoList";
import { getTodos } from "../services/Todo";
import { useEffect, useState } from "react";

export default function ToDoList () {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        const todosResponse = await getTodos();
        setTodos(todosResponse);
    };

    useEffect(() => {
        fetchTodos();
      }, []);
    return (
            <div className="container-fluid">
                <ToDoListHeader/>
                <ToDoListInput fetchTodos={fetchTodos} />
                <FilterToDoList/>
                <CardToDoList 
                    todos={todos}
                    fetchTodos={fetchTodos}
                />
            </div>
    )
}