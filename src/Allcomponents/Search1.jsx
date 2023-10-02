import React from "react";
import Image from "../ALLimage/Servicepartimg.jpg";
import Image1 from "../ALLimage/logo__esa-88x40.png";
import Image2 from "..//ALLimage/logo__sel-137x40.png";
import Image3 from "../ALLimage/logo__tdna-104x40.png";
import Image4 from "../ALLimage/global-search-awards-126x40.jpg";
import Image5 from "../ALLimage/digital-growth-award-240x40.jpg";
import Image6 from "../ALLimage/uk-search-awards-1-126x40.jpg";

function Search1() {
  return (
    <div className="Searching">
      <h1>Looking for potent and progressive SEO support?</h1>
      <div className="Searchingdownpart">
        <div className="Searchingimg">
          <img src={Image} alt="#" />
        </div>
        <div className="Searchingheading">
          <h2>The search is over.</h2>
          <p>
            SUSO is the superior SEO partner for forward-thinking agencies
            across the world. By deeply embedding our specialist expertise,
            we’re redefining the model for in-house support – supercharging your
            client offering.
          </p>
          <br />
          <p>
            We’ve been trusted as an agency supplier for over nine years. Our
            global team knows how to put your needs and values first, providing
            a service that doesn’t just protect your agency name but enhances
            it.
          </p>
        </div>
      </div>
      <div className="Searching-bottom">
        <img src={Image1} alt="#" />
        <img src={Image2} alt="#" />
        <img src={Image3} alt="#" />
        <img src={Image4} alt="#" />
        <img src={Image5} alt="#" />
        <img src={Image6} alt="#" />
      </div>
    </div>
  );
}

export default Search1;
