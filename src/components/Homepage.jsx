import React from "react";
import "../style/Homepage.css";
import Photo from "../assets/photo.jpg";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Skill from "./Skill";
import "../style/Skill.css";
import FormButton from "./FormButton";

function Home() {
  return (
    <main>
      <FormButton />

      <section class="home" id="home">
        <div class="home-left">
          <a href="https://github.com/huseyyinsahin">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/hüseyin-şahin">
            <FaLinkedinIn />
          </a>
        </div>
        <div class="home-right">
          <h2 class="home-right-h">Hi, I am Hüseyin</h2>
          <h3 class="home-right-h">Froent end Developer</h3>
          <p class="home-right-h">
            Lorem ipsum dolor sit amet consectetur adipis elit. Tempore
            accusamus saepe eveniet eius eligendi!
          </p>
        </div>
      </section>

      <h2 class="about-h2" id="about-h2">
        About Me
      </h2>
      <section class="about">
        <div class="about-left">
          <img class="about-img" src={Photo} alt="photos" />
        </div>
        <div class="about-right">
          <p class="about-p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse illo
            tempora saepe nemo quaerat! Sunt temporibus culpa perspiciatis
            officiis voluptas deleniti velit, maxime reprehenderit itaque
            laborum rerum soluta, quod magnam. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Molestiae perferendis omnis cumque
            quae vitae laborum? reprehenderit itaque laborum rerum soluta, quod
            magnam. Lorem ipsum dolor, sit amet consectetur adipisicing eli
            reprehenderit itaque laborum rerum soluta, quod magnam. Lorem ipsum
            dolor, sit amet consectetur adipisicing. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Esse illo tempora saepe nemo quaerat!
            Sunt temporibus culpa perspiciatis officiis voluptas deleniti velit,
            maxime reprehenderit itaque laborum rerum soluta, quod magnam
          </p>
        </div>
      </section>

      <h2 class="skills-h2" id="skills-h2">
        Skills
      </h2>
      <section className="skills" id="skills">
        <Skill name="Html" max={100} />
        <Skill name="Css" max={70} />
        <Skill name="JavaScript" max={50} />
        <Skill name="React Js" max={10} />
      </section>

      <h2 class="contact-h2">Contact Me</h2>
      <section id="contact" class="contact">
        <div class="contact-left">
          <h3 class="contact-h3">Click and go to Linkedin</h3>
          <a href="https://www.linkedin.com/in/hüseyin-şahin" class="contact-a">
            <FaLinkedinIn className="contact-i" />
          </a>
        </div>
        <div class="contact-right">
          <h3 class="contact-h3">Click and go to e-mail</h3>
          <a href="" class="contact-a">
            <IoMdMail className="contact-i" />
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
