import React from "react";
import svg from "../images/20944201.jpg";
import { useState } from "react";

const FormContainer = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
//   const [formError, setFormError] = useState({});

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let errors = [];
    if (!email) {
      errors.push("Email field is required");
    }
    if (!name) {
      errors.push("Name field is required");
    }
    if (!password) {
      errors.push("Password field is required");
    }
    if (password !== confirmPassword) {
      errors.push("Passwords do not match");
    }
    setErrors(errors);

    // submit form if there are no errors
    if (errors.length === 0) {
      alert("submit form");
    }
  };

  return (
     
      <div
        className="container-fluid mt-5 d-flex align-items-center justify-content-center"
        style={{ background: "#E5BEEC", borderRadius: "20px", width: "70%" }}
      >
        <div className="col-6 p-3 d-flex align-items-center justify-content-center">
          <form
            className="form flex d-flex align-items-center justify-content-center flex-column w-75"
            onSubmit={onSubmitHandler}
          >
            {/* NAME*/}
            <div className="form-floating mb-3 mt-3 w-100">
              <input
                type="text"
                name="fullname"
                onChange={(event) => setName(event.target.value)}
                value={name}
                className="form-control"
                id="floatingInput"
                placeholder="Full Name"
              />
              <label for="floatingInput">Full Name</label>
            </div>
            {/* EMAIL*/}
            <div className="form-floating mb-3 w-100">
              <input
                type="email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
           
            {/* PASSWORD*/}
            <div className="form-floating mb-3 w-100">
              <input
                type="password"
                name="password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
           
            {/* CONFIRM PASSWORD OF THE PERSON */}
            <div className="form-floating mb-3 w-100">
              <input
                type="password"
                name="confirmpassword"
                onChange={(event) => setConfirmPassword(event.target.value)}
                value={confirmPassword}
                className="form-control"
                id="floatingPassword"
                placeholder="Confirm Password"
              />
              <label for="floatingPassword">Confirm Password</label>
            </div>

            <div className="invalid-input">{errors.map((error, index) => (
            <p key={index}>*{error}</p>
          ))}</div>
            
            {/* SUBMIT BTN */}
            <input
              class="btn btn-primary w-50 mb-2"
              type="submit"
              value="Submit"
            ></input>
          </form>
        </div>
        <div
          className="col-6 p-3 d-flex align-items-center justify-content-center"
          style={{ borderRadius: "20px" }}
        >
          <img className="banner img-fluid w-100" src={svg} alt="bannerimage" />
        </div>
      </div>
    )
  
};

export default FormContainer;
