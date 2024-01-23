import React from "react";

const ChildrenComponent = (props) => {
  const { message } = props;

  return (
    <div>
      <p>{message} </p>
    </div>
  );
};

export default ChildrenComponent;
