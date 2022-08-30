import React from "react";
import Part from "./Part";

const Content = (props) => {
  return (
    <>
      <Part part={props.parts[0].name} exercises={props.parts[0].number_of_exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].number_of_exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].number_of_exercises} />
    </>
  );
};

export default Content;