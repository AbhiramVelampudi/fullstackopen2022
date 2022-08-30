import React from "react";

const Part = (props) => {
  return (
    <p>
      {props.part} {props.number_of_exercises}
    </p>
  );
};

export default Part;