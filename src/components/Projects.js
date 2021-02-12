import React from "react";
import CustomProject from "./customHook/CustomProject";

const Projects = () => {
  return (
    <section className="section projects">
      <div className="section-title">Projects</div>
      <div className="section-content">
        <CustomProject
          title="Movie Search App"
          link="https://github.com/karantondare/react-rmdb-movie-app"
          desc="Movie app that uses TMDb API to fetch popular movies."
          usedArray={[
            "JavaScript",
            "React",
            "React Router",
            "TMDb API",
            "Styled-Components",
          ]}
        />
        <CustomProject
          title="Gamers Den"
          link="https://github.com/karantondare/react-rmdb-movie-app"
          desc="Website for gamers that shows popular and latest games."
          usedArray={[
            "JavaScript",
            "React",
            "Redux",
            "Rawg API",
            "Styled-Components",
          ]}
        />
        <CustomProject
          title="Github Fetch Popular Repos"
          link="https://github.com/karantondare/github-fetch-popular-repos"
          desc="A rect app that uses GitHub API to fetch popular repos on GitHub."
          usedArray={["HTML", "CSS", "JavaScript", "React"]}
        />
        <CustomProject
          title="Speed typing Game"
          link="https://github.com/karantondare/speed-typing-game"
          desc="A small react game that tests your typing speed"
          usedArray={["HTML", "CSS", "JavaScript", "React"]}
        />
        <CustomProject
          title="Capstone Project"
          link="https://github.com/karantondare/capstone-project"
          desc="A small ecom website when you can buy pictures."
          usedArray={[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "React Router",
            "Context API",
          ]}
        />
        <CustomProject
          title="Exchange Rate Calculator"
          link="https://github.com/karantondare/Exchange-Rate-Calculator"
          desc="Made using vanilla JavaScript"
          usedArray={["HTML", "CSS", "JavaScript", "Exchange-Rate API"]}
        />
      </div>
    </section>
  );
};

export default Projects;
