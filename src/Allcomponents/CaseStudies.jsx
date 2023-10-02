import React from "react";
import Image from "../ALLimage/manufacturer.jpg";
import Image1 from "../ALLimage/finance.jpg";

function CaseStudies() {
  return (
    <div className="CaseStudies">
      <h1>Case Studies</h1>
      <section className="CaseStudiessubsection">
        <div className="CaseStudiessubsectiondiv">
          <a href="/">
            Growing Organic Traffic by 777%: B2B <br />
            Manufacturer Case Study
          </a>
          <p>
            Learn how we grew this B2B manufacturer’s organic traffic by 777%
            and top 10 keyword visibility by 910% within twelve months.
          </p>
          <br />
          <button>Read Full Story</button>
        </div>
        <div className="CaseStudiesimg">
          <a href="/">
            <img src={Image} alt="#" />
          </a>
        </div>
      </section>
      <br />
      <br />
      <section style={{ gap: "1vw" }} className="CaseStudiessubsection">
        <div style={{ marginLeft: "12vw" }} className="CaseStudiesimg">
          <a href="/">
            <img style={{ width: "33vw" }} src={Image1} alt="#" />
          </a>
        </div>
        <div style={{ marginLeft: "4vw" }} className="CaseStudiessubsectiondiv">
          <a style={{ textDecoration: "none" }} href="/">
            Growing Monthly Organic Traffic by 221.74%:
            <br /> Finance Case Study
          </a>
          <p>
            Learn how we grew this finance website’s monthly organic traffic by
            221.74%.
          </p>
          <br />
          <button>Read Full Story</button>
        </div>
      </section>
    </div>
  );
}

export default CaseStudies;
