import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  const [show, setShow] = React.useState(true);

  let id1;
  let id2;
  let rid1;
  let rid2;

  function toggle() {
    if (show) {
      setShow(false);
      document.getElementById("overlay1").style.height = "100%";
      id1 = setInterval(overlay2_down, 300);
    } else {
      setShow(true);
      document.getElementById("myNav").style.height = "0%";
      rid1 = setInterval(overlay2_up, 300);
    }

    // console.log("Dikha")
  }

  function overlay2_down() {
    document.getElementById("overlay2").style.height = "99%";
    clearInterval(id1);
    id2 = setInterval(overlay3_down, 300);
    console.log("overlay2Down");
  }

  function overlay2_up() {
    document.getElementById("overlay2").style.height = "0%";
    clearInterval(rid1);
    rid2 = setInterval(overlay3_up, 300);
  }

  function overlay3_down() {
    document.getElementById("myNav").style.height = "98%";
    clearInterval(id2);
    console.log("overlay3down");
  }

  function overlay3_up() {
    document.getElementById("overlay1").style.height = "0%";
    clearInterval(rid2);
  }

  const add = (
    <div className="menu">
      <ul>
        <li>About</li>
        <li>Projects</li>
        <li>Blog</li>
        <li>Contacts</li>
      </ul>
    </div>
  );
  return (
    <>
      <nav className="navbar1">
        <div className="nav-container">
          <a className="profile-container">
            <img
              className="profile"
              src={require("../images/my-profile.jpg")}
              alt="Ooops"
            ></img>
            <span>
              <span className="pink">R</span>
              <span className="orange">a</span>
              <span className="green">h</span>
              ul
            </span>
          </a>

          <ul className="details-tabs">
            <li>
              <a className="nav-link" href="#aboutMe">
                {" "}
                About{" "}
              </a>{" "}
            </li>
            <li>
              <a className="nav-link" href="#skills">
                {" "}
                Skills{" "}
              </a>
            </li>
            <li>
              <a className="nav-link" href="#projects">
                {" "}
                Projects{" "}
              </a>
            </li>
            <li>
              <a className="nav-link" href="#contact">
                {" "}
                Contact{" "}
              </a>
            </li>
          </ul>

          <a onClick={toggle} className="toggle-button">
            <span className="bar1"></span>
            <span className="bar2"></span>
            <span className="bar3"></span>
          </a>
        </div>
      </nav>

      <div id="overlay1" className="overLay1"></div>
      <div id="overlay2" className="overLay2"></div>

      <div id="myNav" className="overlay">
        <a className="closebtn" onClick={toggle}>
          &times;
        </a>
        <div className="overlay-content">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>

        <div className="nav-social">
          <a href="https://twitter.com/RahulWa06202555">
            <FontAwesomeIcon icon={faTwitter} size="2x" color="black" />
          </a>
          <a href="https://github.com/rahul5522">
            <FontAwesomeIcon icon={faGithub} size="2x" color="black" />
          </a>
          <a href="https://www.instagram.com/rahul.waghmare/">
            <FontAwesomeIcon icon={faInstagram} size="2x" color="black" />
          </a>
          <a href="https://www.linkedin.com/in/rahul-waghmare-2b510b173/">
            <FontAwesomeIcon icon={faLinkedin} size="2x" color="black" />
          </a>
        </div>
      </div>
    </>
  );
}
