import React from "react";
import {
  FaJsSquare,
  FaReact,
  FaHtml5,
  FaCss3,
  FaNpm,
  FaNode,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiFirebase,
  SiRedux,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  return (
    <section className="section skills">
      <div className="section-title">SKILLS</div>
      <div className="section-content section-icons">
        <FaHtml5 className="icon-hover" />
        <FaCss3 className="icon-hover" />
        <FaJsSquare className="icon-hover" />
        <FaReact className="icon-hover" />
        <SiRedux className="icon-hover" />
        <FaNode className="icon-hover" />
        <SiMongodb className="icon-hover" />
        <SiFirebase className="icon-hover" />
        <SiTailwindcss className="icon-hover" />
        <FaNpm className="icon-hover" />
        <FaGitAlt className="icon-hover" />
        <FaGithub className="icon-hover" />
      </div>
    </section>
  );
};

export default Skills;
