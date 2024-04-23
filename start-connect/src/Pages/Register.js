import React, { useState } from "react";
import Input from "../Component/Input";
import Button from "../Component/Button";
import axios from "axios";
import { useNavigate } from "react-router";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // Handle input change
  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/user", values)
      .then((res) => {
        console.log(res);
        navigate("/Login");
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          console.error(
            "Server responded with a non-2xx status:",
            error.response.status
          );
          console.error("Response data:", error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received:", error.request);
        } else {
          // Something happened in setting up the request that triggered an error
          console.error("Error setting up the request:", error.message);
        }
        console.error("Error config:", error.config);
      });
  };

  return (
    <>
      <div className="login-form ">
        <h1>Register Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group mt-3">
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={values.name} // Pass value prop
              onChange={handleInput} // Pass onChange prop
            />
          </div>
          <div className="input-group mt-3">
            <Input
              type="number"
              name="phone"
              placeholder="Phone Number"
              value={values.phone} // Pass value prop
              onChange={handleInput} // Pass onChange prop
            />
          </div>
          <div className="input-group mt-3">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={values.email} // Pass value prop
              onChange={handleInput} // Pass onChange prop
            />
          </div>
          <div className="input-group mt-3">
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={values.password} // Pass value prop
              onChange={handleInput} // Pass onChange prop
            />
          </div>
          <div className="mt-3 form-btn">
            <Button name="Registration" type="submit" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
