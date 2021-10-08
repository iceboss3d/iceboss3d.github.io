import React from "react";

export default function Timeline() {
  return (
    <div className="row mt-4">
      <div className="col-md-10 mx-auto">
        <div className="timeline timeline-one">
          <div className="timeline-item">
            <span className="icon icon-info icon-lg">
              <i className="fab fa-react"></i>
            </span>
            <h5 className="my-3">React</h5>
            <p>
              Exercitation photo booth stumptown tote bag Banksy, elit small
              batch freegan sed. Craft beer elit seitan exercitation, photo
              booth et 8-bit kale chips proident chillwave deep v laborum.
            </p>
          </div>
          <div className="timeline-item">
            <span className="icon icon-secondary">
              <i className="fab fa-vuejs"></i>
            </span>
            <h5 className="my-3">VueJs</h5>
            <p>
              Bootstrap. Build responsive, mobile-first projects on the web with
              the world's most popular front-end component library. Bootstrap is
              an open source toolkit for developing with HTML, CSS, and JS.
              Quickly prototype your ideas.
            </p>
          </div>
          <div className="timeline-item">
            <span className="icon icon-danger">
              <i className="fab fa-angular"></i>
            </span>
            <h5 className="my-3">Angular</h5>
            <p>
              AngularJS is a JavaScript-based open-source front-end web
              application framework mainly maintained by Google and by a
              community of individuals and corporations to address many of the
              challenges encountered in developing single-page applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
