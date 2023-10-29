import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { putTodo } from "../../services/Todo";

function EditModal(props) {

  const { data, onHide, onDataUpdated } = props;

  const [todo, setTodo] = useState("");
  
  const handlerSubmit = (e) => {
    e.preventDefault();

    const validateWhiteSpace = todo.trim()
    if (!todo) return;
    if (!validateWhiteSpace) {
        setTodo("")
        return
    };

    putTodo(data.id, todo)
        .then(() => {
          onHide();
          onDataUpdated();
          setTodo('')
        })
        .catch((error) => {
            console.error('Gagal memperbarui data:', error);
        });
    // dispatch(editData({id: data.id, todo: todo}));
  }



  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={ handlerSubmit }>
          <div className="form-group col-12 flex-column justify-content-center align-items-center ">
            <h4>Your Recent Todo Is {props.data.todo}</h4>
            <input
              type="text"
              className="form-control my-3"
              placeholder = "Edit Your data" 
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="btn btn-primary send">
              Send
            </button>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="btn btn-danger">Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditModal;
