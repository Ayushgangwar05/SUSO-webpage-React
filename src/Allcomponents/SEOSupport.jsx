import React from "react";
import Image from "../ALLimage/SEO IMAGE.jpg";
import "../Allcomponents/Allcsapp.css";

function SEOSupport() {
  return (
    <div className="SEOabsolute">
      <div className="SEOmain">
        <div className="leftpartseo">
          <h1>
            Superior <span style={{ color: "lightgreen" }}>SEO</span>
            <br />
            Support
          </h1>
          <h2>For the world’s best agencies</h2>
          <div
            style={{
              borderBottomStyle: "solid",
              width: "35vw",
              borderBottomColor: "lightgreen",
            }}
          ></div>
          <br />
          <br />
          <br />
          <button>Get in touch</button>
        </div>
        <div className="Rightpartseo">
          <img src={Image} alt="#" />
        </div>
      </div>
      <div className="Blankmaindiv">
        <div
          style={{
            marginLeft: "12vw",
            marginTop: "50vh",
            zIndex: "1",
            opacity: ".2",
          }}
          className="Blankdiv"
        ></div>
        <div
          style={{ marginTop: "22vh", opacity: ".2" }}
          className="Blankdiv"
        ></div>
        <div
          style={{ marginTop: "60vh", opacity: ".2" }}
          className="Blankdiv"
        ></div>
        <div
          style={{ marginTop: "30vh", opacity: ".2" }}
          className="Blankdiv"
        ></div>
        <div
          style={{
            marginTop: "1vh",
            marginLeft: "25vw",
            width: "27vw",
            height: "70vh",
            opacity: ".2",
          }}
          className="Blankdiv"
        ></div>
      </div>
    </div>
  );
}

export default SEOSupport;
