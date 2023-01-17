import React from "react";

export default function Footer() {
  return (
    <section className="footer" id="contact">
      <div className="fheading">Contact</div>

      <div className="footer_content">
        <div className="fform">
          <div className="fnamediv">
            <input
              type="text"
              name="fname"
              id="fname"
              className="fname"
              placeholder="Your Name"
            />
          </div>

          <div className="fnamediv">
            <textarea
              className="ftext"
              id="ftext"
              cols="30"
              rows="10"
              placeholder="Your message..."
            ></textarea>
          </div>

          <div className="fnamediv">
            <a href="#" className="projbut">
              <div className="text1">Send</div>

              <span
                className="fline"
                style={{ width: "32px", zIndex: "-3" }}
              ></span>

              <span
                className="sline"
                style={{ width: "27px", zIndex: "-2" }}
              ></span>
              <span
                className="tline"
                style={{ width: "20px", zIndex: "-1" }}
              ></span>
            </a>
          </div>
        </div>

        {/* <div className="fboard">
          <div className="board">
            <blockquote>
              "Who controls the past controls the future. Who controls the
              present controls the past."
            </blockquote>

            <aside>~George Orwell</aside>
          </div>
        </div> */}
      </div>
    </section>
  );
}
