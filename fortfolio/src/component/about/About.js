import React from "react";
import "./About.css";
import { FaAward } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { GoProject } from "react-icons/go";
import astha from "../../assets/astha.jpeg";
import { Link } from "react-router-dom";
import Experience from "../Experience/Experience";
export default function About() {
  return (
    <section>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={astha} alt="astha" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Internship</h5>
            </article>
            <article className="about_card">
              <MdOutlineComputer className="about_icon" />
              <h5>Experience</h5>
            </article>
            <article className="about_card">
              <GoProject className="about_icon" />
              <h5>Projects</h5>
            </article>
          </div>
          <p>
            Enthusiastic Android App developer and full stack java developer
            eager to contribute to team success through hard work, attention to
            detail and excellent organizational skills. Clear understanding of
            algorithm and designing and certification in java,python,Android
            development. Motivated to learn, grow and excel in IT companies.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Let's a Talk
          </Link>
        </div>
      </div>
    </section>
  );
}
