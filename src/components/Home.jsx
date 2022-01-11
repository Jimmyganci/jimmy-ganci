import React, { useEffect, useRef, useState } from "react";
import projects from "../projects";
import arrow from "../images/fleche.png";

const Home = ({ scroll, scrollDown, setScrollDown, getHeightHome }) => {
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
    const timeout = setTimeout(() => {
      getHeightHome(homeRef);
      setScrollDown(0);
    }, 200);
    return () => {
      clearInterval(timeout);
    };
  }, [homeRef]);
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
            <h2>Portefolio</h2>
          </div>
          <div className="about__description--image" style={styleAbout}></div>
          <div className="about__description--text">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
              possimus quibusdam laboriosam dicta adipisci necessitatibus
              reprehenderit deleniti quae. Pariatur inventore ipsum dolorem
              blanditiis, veritatis molestiae magnam neque commodi rerum,
              excepturi hic. Perspiciatis nostrum nobis perferendis hic
              voluptatem quibusdam, sequi velit distinctio, molestias
              consequuntur ullam? Qui ipsum blanditiis fugit quasi impedit.
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
          </div>
        </div>
        <div className="portefolio__buttonProject">
          <button>
            <p>Plus de projets</p>
            <img src={arrow} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
