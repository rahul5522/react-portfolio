import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Main_Content() {
  return (
    <>
      <div className="circle"></div>

      <div className="m_header">
        <div className="info">
          <div className="wrapper">
            <div className="mainHeading">
              Hi I'm&ensp;
              <span className="namewrap">
                <span className="pink">R</span>
                <span className="orange">a</span>
                <span className="green">h</span>
                ul
              </span>
            </div>
          </div>
          <div className="subhead">
            <span>Web</span>
            &nbsp; Developer
          </div>
          <br />

          <a href="#projects" className="projbut">
            <div className="text1">Projects</div>

            <span className="tline"></span>
            <span className="sline"></span>
            <span className="fline"></span>
          </a>
        </div>

        <div className="s_right">
          <div className="s_box">
            <div className="item_list">
              <div className="items">
                <a
                  href="https://www.instagram.com/rahul.waghmare/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="2x"
                    color="#155263"
                  />
                </a>
              </div>
              <div className="items">
                <a
                  href="https://www.linkedin.com/in/rahul-waghmare-2b510b173/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2x"
                    color="#155263"
                  />
                </a>
              </div>
              <div className="items">
                <a href="https://github.com/rahul5522" target="_blank">
                  <FontAwesomeIcon icon={faGithub} size="2x" color="#155263" />
                </a>
              </div>
              <div className="items">
                <a href="https://twitter.com/RahulWa06202555" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} size="2x" color="#155263" />
                </a>
              </div>
            </div>

            <div className="line"></div>
          </div>
        </div>
      </div>
    </>
  );
}
