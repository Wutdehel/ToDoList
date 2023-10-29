import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setFilter } from "../redux/reducer/ToDoReducer"

export default function FilterToDoList() {
    const filter = useSelector(state => state.data.filter);
    const dispatch = useDispatch();

    useState (()=>{
        console.log(filter)
    }, [])

    return (
        <div className="row-sm-12 mb-3 d-flex justify-content-center my-3 ">
            <div className="col-md-1 mx-3">
                <button className={`btn btn-block btn-disabled ${filter === 'all' ? 'btn-disabled' : 'btn-warning'}`} onClick={()=>dispatch(setFilter('all'))}>All</button>
            </div>
            <div className="col-md-1 mx-3">
                <button className={`btn btn-block ${filter === 'done' ? 'btn-disabled' : 'btn-warning'}`} onClick={()=>dispatch(setFilter('done'))}>Done</button>
            </div>
            <div className="col-md-1 mx-3">
                <button className={`btn btn-block ${filter === 'undone' ? 'btn-disabled' : 'btn-warning'}`} onClick={()=>dispatch(setFilter('undone'))}>Undone</button>
            </div>
        </div>
    )
}