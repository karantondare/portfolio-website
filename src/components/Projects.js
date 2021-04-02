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
            desc="Find out the latest tech events happening in-person and remote. Interested in hosting an event? Create an event and get people registered with a few simple steps."
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
          <CustomProject
            title="Gamers Den"
            link="https://github.com/karantondare/gamers-den"
            desc="Don't know the hottest trending games on the market? Gamers Den helps you find the latest top games. Find the upcoming titles, so that you can add them to your list."
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
            desc="A react app that uses GitHub API to fetch popular repos on GitHub for various programming  languages and technologies."
            usedArray={["HTML", "CSS", "JavaScript", "React"]}
          />
          <CustomProject
            title="Speed typing Game"
            link="https://github.com/karantondare/speed-typing-game"
            desc="Do you know how fast you can type? "
            usedArray={["HTML", "CSS", "JavaScript", "React"]}
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
