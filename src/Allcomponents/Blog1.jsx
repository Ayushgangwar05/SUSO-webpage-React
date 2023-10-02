import React from "react";
import Image from "../ALLimage/Blogimg1.jpg";
import Image1 from "../ALLimage/SuSOimg.png";
import Image2 from "../ALLimage/Blogimg2.png";

function Blog1() {
  return (
    <div className="Blog1divmain">
      <div className="Blog1">
        <section className="Blog1main">
          <a href="/">
            <img src={Image} alt="#" />
          </a>

          <div className="Blog1button">
            <button>SEO</button>
            <button>Research</button>
            <br />
            <a href="/">
              How SUSO Produces White-
              <br />
              labelled SEO Health Checks
            </a>
            <br />
            <div className="SUSOimage">
              <img src={Image1} alt="#" />
              <h6>SUSO</h6>
            </div>
            <p
              style={{
                width: "28vw",
                color: "rgb(121, 117, 117)",
                fontWeight: "500",
              }}
              className="paragraph"
            >
              Find out how SUSO produces bespoke white-labelled SEO health
              checks for our client’s websites to uncover common & critical
              issues holding them back from higher rankings.
            </p>
            <a className="blog1Atag" href="/">
              Read More
            </a>
          </div>
        </section>

        <section className="Blog1main">
          <a href="/">
            <img src={Image2} alt="#" />
          </a>

          <div className="Blog1button">
            <br />
            <a href="/">
              My 6 Week Trip to SUSO’s
              <br />
              Poland Office: Lewis Parker
            </a>
            <br />
            <div className="SUSOimage">
              <img src={Image1} alt="#" />
              <h6>SUSO</h6>
            </div>
            <p
              style={{
                width: "28vw",
                color: "rgb(121, 117, 117)",
                fontWeight: "500",
              }}
              className="paragraph"
            >
              I’m Lewis, the Head of Client Success here at SUSO. Here’s my
              little story of a trip to work in our Poznan office, discussing
              the work I focused on with our team, my exploration of the city,
              and also the wonderful people of Poland and their kindness in the
              face of a terrible war.
            </p>
            <a className="blog1Atag" href="/">
              Read More
            </a>
          </div>
        </section>
      </div>
      <button className="Buttonbottom">View More Posts</button>
    </div>
  );
}

export default Blog1;
