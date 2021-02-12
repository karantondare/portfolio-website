import React from "react";

const CustomProject = ({ title, link, desc, usedArray }) => {
  return (
    <div className="project">
      <div className="project-name">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="arrow-link"
        >
          <span>{title}</span>
        </a>
      </div>
      <p>{desc}</p>
      <div className="project-used">
        {usedArray.map((used, index) => {
          return (
            <span key={index} className="project-used-item">
              {used}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default CustomProject;
