import React, { useRef } from "react";
import Card from "./Card";

const FormRef = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      full_name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: confirmRef.current.value,
    };
    console.log("Form Data (useRef):", data);
    alert("Form submitted using useRef!");
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input id="full_name" ref={nameRef} type="text" />
        </div>

        <div>
          <label>Email:</label>
          <input id="email" ref={emailRef} type="email" />
        </div>

        <div>
          <label>Password:</label>
          <input id="password" ref={passwordRef} type="password" />
        </div>

        <div>
          <label>Confirm Password:</label>
          <input id="password_confirmation" ref={confirmRef} type="password" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormRef;
