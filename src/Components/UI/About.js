import React from "react";
import portrait from "../../assets/portrait-square.jpg";

export default function About() {
  return (
    <section className="bg-light py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src={portrait}
              alt="Ayebakuro Ombu"
              className="img-fluid portrait"
            />
          </div>
          <div className="col-md-6">
            <h3>About Me</h3>
            <p>
              I am a fullstack software developer who constantly seeks out
              innovative solutions to everyday problems. In my two years in this
              industry, I've honed my analytical thinking and collaboration
              skills, and I love working with a team.
            </p>
            <p>
              I have worked as a fullstack software developer across various
              industries; including Finance, Real Estate, MedTech, etc.
            </p>
            <div className="btn-group">
              <a
                href="https://github.com/iceboss3d"
                class="btn btn-dark mr-2"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bx bxl-github"></i> GitHub
              </a>
              <a
                href="https://github.com/iceboss3d"
                class="btn btn-outline-dark"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bx bxl-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
