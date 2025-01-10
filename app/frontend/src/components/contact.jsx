import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const response = await axios.post("http://localhost:9000/contactus", data);
    if (response.data) {
      reset();
      alert("message saved");
    }
    
  };

  return (
    <>
      <section id="contact" className="py-5">
        <div className="container" style={{ width: "1000px" }}>
          <div
            className="shadow p-5 bg-custom-blue rounded mx-auto"
            style={{ maxWidth: "1200px" }}
          >
            <form
              className="mx-auto"
              style={{ maxWidth: "1000px" }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <h2 className="text-center mb-4">Contact Us</h2>
              
              {/* Name Field */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  id="name"
                  placeholder="Your Name"
                  style={{ width: "500px" }}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name.message}</div>
                )}
              </div>
              
              {/* Email Field */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="email"
                  placeholder="Your Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email.message}</div>
                )}
              </div>
              
              {/* Message Field */}
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                ></textarea>
                {errors.message && (
                  <div className="invalid-feedback">{errors.message.message}</div>
                )}
              </div>
              
              {/* Submit Button */}
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
