import React, { Component, Fragment } from "react";
import "./Portfolio.scss";
import Me from "../assets/img/profile-img.jpg";
import HTML from "../assets/img/html.png";
import CSS from "../assets/img/css.png";
import BS from "../assets/img/bootstrap.png";
import JS from "../assets/img/js.png";
import TS from "../assets/img/typescript.png";
import ANGULAR from "../assets/img/ang.png";
import RECACT from "../assets/img/react.png";
import PG from "../assets/img/pgsql.png";
import NODE from "../assets/img/node.png";
import SEQ from "../assets/img/sequelize.png";
import ActionHero from "../assets/img/actionhero.png";
import GIT from "../assets/img/git.png";
import ProgressBar from "@ramonak/react-progress-bar";
import { scroller } from "react-scroll";

export default class App extends Component {
  onScrollTo(id) {
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }
  render() {
    return (
      <Fragment>
        {/* <button type="button" className="mobile-nav-toggle d-xl-none">
          <i className="fas fa-list"></i>
        </button> */}

        <header
          id="header"
          className="d-flex flex-column justify-content-center"
        >
          <nav className="nav-menu">
            <ul>
              <li onClick={() => this.onScrollTo("hero")}>
                <a href="#hero">
                  <i className="fas fa-home"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => this.onScrollTo("about")}>
                  <i className="fas fa-user"></i>
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="#skills" onClick={() => this.onScrollTo("skills")}>
                  <i className="fas fa-server"></i>
                  <span>skills</span>
                </a>
              </li>
              <li>
                <a href="#resume" onClick={() => this.onScrollTo("resume")}>
                  <i className="fas fa-file"></i>
                  <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => this.onScrollTo("contact")}>
                  <i className="fas fa-envelope"></i>
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <section
          id="hero"
          className="d-flex flex-column justify-content-center"
        >
          <div className="container" data-aos="zoom-in">
            <h1 className="text-left">Meraj Seraji</h1>
            <p className="text-left">
              {/* I'm{" "} */}
              I'm Fullstack-developer
              <span
                className="typed"
                data-typed-items="Designer, Developer, Freelancer, Photographer"
              ></span>
            </p>
          </div>
        </section>

        <main id="main">
          <section id="about" className="about">
            <div className="section-title">
              <h2>About</h2>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="div-img-bg">
                  <div className="about-img">
                    <img src={Me} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content">
                <div className="about-descr">
                  <p className="p-heading">
                    I have more than three years work experience in front-end &
                    have a good knowledge of HTML, CSS & JavaScript language &
                    possess a good knowledge of computer software packages
                    (frameworks and tools) that are used in today’s technology
                  </p>
                  <p className="separator">
                    On a personal level, I have the ability to adapt to any type
                    of team environment, I am team oriented & get along with
                    others when working in a group setting. I also have the
                    ability to work independently while staying on schedule &
                    meeting those tight deadlines
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="skills" className="skills section-bg">
            <div className="section-title pb-2">
              <h2>Skills</h2>
            </div>
            <div className="row skills-content">
              <div className="col-lg-6">
                <div className="progress">
                  <div className="skill">
                    <img src={HTML} alt="HTML" />
                  </div>
                  <ProgressBar
                    completed={100}
                    bgcolor="#0563bb"
                    height="15px"
                    labelSize="10px"
                  />
                </div>
                <div className="progress">
                  <div className="skill">
                    <img src={CSS} alt="CSS" />
                  </div>
                  <ProgressBar
                    completed={85}
                    bgcolor="#0563bb"
                    height="15px"
                    labelSize="10px"
                  />
                </div>
                <div className="progress">
                  <div className="skill">
                    <img src={BS} alt="BS" />
                  </div>
                  <ProgressBar
                    completed={80}
                    bgcolor="#0563bb"
                    height="15px"
                    labelSize="10px"
                  />
                </div>
                <div className="progress">
                  <div className="skill">
                    <img src={JS} alt="JS" />
                  </div>
                  <ProgressBar
                    completed={100}
                    bgcolor="#0563bb"
                    height="15px"
                    labelSize="10px"
                  />
                </div>
                <div className="progress">
                  <div className="skill">
                    <img src={TS} alt="TS" />
                  </div>
                  <ProgressBar
                    completed={100}
                    bgcolor="#0563bb"
                    height="15px"
                    labelSize="10px"
                  />
                </div>
                <div className="progress">
                  <div className="skill">
                    <img src={ANGULAR} alt="ANGULAR" />
                  </div>
                  <ProgressBar
                    completed={90}
                    bgcolor="#0563bb"
                    height="15px"
                    labelSize="10px"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="progress">
                  <div className="skill">
                    <img src={RECACT} alt="RECACT" />
                  </div>
                  <ProgressBar
                    completed={30}
                    bgcolor="#0563bb"
                    height="15px"
                    labelSize="10px"
                  />
                </div>
                <div className="progress">
                  <div className="skill">
                    <img src={PG} alt="PG" />
                  </div>
                  <ProgressBar
                    completed={70}
                    bgcolor="#0563bb"
                    height="15px"
                    labelSize="10px"
                  />
                </div>
                <div className="progress">
                  <div className="skill">
                    <img src={NODE} alt="NODE" />
                  </div>
                  <ProgressBar
                    completed={60}
                    bgcolor="#0563bb"
                    height="15px"
                    labelSize="10px"
                  />
                </div>
                <div className="progress">
                  <div className="skill">
                    <img src={SEQ} alt="SEQ" />
                  </div>
                  <ProgressBar
                    completed={65}
                    bgcolor="#0563bb"
                    height="15px"
                    labelSize="10px"
                  />
                </div>
                <div className="progress">
                  <div className="skill">
                    <img src={ActionHero} alt="ActionHero" />
                  </div>
                  <ProgressBar
                    completed={50}
                    bgcolor="#0563bb"
                    height="15px"
                    labelSize="10px"
                  />
                </div>
                <div className="progress">
                  <div className="skill">
                    <img src={GIT} alt="GIT" />
                  </div>
                  <ProgressBar
                    completed={30}
                    bgcolor="#0563bb"
                    height="15px"
                    labelSize="10px"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="resume" className="resume">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Resume</h2>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <h3 className="resume-title">Sumary</h3>
                  <div className="resume-item pb-0">
                    <h4>Pazh</h4>
                    <h5>2019 - present</h5>
                    <ul>
                      <li>
                        software expert in the front-end and in the back-end
                      </li>
                      <li>senior programmer of the company development</li>
                      <li>develope comprehensive enterprise portal projects</li>
                    </ul>
                  </div>

