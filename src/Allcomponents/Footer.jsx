import React from "react";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer1">
        <h4>SUSO</h4>
              <h6>© SUSO DIGITAL 2023</h6>
              <div className="Footer1blank"></div>
      </div>
      <div className="Footer2">
        <h6>Contact</h6>
        <div className="Span">
          <span>
            UK<a href="/">+44 208 0599 958</a>
          </span>
          <span>
            US<a href="/"> +1 9478889997</a>
          </span>
          <a href="/">enquiries@susodigital.com</a>
          <a href="/">Privacy policy</a>
          <div className="Follow">
            <h6>Follow us on</h6>
            <a href="/">
              <i class="bi bi-linkedin"> LinkedIn</i>
            </a>
          </div>
        </div>
        <div className="BlankFooter2"></div>
      </div>
      <div className="Footer3">
        <h6>Address</h6>
        <div className="Address">
          <span>SUSO Digital</span>
          <h6>UK Office</h6>
          <h6 style={{ color: "rgb(79, 79, 78)", fontWeight: "400" }}>
            Rotunda Building, Westworks
          </h6>
          <h6 style={{ color: "rgb(79, 79, 78)", fontWeight: "400" }}>
            195 Wood Ln, London W12 7FQ
          </h6>
          <h6>Poland Office</h6>
          <a
            style={{
              color: "rgb(79, 79, 78)",
              fontWeight: "400",
              textDecoration: "none",
            }}
            href="/"
          >
            Glogowska 216
          </a>
          <h6 style={{ color: "rgb(79, 79, 78)", fontWeight: "400" }}>
            Poznan, 60-104
          </h6>
        </div>
        <div className="BlankFooter3"></div>
      </div>
    </div>
  );
}

export default Footer;
