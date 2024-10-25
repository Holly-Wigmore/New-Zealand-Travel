import React from "react";

import "./Travel.css";

export default function Travel() {
  return (
    <div className="Travel">
      <div className="content">
        <div className="row">
          <div className="col justify-content-evenly">
            <h3 className="pb-4">South Island Road Trip</h3>
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1y7XnOCV_Ci1WlQDYozz_lKxejPfEZFw&ehbc=2E312F&noprof=1"
              width="640"
              height="480"
              title="South Island Map"
            ></iframe>
          </div>
          <div className="col justify-content-evenly list">
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
        </div>
      </div>
    </div>
  );
}
