import "font-awesome/css/font-awesome.min.css";
import { useSelector,useDispatch } from "react-redux";
import { toggleConfirmed, removeData } from "../redux/reducer/ToDoReducer";
import { useEffect, useState } from "react";

export default function CardToDoList() {
  const data = useSelector((state) => state.data.data);
  const dispatch = useDispatch();
  const filters = useSelector(state => state.data.filter);
  let filtered = data;
  let alert;
  const handleCheckboxChange = (id) => {
    dispatch(toggleConfirmed( id ));
  };

  const handleDelete = (id) => {
    dispatch(removeData(id))
  }

  if (filters === 'done') {
    // Hanya tampilkan data yang 'confirmed' bernilai true
    filtered = data.filter(item => item.confirmed);
    alert = "Dang, Nothing Done, Keep it up"
  } else if (filters === 'undone') {
    // Hanya tampilkan data yang 'confirmed' bernilai false
    filtered = data.filter(item => !item.confirmed);
    alert = "Everything that you list has been done, Well done :)"
  }


  return (
    <div className="row d-flex flex-column justify-content-center align-items-center ">
      {
    data.length === 0 ? (
        <p className="col-md-6  mt-5 px-2 d-flex justify-content-center">Sorry, You do not have any input data.</p>
    ) : filtered.length === 0 ? (
        <p className="col-md-6  mt-5 px-2 d-flex justify-content-center">{ alert }</p>
    ) : (
        filtered.map(item => {
            return (
            <div className="col-md-6 card mb-2 px-2 d-flex justify-content-center" key={ item.id }>
                <div className="card-body d-flex justify-content-between">
                <div className="form-check">
                    <input
                    type="checkbox"
                    className="form-check-input"
                    checked={item.confirmed}
                    onChange={()=>handleCheckboxChange(item.id)}
                    />
                    <label className="form-check-label" htmlFor="todoCheck">
                    {item.todo}
                    </label>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-primary mx-2" >
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                    </button>
                    <button type="button" className="btn btn-sm btn-danger" onClick={ () => handleDelete(item.id) }>
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                </div>
                </div>
            </div>
            );
      }))}
    </div>
  );
}
