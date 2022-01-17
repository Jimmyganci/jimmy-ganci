import React, { useRef, useState } from "react";
import { StyleSheet, css } from "aphrodite";

const ImageSlide = ({
  project,
  growHeight,
  projectSelect,
  slideImage,
  setProjectsSelect,
  backgroundTitle,
  slideImageButton,
}) => {
  const [slideX, setSlideX] = useState(0);
  const styles = StyleSheet.create({
    before: {
      ":before": {
        backgroundColor: backgroundTitle,
      },
      ":hover::before": {
        backgroundColor: project.id !== projectSelect && "transparent",
      },
    },
  });

  return (
    <div
      className={`portefolioSlideShow__projects--project ${css(styles.before)}`}
      key={project.id}
      style={{
        width:
          project.id === projectSelect &&
          `${window.innerWidth > 550 ? "50vw" : "100vw"}`,
      }}
      onClick={() => {
        project.id !== projectSelect && setProjectsSelect(project.id);
        project.id !== projectSelect && slideImage(project.id);
      }}
      onTouchStart={(e) => setSlideX(e.changedTouches[0].clientX)}
      onTouchEnd={(e) =>
        e.changedTouches[0].clientX < slideX
          ? slideImageButton(project.id + 1)
          : slideImageButton(project.id - 1)
      }
    >
      <img
        className={growHeight ? "noFilter" : ""}
        src={project.image}
        alt={project.title}
        style={{
          filter: project.id !== projectSelect && "blur(1px) brightness(0.5)",
        }}
      />
    </div>
  );
};

export default ImageSlide;
