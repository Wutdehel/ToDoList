import "font-awesome/css/font-awesome.min.css";
import ToDoListHeader from "./component/ToDoListHeader";
import ToDoListInput from "./component/ToDoListInput";
import FilterToDoList from "./component/FilterToDoList";
import CardToDoList from "./component/CardToDoList";

export default function ToDoList () {
    return (
            <div className="container-fluid">
                <ToDoListHeader/>
                <ToDoListInput/>
                <FilterToDoList/>
                <CardToDoList/>
            </div>
    )
}