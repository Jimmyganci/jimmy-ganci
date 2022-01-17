import React, { useEffect, useRef, useState } from "react";
import projects from "../projects";
import { Link } from "react-router-dom";
import ImageSlide from "./ImageSlide";

const Portefolio = ({
  scroll,
  scrollDown,
  setScrollDown,
  getHeightHome,
  sizeWindow,
  setMenu,
}) => {
  const [projectSelect, setProjectsSelect] = useState(1);
  const [valueSlide, setValueSlide] = useState(0);
  const [color, setColor] = useState("");
  const [colorText, setColorText] = useState("");
  const [backgroundTitle, setBackgroundTitle] = useState("");

  const portefolioRef = useRef();
  console.log(projects.length);
  const styleScroll = {
    transform: `translateY(-${scrollDown}px)`,
  };

  const getColor = () => {
    switch (projectSelect) {
      case 1:
        setColor("#5d5349");
        setColorText("#e1a67a");
        setBackgroundTitle("#312c2782");
        break;
      case 2:
        setColor("#393736");
        setColorText("#2a5051");
        setBackgroundTitle("rgba(57, 55, 54, 0.4)");
        break;
      case 3:
        setColor("rgb(12, 28, 45");
        setColorText("#7c703e");
        setBackgroundTitle("rgb(38, 26, 22, 0.3)");
        break;
      case 4:
        setColor("#d9cf75");
        setColorText("#9e4752");
        setBackgroundTitle("rgb(217, 207, 117, 0.3)");
        break;
      case 5:
        setColor("#926060");
        setColorText("rgb(119 122 168)");
        setBackgroundTitle("rgb(146, 96, 96, 0.3)");
        break;
    }
  };

  useEffect(() => {
    setMenu(false);
    getHeightHome(portefolioRef);
    setScrollDown(0);
    getColor();
    window.addEventListener("resize", () => {
      setValueSlide(0);
      setProjectsSelect(1);
    });
  }, [portefolioRef, sizeWindow, projectSelect]);

  const slideImage = (id) => {
    if (id > projectSelect) setValueSlide(valueSlide - 45);
    else setValueSlide(valueSlide + 45);
  };

  const slideImageButton = (id) => {
    if (id > 0 && id < projects.length + 1) {
      setProjectsSelect(id);
      if (window.innerWidth > 550) {
        setValueSlide((id - 1) * -45);
      } else {
        console.log(id);
        setValueSlide((id - 1) * -35);
      }
    }
  };

  return (
    <div
      className="portefolio"
      ref={portefolioRef}
      onWheel={(e) => scroll(e, setScrollDown, scrollDown)}
      style={styleScroll}
    >
      <div className="portefolioSlideShow" style={{ minHeight: "100vh" }}>
        <div className="portefolioSlideShow__title">
          {projects.map((el) => (
            <div key={el.id}>
              {el.title.split(" ").map((word, index) => (
                <span
                  className="portefolioSlideShow__title__word"
                  id="marginWord"
                  style={{ color: colorText }}
                  key={index}
                >
                  {word.split("").map((letter, index) => (
                    <span
                      key={index}
                      className="portefolioSlideShow__title__word--letter"
                    >
                      <p
                        style={{
                          transform:
                            el.id === projectSelect && `translateX(0%)`,
                          visibility: el.id === projectSelect && `visible`,
                          transitionDelay: `${index / 20}s`,
                          marginRight:
                            (letter === "a" ||
                              letter === "A" ||
                              letter === "i" ||
                              letter === "t") &&
                            "2vw",
                        }}
                      >
                        {letter}
                      </p>
                    </span>
                  ))}
                </span>
              ))}
            </div>
          ))}
        </div>
        <div
          className="portefolioSlideShow--screenDynamic"
          style={{
            background: `${color}`,
          }}
        />
        <div
          className={`portefolioSlideShow__projects`}
          style={{
            width: `${projects.length}00vw`,
            transform: `translateX(${valueSlide}vw)`,
          }}
        >
          {projects.map((project, index) => (
            <ImageSlide
              key={index}
              project={project}
              projectSelect={projectSelect}
              setProjectsSelect={setProjectsSelect}
              slideImage={slideImage}
              backgroundTitle={backgroundTitle}
              colorText={colorText}
              slideImageButton={slideImageButton}
            />
          ))}
        </div>
        <div className="portefolioSlideShow__link">
          {projects
            .filter((el) => el.id === projectSelect)
            .map((project, index) => (
              <Link
                key={index}
                to={`/portefolio/project/${project.id}`}
                style={{
                  color: window.innerWidth > 550 ? colorText : "black",
                  backgroundColor: window.innerWidth < 550 && colorText,
                  opacity: window.innerWidth < 550 && `0.5`,
                }}
              >
                Voir le projet
              </Link>
            ))}
        </div>
        <div className="portefolioSlideShow__infos">
          <div className="portefolioSlideShow__infos--id">
            {projects.map((el, index) => (
              <p
                key={index}
                style={{
                  transform: el.id === projectSelect && `translateY(0vw)`,
                  color: colorText,
                }}
              >
                {el.id}
              </p>
            ))}
          </div>
          <div className={`portefolioSlideShow__infos__containerNumber`}>
            {projects.map((el) => (
              <p
                onClick={() => slideImageButton(el.id)}
                className={`portefolioSlideShow__infos__containerNumber--list`}
                style={{
                  width: projectSelect === el.id && "15px",
                  height: projectSelect === el.id && "15px",
                  background: colorText,
                }}
                key={el.id}
              ></p>
            ))}
          </div>
          <div className="portefolioSlideShow__infos--date">
            {projects.map((el, index) => (
              <p
                key={index}
                style={{
                  transform: el.id === projectSelect && `translateY(0vw)`,
                  color: colorText,
                }}
              >
                {el.date}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portefolio;
