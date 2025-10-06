import React from "react";
import { useState } from "react";
import Card from "./Card";

export default function FormState() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  function handleChange(event) {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(
      "Form submitted using useState:\n" + JSON.stringify(formData, null, 2)
    );
  }

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input
            id="full_name"
            type="text"
            value={formData.full_name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            id="password_confirmation"
            type="password"
            value={formData.password_confirmation}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}
