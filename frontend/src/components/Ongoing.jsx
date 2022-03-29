import React, { useState } from "react";
import "./Ongoing.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import axios from "axios";

const Ongoing = (props) => {
  const deleteHandler = () => {
    axios.delete(`http://localhost:1008/delete/${props.id}`).then(() => {
      console.log("berhasil");
      window.location.reload();
    });
  };
  const [edit, setEdit] = useState(false);
  const [checked, setChecked] = useState(props.isPriority);
  console.log(checked)
  const chackedHandler = () => {
    if (checked == false) {
      setChecked(true);
      axios.put(`http://localhost:1008/update/${props.id}`, {
        isPriority: true,
      }).then(()=>{
        window.location.reload()
      })
    } else {
      setChecked(false);
    }
  };

  const [cancel, setCancel] = useState(false);
  const [note, setNote] = useState(props.todo);
  const saveHandler = () => {
    axios
      .put(`http://localhost:1008/update/${props.id}`, {
        note: note,
      })
      .then(() => {
        console.log("berhasil");
        window.location.reload();
      });
    setCancel(false);
    setEdit(false);
  };

  const editHandler = () => {
    setCancel(true);
    setEdit(true);
  };

  const cancelHandler = () => {
    setCancel(false);
    setEdit(false);
  };

  return (
    <div className={props.coret||"Ongoing"}>
      <div className="left">
        <div className="check-list">
          <input type="checkbox" checked={props.checkedComplite|| checked} onClick={chackedHandler} />
          <span className="checkmark"></span>
        </div>
        {!edit ? (
          <p>{props.todo}</p>
        ) : (
          <input
            type="text"
            onChange={(e) => setNote(e.target.value)}
            value={note}
          />
        )}
      </div>
      <div className="right">
        {!cancel ? (
          <div className="fungsi">
            <AiFillDelete className="icons delete" onClick={deleteHandler} />
            <AiFillEdit className="icons edit" onClick={editHandler} />
          </div>
        ) : (
          <div className="option">
            <p onClick={cancelHandler}>cancel</p>
            <p onClick={saveHandler}>save</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ongoing;
