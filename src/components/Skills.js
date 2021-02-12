import React from "react";
import {
  FaJsSquare,
  FaReact,
  FaHtml5,
  FaSass,
  FaCss3,
  FaNpm,
  FaAws,
  FaNode,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiFirebase, SiNetlify } from "react-icons/si";

const Skills = () => {
  return (
    <section className="section skills">
      <div className="section-title">SKILLS</div>
      <div className="section-content section-icons">
        <FaHtml5 />
        <FaCss3 />
        <FaJsSquare />
        <FaReact />
        <FaNode />
        <SiFirebase />
        <FaSass />
        <FaAws />
        <FaNpm />
        <FaGitAlt />
        <FaGithub />
        <SiNetlify />
      </div>
    </section>
  );
};

export default Skills;
