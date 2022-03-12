import React from "react";
import cv from "../../assets/cv.pdf";
import { Link } from "react-router-dom";
export default function Cta() {
  return (
    <div class="cta">
      <Link to={cv} target="_blank" download className="btn">
        Download CV
      </Link>
      <Link to="/contact" className="btn btn-primary">
        Let's talk
      </Link>
    </div>
  );
}
