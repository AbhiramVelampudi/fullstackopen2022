import React from "react";

const Total = (props) => {
  return (
    <p>
      <h4>Total Number of exercises :</h4>{" "}
      {props.parts[0].number_of_exercises +
        props.parts[1].number_of_exercises +
        props.parts[2].number_of_exercises}
    </p>
  );
};

export default Total;