import React from "react";
import projects from "../projects";

const Project = ({ el }) => {
  return (
    <div className="project">
      <div
        className="project--image"
        style={{ backgroundImage: `url(${el.image})` }}
      ></div>
    </div>
  );
};

export default Project;
