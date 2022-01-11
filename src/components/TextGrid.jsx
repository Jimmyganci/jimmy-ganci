import React, { useRef } from "react";
import more from "../images/plus.png";
import less from "../images/moins.png";
import UseElementOnScreen from "../hooks/UseElementOnScreen";

const TextGrid = ({ project, position }) => {
  const gridRef = useRef();

  const isVisible = UseElementOnScreen(
    {
      root: null,
      rootMargin: "0px",
      treshold: 0.5,
    },
    gridRef
  );
  console.log(isVisible);
  return (
    <div className={`grid--textContainer`}>
      <div className="grid--text">
        <p>Les</p>
        <img src={position === "right" ? less : more} alt="mastered" />
      </div>
      <p ref={gridRef} className={`hidden ${isVisible ? "noTranslate" : ""}`}>
        {position === "right" ? project.difficulty : project.mastered}
      </p>
    </div>
  );
};

export default TextGrid;
