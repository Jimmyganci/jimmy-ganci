import React, { useState } from "react";
import TextGrid from "./TextGrid";

const ProjectGrid = ({ project, scroll }) => {
  const [scrollGrid, setScrollGrid] = useState(0);

  return (
    <div className="grid" onWheel={(e) => scroll(e, setScrollGrid, scrollGrid)}>
      <div
        className="grid--imageContainer"
        style={{
          backgroundImage: `url(${project.image2})`,
          backgroundPositionY: `-${scrollGrid / 9}px`,
        }}
      ></div>
      <TextGrid project={project} position="left" />
      <div className="grid--status">
        <p>Réalisé en {project.date}</p>
        <p>{project.status}</p>
      </div>
      <TextGrid project={project} position="right" />
      <div
        className="grid--imageContainer"
        style={{
          backgroundImage: `url(${project.image3})`,
          backgroundPositionY: `-${scrollGrid / 9}px`,
        }}
      ></div>
    </div>
  );
};

export default ProjectGrid;
