import React from "react";

export default function Hero() {
  return (
    <section className="container hero" id="#home">
      <div>
        <h1 className="text-center">
          <small>Hello, I'm</small>
          <br />
          Ayebakuro Ombu
        </h1>
        <h3 className="text-center">
          <small>Full-Stack Software Developer</small>
        </h3>
        <div className="btn-group d-flex justify-content-center">
          <a
            href="https://github.com/iceboss3d"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-dark mt-4"
          >
            <i class="bx bxl-github"></i> GitHub
          </a>
          <a
            href="https://twitter.com/iceboss3d"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-dark mt-4"
          >
            <i class="bx bxl-twitter"></i> Twitter
          </a>
        </div>
      </div>
    </section>
  );
}
