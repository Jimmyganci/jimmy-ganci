import project1 from "./images/project1.png";
import project1a from "./images/project1a.png";
import project1b from "./images/project1b.png";
import project1c from "./images/project1c.png";
import project2 from "./images/project2.png";
import project2a from "./images/project2a.png";
import project2b from "./images/project2b.png";
import project2c from "./images/project2c.png";
import project3 from "./images/project3.png";
import project3a from "./images/project3a.png";
import project3b from "./images/project3b.png";
import project3c from "./images/project3c.png";
import project4 from "./images/project4.png";
import project4a from "./images/project4a.png";
import project4b from "./images/project4b.png";
import project4c from "./images/project4c.png";
import project5 from "./images/project5.png";
import project5a from "./images/project5a.png";
import project5b from "./images/project5b.png";
import project5c from "./images/project5c.png";

const projects = [
  {
    id: 1,
    title: "Studio ag Interior",
    date: "Mars 2021",
    status: "Terminé",
    mastered: `Maitrise de l'informatique...`,
    difficulty: `Aucune maitrise des languages de programmation`,
    text: `Premier projet réalisé en html et css. Simple site vitrine
	 d'une architecte d'intérieur. Actuellement en refonte total..`,
    image: project1,
    image2: project1a,
    image3: project1b,
    image4: project1c,
    techno: [
      { id: 91, language: "HTML", skill: 80 },
      { id: 92, language: "CSS", skill: 80 },
      { id: 93, language: "PHP", skill: 5 },
      { id: 94, language: "JS Vanilla", skill: 20 },
    ],
    link: "https://www.amandineganci.com/",
  },
  {
    id: 2,
    title: "Archi Métal",
    date: "Mai 2021",
    status: "Terminé",
    mastered: `Notion en HTML, CSS et Javascript`,
    difficulty: `Maitriser animation scroll Javascript`,
    text: `Deuxième projet qui m'a permis de confirmer mes connaissances en html et css.
	 J'ai également pu en apprendre davantage sur Javascript Vanilla`,
    image: project2,
    image2: project2a,
    image3: project2b,
    image4: project2c,
    techno: [
      { id: 95, language: "HTML", skill: 80 },
      { id: 96, language: "CSS", skill: 80 },
      { id: 97, language: "PHP", skill: 5 },
      { id: 98, language: "JS Vanilla", skill: 30 },
    ],
    link: "https://www.archi-metal.com/",
  },
  {
    id: 3,
    title: "The Wild Restaurant",
    date: "Sept 2021",
    status: "Terminé",
    mastered: `Maitrise du HTML, CSS et du javascript Vanilla`,
    difficulty: `Prendre en main le SCSS et le BEM`,
    text: `Premier projet à la Wild, site vitrine d'un restaurant. 
	Première utilisation de SASS et BEM, utilisation plus intensve de javascript vanilla`,
    image: project3,
    image2: project3a,
    image3: project3b,
    image4: project3c,
    techno: [
      { id: 99, language: "HTML", skill: 70 },
      { id: 100, language: "SCSS", skill: 80 },
      { id: 101, language: "JS Vanilla", skill: 40 },
    ],
    link: "https://louya64.github.io/The-Wild-restau/",
  },
  {
    id: 4,
    title: "World Wild Quiz",
    date: "Nov 2021",
    status: "A terminer",
    mastered: `Maitrise du HTML, CSS, javascript vanilla`,
    difficulty: `Prise en main REACT.js, NODE.js(session)`,
    text: `Deuxième projet à la Wild et premier projet en React.js et Node.js.
	Utilisation des sessions en avec express et de Redis Store`,
    image: project4,
    image2: project4a,
    image3: project4b,
    image4: project4c,
    techno: [
      { id: 102, language: "HTML", skill: 5 },
      { id: 103, language: "CSS", skill: 30 },
      { id: 104, language: "REACT.js", skill: 80 },
      { id: 105, language: "NODE.js", skill: 40 },
    ],
    link: "https://jimmyganci.github.io/WorldWildQuiz/#/",
  },
  {
    id: 5,
    title: "Live Up",
    date: "Nov 2021",
    status: "A terminer",
    mastered: `Maitrise du HTML, CSS, javascript vanilla, React.js, NODE.js`,
    difficulty: `Projet réalisé pour un hackaton`,
    text: `Porjet réalisé lors d"un hackaton de 31h autour du thème de la musique.
	Certaines fonctionnalités sont à terminer ou modifier concernant l'authentification et la création de compte.`,
    image: project5,
    image2: project5a,
    image3: project5b,
    image4: project5c,
    techno: [
      { id: 106, language: "HTML", skill: 5 },
      { id: 107, language: "CSS", skill: 30 },
      { id: 108, language: "REACT.js", skill: 71 },
      { id: 109, language: "NODE.js", skill: 45 },
    ],
    link: "https://aurelienbrethes.github.io/Liveup/#/",
  },
];
export default projects;
