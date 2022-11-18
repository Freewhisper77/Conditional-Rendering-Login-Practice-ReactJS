import React from "react";
import Input from "./Input";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
        {/*props.后面写的是你自己给这个组件定义的属性名*/}
        {(props.isRegistered) && <Input type="password" placeholder="Confirm Password" /> }
      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
