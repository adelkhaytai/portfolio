import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";

const Hero = () => {

    const textVariants={
        initial:{
            x:-200,
            opacity:0,
        },
        animate:{
            x:0,
            opacity:1,
            transition:{
                duration:1,
                staggerChildren :0.1,
            },
        },
        scrollButton:{
            opacity:0,
            y:10,
            transition:{
                duration:2,
                repeat:Infinity
            }
        }

    }
    const sliderVariants={
        initial:{
            x:0,
        },
        animate:{
            x:"-220%",
            transition:{
                repeat:Infinity,
                repeatType:"mirror",
                duration :20,
            },
        },
        scrollButton:{
            opacity:0,
            y:10,
            transition:{
                duration:2,
                repeat:Infinity
            }
        }

    }

    
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate" >
          <motion.h2>ADEL KHAYATI</motion.h2>
          <div className="typeWrite">
          <motion.h1>Web Developer React</motion.h1>
          </div>
          {/* <motion.div className="buttons">
            <motion.button>See the Latest Works</motion.button>
            <motion.button>Contact Me</motion.button>
          </motion.div> */}
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
      </div>    
      <motion.div className="slindingTextContainer" variants={sliderVariants} initial="initail" animate="animate" >
        Developer JavaScript
      </motion.div>
      <motion.div className="imageContainer" variants={textVariants} initial="initial" animate="animate">
    
        <img src="/hero1.png" alt="" />
 
      </motion.div>
      {/* <div className="effect">
        <img src="/colos.png" alt="" />
      </div> */}
    </div>
  );
};

export default Hero;
