import React from "react";

const Header = () => {
  return (
    <header className="intro">
      <h1 className="intro-hello">
        नमस्कार! <span className="emoji">🙏🏼</span>
      </h1>
      <h2 className="intro-tagline">
        I'm <span className="name">Karan Tondare</span>, a front-end engineer
        based in Pune, India. I love building beautiful interfaces, web apps,
        and everything in between!
      </h2>
      <h3 className="intro-contact">
        <span>Get in touch 👉🏼</span>{" "}
        <span>
          <a
            href="mailto:karanstondare999@gmail.com"
            className="highlight-link"
          >
            karanstondare999@gmail.com
          </a>
        </span>
      </h3>
    </header>
  );
};

export default Header;
