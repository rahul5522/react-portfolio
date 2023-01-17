import React from "react";

export default function AboutMe() {
  return (
    <>
      <section className="aboutMe" id="aboutMe">
        <div className="aboutMet">
          <p>
            Hi, I am A passionate individual who always thrive to work on end to
            end products which develop sustainable and scalable social and
            technical systems to create impact.
          </p>

          <a href="" className="projbut">
            <div className="text1">My Cv</div>

            <span className="tline"></span>
            <span className="sline"></span>
            <span className="fline"></span>
          </a>
        </div>

        <div className="pro_pic">
          <img
            className="photo"
            src={require("../images/3d-avatar.png")}
            alt="Profile Avatar"
          ></img>
        </div>
      </section>
    </>
  );
}
