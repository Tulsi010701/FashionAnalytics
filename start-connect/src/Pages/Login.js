import React, { useState } from "react";
import Input from "../Component/Input";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Component/Button";
import axios from "axios";
const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    axios
      .post("http://localhost:5000/user", values)
      .then((res) => {
        if (res.data.user) {
          navigate("/");
        } else {
          alert("No record");
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="login-form">
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group mt-3">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleInput}
            />
          </div>
          <div className="input-group mt-3">
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleInput}
            />
          </div>
        </form>
        <div className="mt-3 form-btn">
          <Button name="Login" type="submit" />
        </div>
        <div className="mt-3">
          <Link
            to="/Register"
            className="btn btn-default w-100 bg-light rounded-0"
          >
            Create Account
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
