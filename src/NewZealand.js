import React from "react";

export default function NewZealand() {
  return (
    <div className="NewZealand">
      <p>
        Hi, we're Wayne and Holly, and since October 2024 we've been in New
        Zealand. This page is to show what we've been up to on our travels.
      </p>
      <p>
        First of all, let us introduce you to our van - Digby / Ste - van / Van
        Diesel / Percy. <br /> A 2018 Toyota Hiace.
      </p>
      <div className="row">
        <div className="col-md-4">
          <img
            src="../src/img/Van.jpg"
            alt="Our van"
            className="img-fluid"
          ></img>
        </div>
        <div className="col-md-4">
          <img
            src="../src/img/Van Cab.jpg"
            alt="Our Van"
            className="img-fluid"
          ></img>
        </div>
        <div className="col-md-4">
          <img
            src="../src/img/Van Inside.jpg"
            alt="Our van"
            className="img-fluid"
          ></img>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <img src="#" alt="Our van" className="img-fluid"></img>
        </div>
        <div className="col-md-4">
          <img src="#" alt="Our Van" className="img-fluid"></img>
        </div>
        <div className="col-md-4">
          <img src="#" alt="Our van" className="img-fluid"></img>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <img src="#" alt="Our van" className="img-fluid"></img>
        </div>
        <div className="col-md-4">
          <img src="#" alt="Our Van" className="img-fluid"></img>
        </div>
        <div className="col-md-4">
          <img src="#" alt="Our van" className="img-fluid"></img>
        </div>
      </div>

      <button className="btn btn-primary">Follow Us</button>
    </div>
  );
}
