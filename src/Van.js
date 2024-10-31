import React from "react";
import van from "./img/Van.jpg";
import vanInterior from "./img/Van Inside.jpg";
import vanCab from "./img/Van Cab.jpg";
import vanBuild from "./img/Van Build Boys.jpg";
import vanBuild2 from "./img/Van Build.jpg";
import vanBuild3 from "./img/Van Build Boy.jpg";
import vanBuild4 from "./img/Van Build Boy 2.jpg";
import vanBuild5 from "./img/Van Build Boy 3.jpg";
import vanBuild6 from "./img/Van Build 2.jpg";
import vanBuild7 from "./img/Van Build 3.jpg";
import vanBuild8 from "./img/Van Build 4.jpg";
import vanBuild9 from "./img/Van Build Girl.jpg";
import vanClean from "./img/Van Clean.jpg";
import vanClean2 from "./img/Empty Van.jpg";
import vanInsulate1 from "./img/Insulation 2.jpg";
import vanInsulate2 from "./img/Roof Insulation.jpg";
import vanInsulate3 from "./img/Floor Insulation.jpg";
import vanInsulate4 from "./img/Floor Insulation 3.jpg";
import Travel from "./Travel";
import "./Van.css";

export default function Van() {
  return (
    <div className="Van">
      <div className="header">
        <h3>First of all, let us introduce you to our van - Wally</h3>
        <p>A 2018 Toyota Hiace</p>
        <p>
          We purchased this van and spent over a month getting it Certified
          Self-Contained so we can take her on the road and freedom camp while
          we travel around this beautiful country. Complete with a fridge,
          toilet, solar panels, roof rack, ample power, a comfy double bed,
          plenty of storage and all-round good vibes we put a lot of time and
          love into our van.
        </p>
        <p>
          Keep scrolling to check out our Van-stagram and see the building
          progress or follow our journey here.
        </p>
      </div>
      <Travel />
      <div className="img-gallery">
        <div className="row m-5">
          <div className="col-md-2 justify-content-evenly card">
            <img src={van} alt="Our van" className="img-fluid"></img>
            <p>From Auckland to Pauanui, the maiden voyage!</p>
          </div>
          <div className="col-md-2 justify-content-evenly card">
            <img src={vanInterior} alt="Our Van" className="img-fluid"></img>
            <p>A blank canvas before the build begins</p>
          </div>
          <div className="col-md-2 justify-content-evenly card">
            <img src={vanCab} alt="Our van" className="img-fluid"></img>
            <p>We'll be spending a lot of time up front</p>
          </div>
          <div className="col-md-2 justify-content-evenly card">
            <img src={vanBuild} alt="Our van" className="img-fluid"></img>
            <p>The boys hard at work on a sunny weekend</p>
          </div>
          <div className="col-md-2 justify-content-evenly card">
            <img src={vanBuild2} alt="Our Van" className="img-fluid"></img>
            <p>Cutting wood to make the bed and cupboards</p>
          </div>
        </div>
        <div className="row m-5">
          <div className="col-md-2 justify-content-evenly card">
            <img src={vanBuild7} alt="Our van" className="img-fluid"></img>
            <p>Double checking we've measured it right</p>
          </div>
          <div className="col-md-2 justify-content-evenly card">
            <img src={vanBuild3} alt="Our van" className="img-fluid"></img>
            <p>A day of painting in the sun</p>
          </div>
          <div className="col-md-2 justify-content-evenly card">
            <img src={vanBuild4} alt="Our van" className="img-fluid"></img>
            <p>May have painted the grass as much as the wood...</p>
          </div>
          <div className="col-md-2 justify-content-evenly card">
            <img src={vanBuild5} alt="Our Van" className="img-fluid"></img>
            <p>And Wayne decided to paint himself as well</p>
          </div>
          <div className="col-md-2 justify-content-evenly card">
            <img src={vanBuild9} alt="Our van" className="img-fluid"></img>
            <p>5 hours later and we've made some progress</p>
          </div>
        </div>
        <div className="row m-5">
          <div className="col-md-2 justify-content-evenly card">
            <img src={vanBuild6} alt="Our van" className="img-fluid"></img>
            <p>Triple checking we've measured it right</p>
          </div>
          <div className="col-md-2 justify-content-evenly card">
            <img src={vanBuild8} alt="Our Van" className="img-fluid"></img>
            <p>How many trips will we be taking to Bunnings??</p>
          </div>
          <div className="col-md-2 justify-content-evenly card">
            <img src={vanClean} alt="Our Van" className="img-fluid"></img>
            <p>Bubbles getting her first of many washes</p>
          </div>
          <div className="col-md-2 justify-content-evenly card">
            <img src={vanClean2} alt="Our Van" className="img-fluid"></img>
            <p>Removed the flooring, walls and roof for insulation</p>
          </div>
          <div className="col-md-2 justify-content-evenly card">
            <img src={vanInsulate1} alt="Our van" className="img-fluid"></img>
            <p>Before installing the roof insulation...</p>
          </div>
        </div>
        <div className="row m-5">
          <div className="col-md-2 justify-content-evenly card">
            <img src={vanInsulate2} alt="Our Van" className="img-fluid"></img>
            <p>Half way through installing the roof insulation 👍</p>
          </div>
          <div className="col-md-2 justify-content-evenly card">
            <img src={vanInsulate3} alt="Our Van" className="img-fluid"></img>
            <p>Van or Spaceship? 🚀 Bubbles is all wrapped up</p>
          </div>

          <div className="col-md-2 justify-content-evenly card">
            <img src={vanInsulate4} alt="Our Van" className="img-fluid"></img>
            <p>We put the floor back down, now on to the next step</p>
          </div>
          <div className="col-md-2 justify-content-evenly card">
            <img src={vanInsulate4} alt="Our Van" className="img-fluid"></img>
            <p>Coming soon...</p>
          </div>
          <div className="col-md-2 justify-content-evenly card">
            <img src={vanInsulate4} alt="Our Van" className="img-fluid"></img>
            <p>Coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
