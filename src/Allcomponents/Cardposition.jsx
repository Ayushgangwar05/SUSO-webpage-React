import React from "react";
import Image from "../ALLimage/Bravacos_Chris-1-240x240.jpg";
import Image1 from "../ALLimage/bravogrouplogo-1-1-1008x97.jpeg";
import Image2 from "../ALLimage/ifocus-1.png";
import Image3 from "../ALLimage/Josh-Selig-Votaw-e1657297569638-570x570-1-240x240.jpg";

function Cardposition() {
  return (
    <div style={{ gap: "20vw" }} className="Partnersmain">
      <section style={{ marginLeft: "12vw" }} className="Partnersectionright">
        <div className="Partnersectiondivright">
          <img src={Image1} alt="#loading" />
          <h6>
            “Choosing SUSO as our SEO partner has been a brilliant decision”
          </h6>
          <div className="Partnersectionsubdivright">
            <img src={Image} alt="#loading" />
            <div className="Partnersectionsubpartdivright">
              <a href="/">Georgina Mathew</a>
              <p>Client Services</p>
              <p>Director – Sticky</p>
              <p>Content</p>
            </div>
          </div>
          <br />
          <a className="Partneratag" href="/">
            Read full comment
          </a>
        </div>
        <button>More Testimonials</button>
      </section>
      <section style={{ marginTop: "13vh" }} className="Partnersectionright">
        <div className="Partnersectiondivright">
          <img src={Image2} alt="#loading" />
          <h6>
            “Choosing SUSO as our SEO partner has been a brilliant decision”
          </h6>
          <div className="Partnersectionsubdivright">
            <img src={Image3} alt="#loading" />
            <div className="Partnersectionsubpartdivright">
              <a href="/">Georgina Mathew</a>
              <p>Client Services</p>
              <p>Director – Sticky</p>
              <p>Content</p>
            </div>
          </div>
          <br />
          <a className="Partneratag" href="/">
            Read full comment
          </a>
        </div>
      </section>
    </div>
  );
}

export default Cardposition;
