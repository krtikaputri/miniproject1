import React, { useState } from "react";
import Input from "./Input";
import { AiFillPlusSquare, AiFillWindows } from "react-icons/ai";
import "./AddToDo.css";
import { useForm } from "react-hook-form";
import Api from "../components/config/Api";

const AddToDo = (props) => {
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    Api.post(`create`, {
      userId: props.id,
      isPriority: false,
      date: "tanggal",
      day: "Hari",
      note: data.todo,
    }).then(() => {
      window.location.reload();
    });
  
  };

  return (
    <div className="todo ">
      <Input place="Add ToDo" register={register("todo", { required: true })} />
      <AiFillPlusSquare className="icon" onClick={handleSubmit(onSubmit)} />
    </div>
  );
};

export default AddToDo;
