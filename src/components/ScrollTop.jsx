import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa6";
import "../style/ScrollTop.css";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={isVisible ? "scrollTopButton scroll" : "scrollTopButton"}
      onClick={scrollToTop}
    >
      <FaAngleUp className="top-i" />
    </button>
  );
};

export default ScrollTop;
