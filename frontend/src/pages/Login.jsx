import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "../components/Button";
import Input from "../components/Input";
import "./Login.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Api from "../components/config/Api";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const Navigate = useNavigate();
  const onSubmit = (e) => {
    Api.post("login", {
      email: e.email,
      password: e.password,
    }).then((e) => {
      localStorage.setItem("token", e.data.token);
      console.log(e.data);
      Navigate("/todolist");
    });
  };
  return (
    <div className="Login">
      <h1> LOGIN </h1>
      <Link className="link" to="/Signup">
        <h2 className="sign">Sign up?</h2>
      </Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          place="Email"
          register={register("email", {
            required: true,
          })}
        />
        {errors.email && errors.email.type === "required" && (
          <p>Ga Bole Kosong</p>
        )}

        <Input
          type="password"
          place="Password"
          register={register("password", {
            required: true,
          })}
        />
        {errors.password && errors.password.type === "required" && (
          <p>Ga Bole Kosong</p>
        )}
        <Button />
      </form>
    </div>
  );
};

export default Login;
