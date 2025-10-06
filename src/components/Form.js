import Card from "./Card";
import React from "react";

export default function Form() {
  return (
    <Card>
      <form id="info-form">
        <input id="full_name" placeholder="Full Name" />
        <br />
        <input id="email" placeholder="Email" />
        <br />
        <input id="password" type="password" placeholder="Password" />
        <br />
        <input
          id="password_confirmation"
          type="password"
          placeholder="Confirm Password"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}
