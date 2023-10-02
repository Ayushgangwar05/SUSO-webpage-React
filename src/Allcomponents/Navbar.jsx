import React from "react";

function Navbar() {
  return (
    <div className="Navbarmain" id="Navbarmain">
      <nav class="navbar navbar-expand-lg">
        <a style={{ marginTop: "3vh" }} class="navbar-brand Heading" href="/">
          SUSO
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/">
                  Partnerships Explained
                </a>
                <a class="dropdown-item" href="/">
                  Monthly Retainer SEO
                </a>
                <a class="dropdown-item" href="/">
                  Technical On-Site SEO
                </a>
                <a class="dropdown-item" href="/">
                  Strategic Link Building
                </a>
                <a class="dropdown-item" href="/">
                  SEO Audits & Consultation
                </a>
                <a class="dropdown-item" href="/">
                  Content Creation
                </a>
                <a class="dropdown-item" href="/">
                  Site Migration
                </a>
                <a class="dropdown-item" href="/">
                  Penalty Removal
                </a>
                <a class="dropdown-item" href="/">
                  International SEO
                </a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/">
                  About Us
                </a>
                <a class="dropdown-item" href="/">
                  People
                </a>
                <a class="dropdown-item" href="/">
                  Careers
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Testimonials
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Case Studies
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/">
                  Tools
                </a>
                <a class="dropdown-item" href="/">
                  Blog
                </a>
                <a class="dropdown-item" href="/">
                  SEO Textbook
                </a>
                <a class="dropdown-item" href="/">
                  SUSO Digital Podcast
                </a>
                <a class="dropdown-item" href="/">
                  SEO News
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a style={{ color: "#59f298" }} class="nav-link" href="/">
                enquiries@susodigital.com
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
