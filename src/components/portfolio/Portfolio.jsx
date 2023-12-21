import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";
import { Image } from "antd";
const items = [
  {
    id: 1,
    title: "Cosmetic e-commerce website project",
    img: "./p-react.png",
    description:
      "Un projet contenant des produits de beauté dans lequel il y a un compte gestionnaire pour contrôler les produits, ajouter des catégories, et bien sûr acheter via paypal et visa master card...",
    href: "https://client-cosmetic.onrender.com/",
  },

  {
    id: 2,
    title: "Relation d'entité ",
    img: "./example1.png",
    description: "",
  },
  {
    id: 3,
    title: "Ce sont les couleurs utilisées sur le site cosmétique ",
    img: "./example2.jpg",

    description: "",
  },
  {
    id: 4,
    title: "Voici les catégories de conception utilisées ",
    img: "./example3.jpg",

    description: "",
  },
  {
    id: 5,
    title: "PostMan API ",
    img: "./postman2.png",
    description: `En tant que professionnel du développement, j'ai acquis une expertise approfondie dans la validation et le test des API,
     avec Postman comme outil central dans mon processus de travail. Ma compétence dans l'utilisation de Postman va au-delà de simples requêtes
      API ; je suis capable de créer des collections complètes de tests automatisés, facilitant ainsi la validation continue et la garantie de
       la stabilité des API. Grâce à Postman, je suis en mesure d'effectuer des tests unitaires, d'intégration et de validation fonctionnelle de
        manière efficace. J'ai une compréhension approfondie des fonctionnalités avancées de Postman, telles que la gestion des environnements, 
        `,
  },

  {
    id: 10,
    title: "chat application ",
    img: "./chat.png",
    description:
      "Création 'dun projet Comminication pour les emplois (chat Contacts,l'authentification) Codage de services backend en Utilisant (NodeJS /EspressJS)",
    href: "https://client-chat-company.onrender.com/",
  },

  // {
  //   id: 4,
  //   title: "React Commerce",
  //   img: "https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam libero optio nobis, deleniti iue repellendus numquam? Aliquid, rem eius.",
  // },
  // {
  //   id: 5,
  //   title: "React Commerce",
  //   img: "https://images.pexels.com/photos/5849559/pexels-photo-5849559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam libero optio nobis, delenitam quas hars numquam? Aliquid, rem eius.",
  // },
];
const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, 100]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <p className="click">

            Cliquez sur l'image pour l'agrandir
            </p>
            <Image src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title} </h2>
            <p>{item.description} </p>
            {item.href ? <a href={item.href}>see demo</a> : "" }
           
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Oeuvres distinctives</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
