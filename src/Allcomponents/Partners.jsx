import React from "react";
import Image from "../ALLimage/Sticky-logo-2020-scaled-1-1-904x272.jpg";
import Image1 from "../ALLimage/Georgina-1-240x240.jpg";

function Partners() {
  return (
    <div className="Partnersmain">
      <section className="Partnersection">
        <div className="Partnersubmain">
          <h1>
            Big name agency
            <br /> partners with <br />
            happy clients
          </h1>
          <p>
            We’ve partnered with some big names. Brands and agencies whose
            strong reputations needed to be protected as we sought to increase
            their exposure. Here are just some of them.
          </p>
        </div>
      </section>
      <section className="Partnersectionright">
        <div className="Partnersectiondivright">
          <img src={Image} alt="#loading" />
          <h6>
            “Choosing SUSO as our SEO partner has been a brilliant decision”
          </h6>
          <div className="Partnersectionsubdivright">
            <img src={Image1} alt="#loading" />
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

export default Partners;
