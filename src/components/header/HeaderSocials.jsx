import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/baktiar-kabir-joy/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Kabir3008" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://www.facebook.com/baktiarkabir.joy/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
