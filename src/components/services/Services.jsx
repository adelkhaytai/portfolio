import React, { useRef } from "react";
import "./services.scss";
import { animate, motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Je me concentre sur l'aide à la croissance de votre marque et avancer
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          {/* <img src="/people.webp" alt="" /> */}
          <h1>
            {"  "}
            <motion.b whileHover={{ color: "rgba(2, 255, 36, 0.726)" }}>
              Utiliser
            </motion.b>{" "}
            les dernières technologies{" "}
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "rgba(2, 255, 36, 0.726)" }}>
              {" "}
              pour créer{" "}
            </motion.b>
            des sites Web
          </h1>
          {/* <button><b>What We Do?</b></button> */}
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          {" "}
          <h2>Compétences utilisées sur React front-end</h2>
          <p>
          <li>JSX </li>
              <li>State Management</li>
              <li>Composants Contrôlés </li>
              <li>React Router </li>
              <li>Hooks </li>
              <li>RESTful API Integration</li>
              <li>Responsive Design </li>
              <li>Testing </li>
              <li>État de l'Art CSS </li>
              <li>Gestion des États Avancée </li>
              <li>Optimisation des Performances</li>

          </p>
        </motion.div>

        {/* <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          {" "}
          <h2>Compétences utilisées sur expres</h2>
          <p>
          <li>State Management</li>
              <li>Composants Contrôlés </li>
              <li>React Router </li>
              <li>Hooks </li>
              <li>RESTful API Integration</li>
              <li>Responsive Design </li>
              <li>Testing </li>
              <li>État de l'Art CSS </li>
              <li>Gestion des États Avancée </li>
              <li>Optimisation des Performances</li>
          </p>
        </motion.div> */}

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          {" "}
          <h2>Compétences utilisées coté design</h2>
          <p>
            <ul>
            <li>css</li>
              <li>CSS Layout</li>
              <li>Sass </li>
              <li>Tailwind CSS </li>
              <li>Bootstrap</li>
              <li>Material-UI</li>
              <li>css</li>
              <li>CSS Layout</li>
              <li>Sass </li>
              <li>Tailwind CSS </li>
              <li>Bootstrap</li>
              <li>Material-UI</li>
              
            </ul>
          </p>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          {" "}
          <h2>Compétences utilisées coté back-end</h2>
          <p>
            <ul>
              <li>Node.js Fundamentals</li>
              <li>Express.js Framework</li>
              <li>RESTful API Design </li>
              <li>Middleware </li>
              <li>Gestion des Routes</li>
              <li>Base de Données noSql / sql</li>
              <li>
                  Sécurité :Connaissance des meilleures pratiques de sécurité
                </li>
                <li>Gestion des Erreurs</li>
                <li>Gestion des Erreurs </li>
                <li>Optimisation des Performances</li>
            </ul>
          </p>
        </motion.div>
        
      </motion.div>
    </motion.div>
  );
};

export default Services;
