import React from "react";
import csharp from "../../assets/logos/csharp.svg";
import nodejs from "../../assets/logos/nodejs.svg";
import react from "../../assets/logos/react.svg";
import nestjs from "../../assets/logos/nestjs.svg";
import html5 from "../../assets/logos/html5.svg";
import css3 from "../../assets/logos/css3.svg";
import js from "../../assets/logos/js.svg";
import dotnet from "../../assets/logos/dotnet.svg";

export default function Projects() {
  return (
    <section className="py-4 bg-light">
      <div className="container">
        <h3>Projects</h3>
        <div className="d-flex flex-wrap">
          <div className="card project-card">
            <div className="card-body">
              <h5>Hotel Management App</h5>
              <p className="card-text">
                An Hotel Management App that lets hotel owners manage room
                bookings and reservations.
              </p>
              <h6>Technologies</h6>
              <div className="project-tech">
                <img src={dotnet} className="img-fluid technologies-logo-circle" alt="ASP.NET"/>
                <img src={csharp} className="img-fluid technologies-logo-circle" alt="C#"/>
                <img src={html5} className="img-fluid technologies-logo-circle" alt="HTML5"/>
                <img src={css3} className="img-fluid technologies-logo-circle" alt="CSS3"/>
              </div>
            </div>
          </div>
          <div className="card project-card">
            <div className="card-body">
              <h5>Hotel Management App</h5>
              <p className="card-text">
                An Hotel Management App that lets hotel owners manage room
                bookings and reservations.
              </p>
              <h6>Technologies</h6>
              <div className="project-tech">
                <img src={dotnet} className="img-fluid technologies-logo-circle" alt="ASP.NET"/>
                <img src={csharp} className="img-fluid technologies-logo-circle" alt="C#"/>
                <img src={html5} className="img-fluid technologies-logo-circle" alt="HTML5"/>
                <img src={css3} className="img-fluid technologies-logo-circle" alt="CSS3"/>
              </div>
            </div>
          </div>
          <div className="card project-card">
            <div className="card-body">
              <h5>Hotel Management App</h5>
              <p className="card-text">
                An Hotel Management App that lets hotel owners manage room
                bookings and reservations.
              </p>
              <h6>Technologies</h6>
              <div className="project-tech">
                <img src={dotnet} className="img-fluid technologies-logo-circle" alt="ASP.NET"/>
                <img src={csharp} className="img-fluid technologies-logo-circle" alt="C#"/>
                <img src={html5} className="img-fluid technologies-logo-circle" alt="HTML5"/>
                <img src={css3} className="img-fluid technologies-logo-circle" alt="CSS3"/>
              </div>
            </div>
          </div>
          <div className="card project-card">
            <div className="card-body">
              <h5>Hotel Management App</h5>
              <p className="card-text">
                An Hotel Management App that lets hotel owners manage room
                bookings and reservations.
              </p>
              <h6>Technologies</h6>
              <div className="project-tech">
                <img src={dotnet} className="img-fluid technologies-logo-circle" alt="ASP.NET"/>
                <img src={csharp} className="img-fluid technologies-logo-circle" alt="C#"/>
                <img src={html5} className="img-fluid technologies-logo-circle" alt="HTML5"/>
                <img src={css3} className="img-fluid technologies-logo-circle" alt="CSS3"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
