import React from "react";
import Form from "./Form";

const userIsRegistered = false; // custom：true OR false

function App() {
  return (
    <div className="container">
      <Form
          // 只有定义组件的时候传入props 在用这个组件的时候，属性后面都写的是实际的值（这里是userIsRegistered这个boolean类型的值）
          isRegistered={userIsRegistered}
      />
    </div>
  );
}

export default App;
