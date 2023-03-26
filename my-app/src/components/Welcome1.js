import React from "react";

function Welcome(props) {
    return (
      <div className="welcome">
        <p>Welcome, {props.name}</p>
        <p>Your age is {props.age}</p>
      </div>
    );
  }
  
  export default Welcome;
 