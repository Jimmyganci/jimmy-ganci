import React, { useEffect, useRef, useState } from "react";
import projects from "../projects";
import arrow from "../images/fleche.png";
import { Link } from "react-router-dom";

const Home = ({
  scroll,
  scrollDown,
  setScrollDown,
  getHeightHome,
  sizeWindow,
  setMenu,
}) => {
  const [scrollPortefolio, setScrollPortefolio] = useState(0);
  const homeRef = useRef();

  const styleScroll = {
    transform: `translateY(-${scrollDown}px)`,
  };
  const styleHero = {
    transform: `translateY(-${scrollDown / 3}px)`,
  };
  const styleFolio = {
    transform: `translateY(${scrollDown / 3}px)`,
  };
  const styleAbout = {
    transform: `translateY(-${scrollDown / 7}px)`,
    backgroundPositionY: `${scrollDown / 20}px`,
  };
  const stylePortefolio1 = {
    transform: `translateY(-${Math.floor(Math.round(scrollPortefolio / 3))}px)`,
  };
  const stylePortefolio2 = {
    transform: `translateY(-${scrollPortefolio / 4}px)`,
  };
  const stylePortefolio3 = {
    transform: `translateY(-${Math.floor(Math.round(scrollPortefolio / 5))}px)`,
  };

  useEffect(() => {
    setMenu(false);
    const timeout = setTimeout(() => {
      getHeightHome(homeRef);
      setScrollDown(0);
      setScrollPortefolio(0);
    }, 1000);
    return () => {
      clearInterval(timeout);
    };
  }, [homeRef, sizeWindow]);

  return (
    <div
      className="home"
      onWheel={(e) => scroll(e, setScrollDown, scrollDown)}
      style={styleScroll}
      ref={homeRef}
    >
      <div className="home__heroHeader">
        <div className="home__heroHeader--square" style={styleHero}>
          <h2 style={{ transform: `translateY(-${scrollDown / 3}px)` }}>
            Jimmy Ganci
          </h2>
          <p>Developpeur Web Junior</p>
        </div>
        <div className="home__heroHeader--title" style={styleFolio}>
          <h2>Qui suis-je ?</h2>
        </div>
      </div>
      <div className="about">
        <div className="about__title"></div>
        <div className="about__description">
          <div className="about__description--title" style={styleFolio}>
            <h2>Projets</h2>
          </div>
          <div className="about__description--image" style={styleAbout}></div>
          <div className="about__description--text">
            <p>
              Militaire en reconversion professionnelle, c'est vers le
              développement web que mon interêt c'est porté.
            </p>
            <p>
              Autodidacte, j'ai pu me former grâce à la réalisation de deux
              projets personnels.
            </p>
            <p>
              Curieux et passioné, j'ai entrepris une formation à la Wild Code
              School, période durant laquelle j'ai pu continuer à réaliser des
              projets, seul ou en groupe.
            </p>
          </div>
        </div>
      </div>
      <div className="portefolio">
        <div className="portefolio__title"></div>
        <div
          className="portefolio__presentation"
          onWheel={(e) => scroll(e, setScrollPortefolio, scrollPortefolio)}
        >
          <div className="portefolio__presentation__flex">
            <div
              className="portefolio__presentation__flex--left"
              style={stylePortefolio1}
            >
              <img src={projects[0].image} alt="projet1" />
              <Link to={`/portefolio/project/${projects[0].id}`}>
                Voir le projet
              </Link>
              <div className="portefolio__presentation__flex--left__link">
                <h3 className="titleProject">{projects[0].title}</h3>
                <p className="number">{projects[0].id}</p>
              </div>
            </div>
            <div
              className="portefolio__presentation__flex--right"
              style={stylePortefolio2}
            >
              <img src={projects[1].image} alt="projet2" />
              <div className="portefolio__presentation__flex--right__link">
                <Link to={`/portefolio/project/${projects[1].id}`}>
                  Voir le projet
                </Link>
                <h3 className="titleProject">{projects[1].title}</h3>
                <p className="number">{projects[1].id}</p>
              </div>
            </div>
          </div>
          <div
            className="portefolio__presentation__middle"
            style={stylePortefolio3}
          >
            <img src={projects[2].image} alt="projet3" />

            <div className="portefolio__presentation__middle--link">
              <h3 className="titleProject">{projects[2].title}</h3>
              <p className="number">{projects[2].id}</p>
            </div>
            <Link to={`/portefolio/project/${projects[2].id}`}>
              Voir le projet
            </Link>
          </div>
        </div>
        <div className="portefolio__buttonProject">
          <button>
            <Link to="/portefolio">
              <p>Plus de projets</p>
              <img src={arrow} alt="arrow" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
