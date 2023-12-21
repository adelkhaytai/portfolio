import React from "react";
import { motion } from "framer-motion";
import "./about.scss"
import { Image } from "antd";

const About = () => {
  return (
    <div>
        <h1>Sur Moi</h1>
        <motion.div className="container">
      <p>
        je suis passionné par le développement web et je me spécialise
        particulièrement dans la création d'interfaces utilisateur dynamiques et
        réactives grâce à React. Avec une expérience dans le développement
        front-end, j'ai travaillé sur divers projets qui m'ont permis de
        maîtriser les concepts fondamentaux de React tels que les composants, le
        state management, et la gestion des cycles de vie. Mon approche axée sur
        la modularité et la réutilisabilité du code me permet de créer des
        applications web robustes et évolutives. Je suis également familier avec
        les dernières tendances et les meilleures pratiques de l'industrie, ce
        qui me permet d'assurer des solutions technologiques modernes et
        optimisées. Je suis enthousiaste à l'idée de contribuer à des projets
        innovants et de relever de nouveaux défis techniques en tant que
        développeur React.
      </p>
      <Image src={"./resume.png"} alt="" />
    </motion.div>
    </div>
    
  );
};

export default About;
