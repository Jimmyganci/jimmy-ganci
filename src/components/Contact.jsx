import React, { useEffect, useRef, useState } from "react";
import Form from "./Form";
import Phone from "./Phone";
import UseElementOnScreen from "../hooks/UseElementOnScreen";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import cv from "../images/cv.png";
import cvPdf from "../images/cv.pdf";

const Contact = ({
  scroll,
  setScrollDown,
  scrollDown,
  getHeightHome,
  sizeWindow,
  setMenu,
}) => {
  const contactRef = useRef();
  const socialRef = useRef(null);
  const [send, setSend] = useState(false);

  const styleScroll = {
    transform: `translateY(-${scrollDown}px)`,
  };

  const isVisible = UseElementOnScreen(
    {
      root: null,
      rootMargin: "0px",
      treshold: 0.5,
    },
    socialRef
  );

  useEffect(() => {
    setMenu(false);
    getHeightHome(contactRef);
    setScrollDown(0);
  }, [socialRef, sizeWindow]);

  return (
    <div
      className="contact"
      ref={contactRef}
      onWheel={(e) => scroll(e, setScrollDown, scrollDown)}
      style={styleScroll}
    >
      <div className="contact__header">
        <div className="contact__header--flex">
          <div
            className="contact__header--social"
            style={{ transform: `translateY(${scrollDown * 1.4}px)` }}
          >
            <a
              href="https://github.com/Jimmyganci"
              target="_blank"
              rel="noopener noreferrer"
              className={isVisible ? "noTranslate" : ""}
              style={{
                transition: "0.7s cubic-bezier(.68,.32,.56,1.42)",
              }}
            >
              <img src={github} alt="github" />
            </a>
            <a
              href={cvPdf}
              download="cv.pdf"
              className={isVisible ? "noTranslate" : ""}
              style={{
                transition: "0.7s cubic-bezier(.68,.32,.56,1.42)",
                transitionDelay: "0.3s",
              }}
            >
              <img src={cv} alt="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/jimmy-ganci-b4a9a5209/"
              target="_blank"
              rel="noopener noreferrer"
              className={isVisible ? "noTranslate" : ""}
              style={{
                transition: "0.7s cubic-bezier(.68,.32,.56,1.42)",
                transitionDelay: "0.6s",
              }}
            >
              <img src={linkedin} alt="github" />
            </a>
          </div>
          <Phone send={send} scrollDown={scrollDown} />
          <div className="contact__header--flex--title">
            <p>Echangeons ensemble</p>
            <h1 style={{ transform: `translateY(${scrollDown / 3}px)` }}>
              <span>Contactez</span>
              <span
                style={{
                  transform: `translateY(${scrollDown / 12}px)`,
                }}
              >
                moi!
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="contact__form">
        <Form setSend={setSend} socialRef={socialRef} />
      </div>
    </div>
  );
};

export default Contact;
