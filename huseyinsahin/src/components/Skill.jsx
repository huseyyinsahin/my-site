import React, { useEffect, useState } from "react";

const Skill = ({ name, max }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const step = max / 100;
      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          const nextProgress = prevProgress + step;
          return nextProgress >= max ? max : nextProgress;
        });
      }, 20);
      return () => clearInterval(timer);
    };

    const scrollControl = () => {
      const loader = document
        .getElementById(`bar${name}`)
        .getBoundingClientRect();

      if (loader.top < window.innerHeight && progress === 0) {
        updateProgress();
        window.removeEventListener("scroll", scrollControl);
      }
    };

    window.addEventListener("scroll", scrollControl);

    return () => {
      window.removeEventListener("scroll", scrollControl);
    };
  }, [max, name, progress]);

  return (
    <div className="loading">
      <h3 className="loading-h3">{name}</h3>
      <div className="bar" id={`bar${name}`}>
        {Math.floor(progress)}%
      </div>
      <hr className="loadingBarGround" />
      <hr
        className="loadingBarFront"
        style={{ width: `${progress}%` }}
        id={`front${name}`}
      />
    </div>
  );
};

export default Skill;