                  <h3 className="resume-title">Education</h3>
                  <div className="resume-item">
                    <h4>Bachelor’s Degree</h4>
                    <h5>2016 - 2021</h5>
                    <p>
                      Islamic Azad University Of MashhadSoftware Engineering
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h3 className="resume-title">Professional Experience</h3>
                  <div className="resume-item pb-0">
                    <h4>Online printing system for moein printHouse</h4>
                    <h5>
                      2020 - 2021
                      <em>
                        <a
                          target="_blank"
                          href="https://moeinchap.com"
                          rel="noreferrer"
                          className="ml-1"
                        >
                          www.moeinchap.com
                        </a>
                      </em>
                    </h5>
                    <ul>
                      <li>
                        design, development, and implementation of the graphic,
                        layout, and production
                      </li>
                    </ul>
                  </div>
                  <div className="resume-item">
                    <h4>Enterprise resource planning (ERP)</h4>
                    <h5>2019 - present</h5>
                    <ul>
                      <li>
                        design, development, and implementation of the graphic,
                        layout, and production some of modules like: Exam,
                        Assessment, SessionManagement, AttendanceSystem and
                        more, for organization like
                        <em>
                          <a
                            target="_blank"
                            href="http://tpgm.ir"
                            rel="noreferrer"
                            className="mx-1"
                          >
                            Toos Power Generation Management
                          </a>
                        </em>
                        and
                        <em>
                          <a
                            target="_blank"
                            href="http://trec.co.ir"
                            rel="noreferrer"
                            className="mx-1"
                          >
                            Tehran Regional Electricity
                          </a>
                        </em>
                        and
                        <em>
                          <a
                            target="_blank"
                            href="http://brec.ir"
                            rel="noreferrer"
                            className="mx-1"
                          >
                            Bakhtar Regional Electricity
                          </a>
                        </em>
                        and other companies.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Contact</h2>
              </div>

              <div className="row mt-1">
                <div className="col-lg-6">
                  <div className="info">
                    <div className="email ">
                      <i className="fas fa-envelope"></i>
                      <h4>Email:</h4>
                      <p>merajsaraji@yahoo.com</p>
                      <p>merajseraji.1047@gmail.com</p>
                    </div>
                    <div className="linkedin ">
                      <i className="fab fa-linkedin"></i>
                      <h4>Linkedin:</h4>
                      <p>
                        <a
                          target="_blank"
                          href="https://linkedin.com/in/meraj-seraji-56b655197"
                          rel="noreferrer"
                        >
                          <em>my linkedin account</em>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="info">
                    <div className="telegram ">
                      <i className="fab fa-telegram"></i>
                      <h4>Telegram:</h4>
                      <p>@mrjsrj</p>
                    </div>
                    <div className="phone">
                      <i className="fas fa-phone"></i>
                      <h4>Call:</h4>
                      <p>+989155967791</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer id="footer">
          <div className="container">
            <div className="credits">
              Designed with <i className="fas fa-heart text-danger"></i> by
              Meraj Seraji
            </div>
          </div>
        </footer>
      </Fragment>
    );
  }
}
