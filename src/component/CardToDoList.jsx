import "font-awesome/css/font-awesome.min.css";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleConfirmed,
  removeData,
  editData,
} from "../redux/reducer/ToDoReducer";
import { useEffect, useState } from "react";
import EditModal from "./EditModal";


export default function CardToDoList() {
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState({ id: 0, todo: "" });
  const data = useSelector((state) => state.data.data);
  const filters = useSelector((state) => state.data.filter);
  const dispatch = useDispatch();
  let filtered = data;
  let alert;

  const openModal = (data) => {
    setModalData(data);
    setModalShow(true);
  };

  

  if (filters === "done") {
    // Hanya tampilkan data yang 'confirmed' bernilai true
    filtered = data.filter((item) => item.confirmed);
    alert = "Dang, Nothing Done, Keep it up";
  } else if (filters === "undone") {
    // Hanya tampilkan data yang 'confirmed' bernilai false
    filtered = data.filter((item) => !item.confirmed);
    alert = "Everything that you list has been done, Well done :)";
  }

  const handleCheckboxChange = (id) => {
    dispatch(toggleConfirmed(id));
  };

  const handleDelete = (id) => {
    dispatch(removeData(id));
  };

  return (
    <div className="row d-flex flex-column justify-content-center align-items-center ">
      {data.length === 0 ? (
        <p className="col-md-6  mt-5 px-2 d-flex justify-content-center">
          Sorry, You do not have any input data.
        </p>
      ) : filtered.length === 0 ? (
        <p className="col-md-6  mt-5 px-2 d-flex justify-content-center">
          {alert}
        </p>
      ) : (
        filtered.map((item) => {
          return (
            <div
              className="col-md-6 card mb-2 px-2 d-flex justify-content-center"
              key={item.id}
            >
              <div className="card-body d-flex justify-content-between">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={item.confirmed}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                  <span
                    className="form-check-label"
                    htmlFor="todoCheck"
                    style={
                      item.confirmed ? { textDecoration: "line-through" } : {}
                    }
                  >
                    {item.todo}
                  </span>
                </div>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-sm btn-primary mx-2"
                    onClick={() => openModal({ id: item.id, todo: item.todo })}
                  >
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
            
          );
        })
      )}
      <EditModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            data={modalData}
          />
    </div>
  );
}
