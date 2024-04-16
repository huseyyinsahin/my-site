import React, { useState } from "react";
import "../style/MyProjects.css";
import { FaBars } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import FormButton from "./FormButton";

const Projects = () => {
  const [showProject1, setShowProject1] = useState(false);
  const [showProject2, setShowProject2] = useState(false);

  const toggleProject1 = () => {
    setShowProject1(!showProject1);
    setShowProject2(false);
  };

  const toggleProject2 = () => {
    setShowProject2(!showProject2);
    setShowProject1(false);
  };

  return (
    <main>
      <FormButton />

      <h2 className="my-projects-h2">My Projects</h2>
      <section>
        <div className="project-container">
          <div className="project">
            <div className="project-github">
              <a
                title="Tıklayıp githuba gidebilirsiniz."
                href="https://github.com/huseyyinsahin/my-works"
              >
                <FaGithub className="i" />
              </a>
            </div>
            <div className="project-h3">
              <h3>my-works project</h3>
            </div>
            <button
              title="Tıklayıp açıklamayı açabilirsiniz."
              className="project-button"
              onClick={toggleProject1}
            >
              <FaBars />
            </button>
          </div>
        </div>
        <div className={`project-p ${showProject1 ? "open" : ""}`}>
          <p>
            Web geliştirmeyi öğrenmek amacıyla yaptığım html, css, javascript ve
            react js çalışmalarım ve projelerim.
          </p>
        </div>
      </section>

      <section>
        <div className="project-container">
          <div className="project">
            <div className="project-github">
              <a
                title="Tıklayıp githuba gidebilirsiniz."
                href="https://github.com/huseyyinsahin/my-site"
              >
                <FaGithub className="i" />
              </a>
            </div>
            <div className="project-h3">
              <h3>my-site project</h3>
            </div>
            <button
              title="Tıklayıp açıklamayı açabilirsiniz."
              className="project-button2"
              onClick={toggleProject2}
            >
              <FaBars />
            </button>
          </div>
        </div>
        <div className={`project-p2 ${showProject2 ? "open" : ""}`}>
          <p>
            Kendimi geliştirmek amacıyla React JS ile yaptığım site. Şuanda
            içinde bulunduğunuz sitenin kodlarıdır.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Projects;
