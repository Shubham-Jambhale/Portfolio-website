import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="blank">
        {" "}
        <FaGithub />
      </a>
      <a href="https://instagram.com" target="blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocial;
