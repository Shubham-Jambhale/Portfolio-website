import React from "react";
import "./About.css";
import ME from "../../assets/Shubham_removed_background.png";
import { RiAwardFill } from "react-icons/ri";
import { ImUsers } from "react-icons/im";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiAwardFill className="about__icon" />
              <h5>Experience</h5>
              <small> 3+ Years Working</small>
            </article>
            <article className="about__card">
              <ImUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Project</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            I am a software developer pursuing my Master's in Computer Science.
            I have 3+ years of experience in the industry which includes new
            development, configuration, customization, and integration. My
            biggest strength is able to learn quickly and implement what I have
            learned to solve day-to-day problems. I am passionate about
            developing software and eager to know what more can the beautiful
            machine named computer can bring to the table. Currently, I am
            Pursuing Masters in Computer Science from Indiana University
            Bloomington and learning many new things{" "}
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
