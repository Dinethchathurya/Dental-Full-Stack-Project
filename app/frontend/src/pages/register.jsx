import React from "react";
import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet-async';
import axios from 'axios';

const Register = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:9000/api/register', data);
      alert(response.data.message);
    } catch (error) {
        console.log(error);
      alert('Error registering user something went wrong ');
    }
  };

  return (
    <>
      <Helmet>
        <title>Registration</title>
        <meta name="description" content="This is the Log In " />
      </Helmet>
    
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <form
          className="shadow p-5 rounded bg-custom-blue"
          style={{ maxWidth: "400px", width: "100%" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="text-center mb-4">Registration</h3>

          {/* Username Field */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              User Name
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Enter your user name"
              {...register("username", { required: "User name is required" })}
            />
            {errors.username && (
              <p className="text-danger">{errors.username.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </>
  );
};
export default Register;
