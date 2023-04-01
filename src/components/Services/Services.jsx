import React from "react";
import "./Services.css";

import { BsCheck2 } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>Web App Design</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p> User Research</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p> Prototying</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p> Visual Design</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p> Usability Testing</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className="service__list-icon" />
              <p> Website Design</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>Front-End Development</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p> Back-End Deelopment</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p> Full-Stack Development</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p> Web Hosting</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p> Website Maintainance and Support</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className="service__list-icon" />
              <p> abcdefghijklmnopqrstuvwxyz</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p> abcdefghijklmnopqrstuvwxyz</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p> abcdefghijklmnopqrstuvwxyz</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p> abcdefghijklmnopqrstuvwxyz</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p> abcdefghijklmnopqrstuvwxyz</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p> abcdefghijklmnopqrstuvwxyz</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
