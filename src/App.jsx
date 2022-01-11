import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../src/components/Home";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Portefolio from "./components/Portefolio";
import "./styles/styles.css";
import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [scrollDown, setScrollDown] = useState(0);
  const [heightHome, setHeightHome] = useState(0);
  const location = useLocation();

  const scroll = (e, setState, state) => {
    if (window.innerWidth >= 800) {
      if (e.deltaY > 0) {
        if (state >= 0 && scrollDown < heightHome - window.innerHeight)
          setState(state + 50);
      } else {
        if (state > 0) setState(state - 50);
      }
    }
  };

  const routes = [
    { path: "/portefolio", name: "Portefolio", Component: Portefolio },
    { path: "/", name: "Accueil", Component: Home },
    { path: "/contact", name: "Contact", Component: Contact },
    {
      path: "/portefolio/project/:id",
      name: "ProjectDetails",
      Component: ProjectDetails,
    },
  ];

  const getHeightHome = (targetRef) => {
    const newHeight = targetRef.current.clientHeight;
    setHeightHome(newHeight);
  };

  return (
    <div className="app">
      <Header />
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="page" timeout={500}>
          <Routes location={location}>
            {routes.map(({ path, Component }) => (
              <Route
                key={path}
                exact
                path={path}
                element={
                  <Component
                    scroll={scroll}
                    scrollDown={scrollDown}
                    setScrollDown={setScrollDown}
                    getHeightHome={getHeightHome}
                  />
                }
              />
            ))}
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
