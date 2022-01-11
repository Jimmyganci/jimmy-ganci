import React, { useEffect, useRef, useState } from "react";
import Project from "./Project";
import projects from "../projects";
import ProjectDetails from "./ProjectDetails";
import { useNavigate } from "react-router-dom";

const Portefolio = ({ scroll, scrollDown, setScrollDown, getHeightHome }) => {
  const [projectSelect, setProjectsDelect] = useState(1);
  const [selectedProject, setSelectedProject] = useState(false);
  const [growHeight, setGrowHeight] = useState(false);
  const portefolioRef = useRef();
  const navigate = useNavigate();

  const styleScroll = {
    transform: `translateY(-${scrollDown}px)`,
  };

  useEffect(() => {
    getHeightHome(portefolioRef);
    setScrollDown(0);
  }, []);
  return (
    <div
      className="portefolio"
      ref={portefolioRef}
      onWheel={(e) => scroll(e, setScrollDown, scrollDown)}
      style={styleScroll}
    >
      <div className="portefolioSlideShow" style={{ minHeight: "100vh" }}>
        <div className={`portefolioSlideShow__title`}>
          <h1 className={`titleProject  ${selectedProject ? "closeSelf" : ""}`}>
            <span>Portefolio</span>
          </h1>
        </div>

        <div
          className={`portefolioSlideShow__projects ${
            selectedProject ? "growHeight" : ""
          } ${growHeight ? "growWidth" : ""}`}
        >
          {projects
            .filter((el) => el.id === projectSelect)
            .map((project) => (
              <div
                className="portefolioSlideShow__projects--project"
                key={project.id}
                onClick={() => {
                  setSelectedProject(true);
                  setTimeout(() => {
                    setGrowHeight(true);
                  }, 1000);
                  setTimeout(() => {
                    navigate(`/portefolio/project/${project.id}`);
                  }, 3500);
                }}
              >
                <img
                  className={growHeight ? "noFilter" : ""}
                  src={project.image}
                  alt={project.title}
                />
              </div>
            ))}
        </div>
        <div
          className={`portefolioSlideShow__containerNumber ${
            selectedProject === true ? "goDown" : ""
          }`}
        >
          {projects.map((el) => (
            <p
              onClick={() => setProjectsDelect(el.id)}
              className={`portefolioSlideShow__containerNumber--list`}
              style={{ fontSize: projectSelect === el.id && "12vw" }}
              key={el.id}
            >
              {el.id}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portefolio;
