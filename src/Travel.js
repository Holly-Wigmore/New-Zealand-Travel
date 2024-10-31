import React from "react";
import Wally from "./img/Wheres Wally.jpg";

import "./Travel.css";

export default function Travel() {
  return (
    <div className="Travel">
      <div className="content">
        <div className="row">
          <div className="col-md-4 justify-content-evenly">
            <h3 className="pb-4">South Island Road Trip</h3>

            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1y7XnOCV_Ci1WlQDYozz_lKxejPfEZFw&ehbc=2E312F&noprof=1"
              max-width="640"
              height="480"
              title="South Island Map"
              className="rounded"
            ></iframe>
          </div>
          <div className="col-md-4 justify-content-evenly list">
            <h2>Travel Route</h2>
            <ul>
              <li>Pauanui</li>
              <li>Rotorua</li>
              <li>Taupo</li>
              <li>Wellington</li>
              <li>Picton</li>
              <li>Christchurch</li>
              <li>Lake Tekapo</li>
              <li>Dunedin</li>
              <li>Bluff</li>
              <li>Milford Sound</li>
              <li>Queenstown</li>
              <li>Mount Cook</li>
              <li>Westport</li>
              <li>Nelson</li>
            </ul>
          </div>
          <div className="col-md-4 justify-content-evenly">
            <h2>Where's Wally??</h2>
            <img
              src={Wally}
              alt="Where's Wally?"
              className="img-fluid mt-5 rounded"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
