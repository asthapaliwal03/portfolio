import React from "react";
import { BsFillFileEarmarkCheckFill } from "react-icons/bs";
import "./experience.css";

export default function Experience() {
  return (
    <section>
      <h5>What Skils I Have</h5>
      <h2>My Experience</h2>
      <div className="container exp_container">
        <div className="exp_backend">
          <h2>Backend Development</h2>
          <div className="exp_content">
            <article className="exp_details">
              <BsFillFileEarmarkCheckFill className="exp_details_icon" />
              <div>
                <h3>JAVA</h3>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="exp_details">
              <BsFillFileEarmarkCheckFill className="exp_details_icon" />
              <div>
                <h3>Mysql</h3>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="exp_details">
              <BsFillFileEarmarkCheckFill className="exp_details_icon" />
              <div>
                <h3>C/C++</h3>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF BACKEND*/}
        <div className="exp_frontend">
          <h2>Frontend Development</h2>
          <div className="exp_content">
            <article className="exp_details">
              <BsFillFileEarmarkCheckFill className="exp_details_icon" />
              <div>
                <h3>HTML</h3>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="exp_details">
              <BsFillFileEarmarkCheckFill className="exp_details_icon" />
              <div>
                <h3>CSS</h3>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="exp_details">
              <BsFillFileEarmarkCheckFill className="exp_details_icon" />
              <div>
                <h3>REACT</h3>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="exp_details">
              <BsFillFileEarmarkCheckFill className="exp_details_icon" />
              <div>
                <h3>JavaScript</h3>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="exp_details">
              <BsFillFileEarmarkCheckFill className="exp_details_icon" />
              <div>
                <h3>Bootsrape</h3>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
