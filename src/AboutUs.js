import React from "react";
import "./AboutUs.css";
import Van from "./Van";
import selfie from "./img/Selfie 2.jpg";

export default function AboutUs() {
  return (
    <div className="AboutUs">
      <div className="hero">
        <h1>Our New Zealand Travels</h1>
        <h2>Follow our adventure around The Land of the Long White Cloud</h2>
      </div>
      <div className="row about-us">
        <div className="col-md-6">
          <img src={selfie} alt="Wayne and Holly" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <p>
            Hi, we're Wayne and Holly, and we're currently living in New Zealand
            on a one year working holiday visa. This page is to show where we go
            on our travels, what we get up to and hopefully share some tips and
            tricks for anyone who wants to do what we're doing!
            <br />
            Wayne loves surfing and swimming. Can do pretty much any sport you
            can think of and is planning on training to do an Iron Man while
            we're here. He's the one responsible for the van build and most of
            the planning of our trip.
            <br />
            I'm Holly, a qualified yoga instructor and an animal lover. I enjoy
            running, cycling, hiking and swimming when I get the chance. I have
            recently completed a course in web development which is why I built
            this page!
          </p>
        </div>
      </div>

      <Van />
      <button className="btn btn-dark">
        <a
          href="https://www.instagram.com/hollyberrywigmore/"
          target="_blank"
          rel="noreferrer"
        >
          👩‍💻 Find us on Instagram
        </a>
      </button>
      <br />
      <button className="btn btn-dark">
        <a href="mailto:hollywigmore@outlook.com">📬Email Us</a>
      </button>
    </div>
  );
}
