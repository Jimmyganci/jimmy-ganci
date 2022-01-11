import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import projects from "../projects";
import CircleSkill from "./CircleSkill";
import ProjectGrid from "./ProjectGrid";
import fleche from "../images/fleche.png";

const ProjectDetails = ({
  scroll,
  scrollDown,
  setScrollDown,
  getHeightHome,
}) => {
  const { id } = useParams();
  const projectRef = useRef();

  useEffect(() => {
    getHeightHome(projectRef);
    setScrollDown(0);
  }, []);
  return (
    <div
      className="containerProjectDetails"
      onWheel={(e) => scroll(e, setScrollDown, scrollDown)}
      style={{ transform: `translateY(-${scrollDown}px)` }}
      ref={projectRef}
    >
      {projects
        .filter((el) => el.id == id)
        .map((project) => (
          <div key={project.id} className="projectDetails">
            <div className="projectDetails__header">
              <div className="projectDetails__header--title">
                {project.title.split(" " || "-").map((word, index) => (
                  <span
                    key={index}
                    style={{
                      color: index % 2 === 0 && "rgb(158, 158, 111)",
                      transform: `translate(${index % 2 === 0 ? "-" : ""}${
                        (scrollDown / 7) * index + 0.5
                      }px, ${(scrollDown / 7) * index + 0.5}px)`,
                    }}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
            <div className="projectDetails__desc">
              <div className="projectDetails__desc--left">
                <h2>{project.id}</h2>
              </div>
              <div className="projectDetails__desc--right">
                <p>{project.text}</p>
              </div>
            </div>
            <div className="projectDetails__skills">
              {project.techno.map((el, index) => (
                <CircleSkill key={index} skill={el} index={index} />
              ))}
            </div>
            <ProjectGrid project={project} scroll={scroll} />
            <div className="projectDetails__link">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <p>Voir le site</p>
                <img src={fleche} alt="fleche" />
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProjectDetails;
