import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const backendPort = import.meta.env.VITE_BACKEND_PORT;
const dashboardPort = import.meta.env.VITE_DASHBOARD_PORT;
const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
   // NOTE: State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `/api/login`,
        { ...inputValue },
        { withCredentials: true, redirect: "manual" }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = `${dashboardPort}/`;
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Login Account</h2>
            <form onSubmit={handleSubmit}>
              {/* Email input */}
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={handleOnChange}
                  required
                />
                <label htmlFor="email">Email address</label>
              </div>

              {/* Password input with visibility toggle */}
              <label htmlFor="password">Password</label>
              <div className="input-group mb-3">
                <input
                  // NOTE: Input type is dynamically set based on showPassword state
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleOnChange}
                  required
                />
                <button
                  className="btn border"
                  type="button"
                  onClick={togglePasswordVisibility}
                >
                  {/* NOTE: Icon changes based on showPassword state */}
                  <i className={showPassword ? "fa fa-eye" : "fa fa-eye-slash"}></i>
                </button>
              </div>

              {/* Submit button */}
              <button type="submit" className="btn btn-primary w-100 py-2 mt-3">
                Sign in
              </button>

              {/* Link to Signup */}
              <div className="text-center mt-3">
                <p>
                  Not a member? <Link to="/signup">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;