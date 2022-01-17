import React, { useEffect, useRef, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import UseElementOnScreen from "../hooks/UseElementOnScreen";

const CircleSkill = ({ skill, index }) => {
  const [count, setCount] = useState(0);
  const skillRef = useRef(null);

  const isVisible = UseElementOnScreen(
    {
      root: null,
      rootMargin: "0px",
      treshold: 0,
    },
    skillRef
  );

  useEffect(() => {
    const countInterval = setInterval(() => {
      if (isVisible) {
        if (count < skill.skill) setCount(count + 1);
      } else {
        setCount(0);
      }
    }, 30);

    return () => {
      clearInterval(countInterval);
    };
  });

  return (
    <div
      ref={skillRef}
      className={`circleSkill ${isVisible && "noTranslate"}`}
      style={{ transitionDelay: `${index / 4}s` }}
    >
      <CircularProgressbar
        key={skill.id}
        value={count}
        text={`${count}%`}
        styles={{
          trail: {
            strokeWidth: 5,
          },
          path: {
            // Path color
            stroke: `rgb(158, 158, 111)`,
            strokeWidth: 5,
          },
          text: {
            fill: "black",
          },
        }}
      />
      <p>{skill.language}</p>
    </div>
  );
};

export default CircleSkill;
