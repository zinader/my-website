import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <h1>Pulkit Aggarwal</h1>
      <div className="github">
        <a
          href="https://github.com/zinader/leetcode_company_wise"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div className="linkedin">
        <a
          href="https://www.linkedin.com/in/pulkit07/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Header;
