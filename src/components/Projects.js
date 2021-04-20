import React from "react";
import CustomProject from "./customHook/CustomProject";

const Projects = () => {
  return (
    <>
      <section className="section projects">
        <div className="section-title">Projects</div>
        <div className="section-content">
          <CustomProject
            title="Kodevents"
            link="https://github.com/karantondare/kodevents"
            desc="A web app to help you foster meaningful relationships within your community through events. Get people registered for your events without any hassle."
            usedArray={[
              "JavaScript",
              "React",
              "Redux",
              "React Router",
              "Semantic UI",
              "Firebase",
            ]}
          />
          <CustomProject
            title="Instalike"
            link="https://github.com/karantondare/instalike"
            desc="Fullstack social media app to share your memories with CRUD functionality. You can create your posts and like other peoples people."
            usedArray={[
              "JavaScript",
              "React",
              "Redux",
              "Express",
              "MongoDB",
              "Material UI",
            ]}
          />
          <CustomProject
            title="Kitab Khana"
            link="https://github.com/karantondare/kitab-khana"
            desc="A full stack eCommerce website to purchase books with an admin panel to manage the orders and inventory."
            usedArray={[
              "JavaScript",
              "React",
              "React Router",
              "TMDb API",
              "Styled-Components",
            ]}
          />
          <CustomProject
            title="Movie Search App"
            link="https://github.com/karantondare/react-rmdb-movie-app"
            desc="Find the latest trending movies to binge watch on your weekend!"
            usedArray={[
              "JavaScript",
              "React",
              "React Router",
              "TMDb API",
              "Styled-Components",
            ]}
          />
        </div>
      </section>
      <div className=" section-content projects-flex">
        <a
          href="https://github.com/karantondare"
          className=" underline-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>Check my other projects on github.</h4>
        </a>
      </div>
    </>
  );
};

export default Projects;
