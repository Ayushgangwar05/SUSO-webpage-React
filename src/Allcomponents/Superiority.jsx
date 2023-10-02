import React from "react";
import Image from "../ALLimage/Superitoryimg.jpg"

function Superiority() {
  return (
    <div className="superiority">
      <div className="superioritysubmain">
        <h3>
          Three pillars of <br />
          superiority
        </h3>
        <div className="superioritysubmainheading">
          <h2>01</h2>
          <div className="superioritysubmainrightside">
            <h1>Superior support</h1>
            <p>
              Working to our own partnership model, we integrate deeper and go
              further to support agencies. And we do it with frictionless ease –
              providing account managers, sales support and strategy sessions.
            </p>
          </div>
        </div>

        <div className="superioritysubmainheading">
          <h2>02</h2>
          <div className="superioritysubmainrightside">
            <h1>Superior support</h1>
            <p>
              White-label has a shoddy reputation. SUSO isn’t just sticking your
              branding on our templated reporting. We’ll align with your values,
              platforms and strategies – become a true extension of your
              business
            </p>
          </div>
        </div>

        <div className="superioritysubmainheading">
          <h2>03</h2>
          <div className="superioritysubmainrightside">
            <h1>Superior support</h1>
            <p>
              You know your clients better than us. We bond our expertise to
              your strategy. Then we deliver sophisticated solutions to complex
              challenges. The outcome? Better results for you and your client.
            </p>
          </div>
        </div>
      </div>
      <div className="superiorityimg">
        <img src={Image} alt="#" />
        <div className="superiorityimgblank"></div>
      </div>
    </div>
  );
}

export default Superiority;
