import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        <div className="top">
          <span>Created by </span>
        </div>
        <div className="bottom">
          <span> Karan Tondare 🤟🏼</span> <span>2021</span>
        </div>
      </div>

      <div className="footer-links">
        <a
          href="mailto:karanstondare999@gmail.com"
          title="email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text">email</span>
        </a>
        <a
          href="https://github.com/karantondare"
          title="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text">github</span>
        </a>
        <a
          href="https://www.linkedin.com/in/karantondare/"
          title="linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text">linkedin</span>
        </a>
        <a
          href="https://twitter.com/karantondare"
          title="twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text">twitter</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
