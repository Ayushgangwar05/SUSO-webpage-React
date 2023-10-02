import React from "react";
import Image from "../ALLimage/8-things-to-look-out-for-when-outsourcing-seo-Will-B.png";

function Blog() {
  return (
    <div className="Blog">
      <h1>Blog</h1>
      <div className="Blogmain">
        <a href="/">
          <img src={Image} alt="#" />
        </a>
        <div className="Blogsubmain">
          <a href="/">
            8 Things To Look Out For <br />
            When Outsourcing SEO
          </a>
          <p>
            SEO nowadays requires deep technical insights backed by resource
            intensive research. Our CEO details which areas you need to evaluate
            when whitelabeling & outsourcing SEO.
          </p>
          <a className="Blogatag" href="/">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blog;
