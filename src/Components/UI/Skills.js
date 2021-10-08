import React from "react";
import csharp from "../../assets/logos/csharp.svg"
import nodejs from "../../assets/logos/nodejs.svg"
import react from "../../assets/logos/react.svg"
import nestjs from "../../assets/logos/nestjs.svg"
import html5 from "../../assets/logos/html5.svg"
import css3 from "../../assets/logos/css3.svg"
import js from "../../assets/logos/js.svg"
import dotnet from "../../assets/logos/dotnet.svg"

export default function Skills() {
  return (
    <section className="bg-dark skills">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-white">
            <h3>Skills</h3>
            <p>
              I build software solutions using the following technologies,
              programming languages, frameworks, and libraries
            </p>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-wrap">
              <div className="skills-logo m-3 bg-light">
                <img src={csharp} alt="C#" className="img-fluid" />
              </div>
              <div className="skills-logo m-3 bg-light">
                <img src={nodejs} alt="NodeJS" className="img-fluid" />
              </div>
              <div className="skills-logo m-3 bg-light">
                <img src={react} alt="ReactJS" className="img-fluid" />
              </div>
              <div className="skills-logo m-3 bg-light">
                <img src={nestjs} alt="ReactJS" className="img-fluid" />
              </div>
              <div className="skills-logo m-3 bg-light">
                <img src={html5} alt="C#" className="img-fluid" />
              </div>
              <div className="skills-logo m-3 bg-light">
                <img src={css3} alt="NodeJS" className="img-fluid" />
              </div>
              <div className="skills-logo m-3 bg-light">
                <img src={js} alt="ReactJS" className="img-fluid" />
              </div>
              <div className="skills-logo m-3 bg-light">
                <img src={dotnet} alt="ReactJS" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
