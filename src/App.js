import React from "react";
import Header from "./components/Header";
import Total from "./components/Total";
import Content from "./components/Content";

const App = () => {
  const course = {
    name: <b>Half Stack application development</b>,
    parts: [
      {
        name: "Fundamentals of React",
        number_of_exercises: 10,
      },
      {
        name: "Using props to Progress data",
        number_of_exercises: 7,
      },
      {
        name: "State of a component",
        number_of_exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;