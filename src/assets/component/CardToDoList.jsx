import "font-awesome/css/font-awesome.min.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import EditModal from "./EditModal";
import { deleteTodo, putChecked } from "../../services/Todo";


export default function CardToDoList({ todos, fetchTodos }) {
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState({ id: 0, todo: "" });
  const filters = useSelector((state) => state.data.filter);
  let filtered = todos;
  let alert;

  useEffect(() => {
      fetchTodos();
  }, []);

  const openModal = (data) => {
    setModalData(data);
    setModalShow(true);
  };
  
  if (filters === "done") {
    filtered = todos.filter((item) => item.checked);
    alert = "Dang, Nothing Done, Keep it up";
  } else if (filters === "undone") {
    filtered = todos.filter((item) => !item.checked);
    alert = "Everything that you list has been done, Well done :)";
  }

  const handleCheckboxChange = (id, checked) => {
    putChecked(id, checked)
        .then(() => {
            fetchTodos();
        })
        .catch((error) => {
            console.error('Gagal memperbarui data:', error);
        });
  };

  const handlerDelete = (id) => {
    deleteTodo(id)
      .then(() => {
        fetchTodos();
      })
      .catch((error) => {
        console.error('Gagal memperbarui menghapus:', error);
      })
  }

  return (
    <div className="row d-flex flex-column justify-content-center align-items-center ">
      {todos.length === 0 ? (
        <p className="col-md-6  mt-5 px-2 d-flex justify-content-center">
          Sorry, You do not have any input data.
        </p>
      ) : filtered.length === 0 ? (
        <p className="col-md-6  mt-5 px-2 d-flex justify-content-center">
          { alert }
        </p>
      ) : (
        todos.map((item) => {
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
                    checked={item.checked}
                    onChange={(e) => handleCheckboxChange(item.id, item.checked)}
                  />
                  <span
                    className="form-check-label"
                    htmlFor="todoCheck"
                    style={
                      item.checked ? { textDecoration: "line-through" } : {}
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
                    onClick={() => handlerDelete(item.id)}
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
            onDataUpdated={ fetchTodos }
          />
    </div>
  );
}
