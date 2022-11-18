import React from "react";
import {userIsRegistered} from "./App";
import Input from "./Input";


function Form() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
        {(!userIsRegistered) && <Input type="password" placeholder="Confirm Password" /> }
      <button type="submit">{userIsRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
