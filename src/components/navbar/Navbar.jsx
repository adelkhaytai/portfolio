import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
         Portfolio
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/profile.php?id=100093430268005">
            {" "}
            <img src="/facebook.png" alt="" />{" "}
          </a>
          <a href="https://www.instagram.com/adelkhayati889/">
            {" "}
            <img src="/instagram.png" alt="" />{" "}
          </a>
          <a href="https://github.com/adelkhaytai">
            {" "}
            <img src="/git.png" alt="" />{" "}
          </a> <a href="https://www.linkedin.com/in/adel-khayati/">
            {" "}
            <img src="/link.png" alt="" />{" "}
          </a>
          {/* <a href="#">
            {" "}
            <img src="/dribbble.png" alt="" />{" "}
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
