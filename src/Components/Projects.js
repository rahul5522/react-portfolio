import React from "react";

export default function Project() {
  return (
    <section className="projects" id="projects">
      <div className="pheading">
        <span className="pink">P</span>
        <span className="orange">R</span>
        <span className="green">O</span>JECTS
      </div>
    
    <div className="pcontent">
        <div className="card card-1">
          <div className="card_content bgblue">
            <div className="ctitle">Bird App</div>
            <div className="ccontext">
              BirdApp is full Stack MERN application basically the clone of twitter where user can login make friends and share their thoughts via tweets.The UI is build using React[Material UI] & for state i have used management Redux.Backend is created using Express JS and Mongo DB is used for storing app data.
            </div>

            <br />

            <a
              href="https://birdapp-s7om.onrender.com/"
              className="projbut"
              target="_blank"
            >
              <div className="text1">Visit</div>

              <span className="tline"></span>
              <span className="sline"></span>
              <span className="fline"></span>
            </a>
          </div>
        </div>

      <div className="pcontent">
        <div className="card card-1">
          <div className="card_content bgblue">
            <div className="ctitle">Jupiter TV</div>
            <div className="ccontext">
              Jupiter TV is one stop entertainment hub for you, you will find
              all the latest , famous and trending movies & TV series here. This
              website is build using React and Redux.
            </div>

            <br />

            <a
              href="https://jupiter-tv.netlify.app/"
              className="projbut"
              target="_blank"
            >
              <div className="text1">Visit</div>

              <span className="tline"></span>
              <span className="sline"></span>
              <span className="fline"></span>
            </a>
          </div>
        </div>

        <div className="card card-1">
          <div className="card_content bgyellow">
            <div className="ctitle">Fitness Buddy</div>
            <div className="ccontext">
              Fitness Buddy will help you to gain some muscles. fitness buddy
              have varieties of excercises.Fitness buddy is build using react
              and all the excercises fetch from API.
            </div>

            <br />

            <a
              href="https://fitness-budy.netlify.app/"
              className="projbut"
              target="_blank"
            >
              <div className="text1">Visit</div>

              <span className="tline"></span>
              <span className="sline"></span>
              <span className="fline"></span>
            </a>
          </div>
        </div>

        <div className="card card-1">
          <div className="card_content bgpink">
            <div className="ctitle">Tailor Buddy</div>
            <div className="ccontext">
              Tailor Buddy is QR based tailor management web-app.It has
              integration with Google calender to manage the delivery schedule.
              Build with HTML,css,MySQL,PHP.
            </div>

            <br />

            <a
              href="https://raniladiestailor.42web.io/?i=1"
              className="projbut"
              target="_blank"
            >
              <div className="text1">Visit</div>

              <span className="tline"></span>
              <span className="sline"></span>
              <span className="fline"></span>
            </a>
          </div>
        </div>

        <div className="card card-1">
          <div className="card_content bgpink">
            <div className="ctitle">Tenzies Game</div>
            <div className="ccontext">
              In this game user has to roll the dice until all dice are the
              same.This game has been made using React and pure css. Go and play
              the game and break my record of 7secs.
            </div>

            <br />

            <a
              href="https://tenzies-game-rahulw.netlify.app/"
              className="projbut"
              target="_blank"
            >
              <div className="text1">Visit</div>

              <span className="tline"></span>
              <span className="sline"></span>
              <span className="fline"></span>
            </a>
          </div>
        </div>

        <div className="card card-2">
          <div className="card_content bgblue">
            <div className="ctitle">Meme Generator</div>
            <div className="ccontext">
              This is Meme-Generator web-app through which you can generate
              customize memes. This web-app made using React and CSS and the
              meme images are fetched from API.
            </div>

            <br />

            <a
              href="https://memegeneratorrw.netlify.app/"
              className="projbut"
              target="_blank"
            >
              <div className="text1">Visit</div>

              <span className="tline"></span>
              <span className="sline"></span>
              <span className="fline"></span>
            </a>
          </div>
        </div>

        <div className="card card-3">
          <div className="card_content bgyellow">
            <div className="ctitle">Quiz App</div>
            <div className="ccontext">
              This is quiz web-app made with React. The quiz questions are
              fetched from API. For design purpose css is used.
            </div>

            <br />
            <br />

            <a
              href="https://quizyrw.netlify.app/"
              className="projbut"
              target="_blank"
            >
              <div className="text1">Visit</div>

              <span className="tline"></span>
              <span className="sline"></span>
              <span className="fline"></span>
            </a>
          </div>
        </div>

        <div className="card card-4">
          <div className="card_content  bgyellow">
            <div className="ctitle">Airbnb Clone</div>
            <div className="ccontext">
              This is Airbnb clone made with React.
            </div>

            <br />
            <br />
            <br />
            <br />

            <a
              href="https://airbnbclonerw.netlify.app/"
              className="projbut"
              target="_blank"
            >
              <div className="text1">Visit</div>

              <span className="tline"></span>
              <span className="sline"></span>
              <span className="fline"></span>
            </a>
          </div>
        </div>

        <div className="card card-5">
          <div className="card_content bgpink">
            <div className="ctitle">Todo</div>
            <div className="ccontext">
              This is Todo web-app made with React where you can store your
              todos temporarily.
            </div>

            <br />
            <br />
            <br />

            <a
              href="https://todo-listrw.netlify.app/"
              className="projbut"
              target="_blank"
            >
              <div className="text1">Visit</div>

              <span className="tline"></span>
              <span className="sline"></span>
              <span className="fline"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
