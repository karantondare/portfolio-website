import React from "react";

const Background = () => {
  return (
    <section className="section background">
      <div className="section-title">BACKGROUND</div>
      <div className="section-content">
        <p>
          I recently graduated from{" "}
          <a href="http://www.unipune.ac.in/" className="underline-link">
            Savitiribai Phule Pune University
          </a>{" "}
          after completing Bachelor of Engineering in Electronics &
          Telecommunication Engineering.
        </p>
        <p>
          As a web developer, I enjoy bridging the gap between engineering and
          design — combining my technical knowledge with my keen eye for design
          to create a beautiful product. My goal is to always build applications
          that are scalable and efficient under the hood while providing
          engaging, pixel-perfect user experiences.
        </p>
        <p>
          <strong>When I'm not in front of a computer screen</strong>, I'm
          probably reading books, travelling or playing video games.
        </p>
        <a
          className="arrow-link"
          href="https://drive.google.com/file/d/1ab1_NHYhJeqYYwsUL0v031sdHNtYC-Uc/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          View my resume
        </a>
      </div>
    </section>
  );
};

export default Background;
