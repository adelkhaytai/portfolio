import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "Cosmetic e-commerce website project",
    img: "./p-react.png",
    description:"A project containing beauty products in which there is a manager account to control the products, add categories, and of course purchase via paypal and visa master card...",
    href : "https://client-cosmetic.onrender.com/"
  },
  {
    id: 2,
    title: "chat application ",
    img: "./chat.png",
    description:
      "Création 'dun projet Comminication pour les emplois (chat Contacts,l'authentification) Codage de services backend en Utilisant (NodeJS /EspressJS)",
    href : "https://client-chat-company.onrender.com/"
    },
  // {
  //   id: 3,
  //   title: "React Commerce",
  //   img: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   description:
  //     "Lorem ipsum dolor sit ameero optio nobisrepellat quibusdam quas harum obcaecati quae repellendus numquam? Aliquid, rem eius.",
  // },
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
    offset : ["start start","end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [150,100]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title} </h2>
            <p>{item.description} </p>
            <a href={item.href}>see demo</a>
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
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
          ))}
      
    </div>
  );
};

export default Portfolio;
