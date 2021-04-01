import React from "react";
import {
  FaJsSquare,
  FaReact,
  FaHtml5,
  FaSass,
  FaCss3,
  FaNpm,
  FaNode,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiFirebase,
  SiNetlify,
  SiRedux,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  return (
    <section className="section skills">
      <div className="section-title">SKILLS</div>
      <div className="section-content section-icons">
        <FaHtml5 />
        <FaCss3 />
        <FaJsSquare />
        <FaReact />
        <SiRedux />
        <FaNode />
        <SiMongodb />
        <SiFirebase />
        <SiTailwindcss />
        <FaNpm />
        <FaGitAlt />
        <FaGithub />
      </div>
    </section>
  );
};

export default Skills;
