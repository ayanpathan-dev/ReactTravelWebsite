import { Link } from "react-router-dom";

import logo from "../assets/images/logo/india.png";

import slide1 from "../assets/images/International/slider/malaysia-hd.jpg";
import slide2 from "../assets/images/International/slider/singapur-hd.jpg";
import slide3 from "../assets/images/International/slider/dubai-hd.jpg";
import slide4 from "../assets/images/International/slider/thailand-hd.jpg";

import dubai from "../assets/images/International/dubai.jpg";
import singapore from "../assets/images/International/singapore.jpg";
import thailand from "../assets/images/International/thailand.jpg";
import malaysia from "../assets/images/International/malaysia.jpg";
import maldives from "../assets/images/International/maldives.jpg";

function International() {
  return (
    <div style={{ backgroundColor: "rgb(255, 244, 222)" }}>

      {/* ================= NAVBAR ================= */}
      <nav className="navbar navbar-expand-sm fixed-top" style={{ backgroundColor: "rgb(0,0,60)" }}>
        <div className="container-fluid">

          <div className="col-md-4">
            <img src={logo} alt="India" width="15%" />
            <span className="h3 text-warning"> Ghumo</span>
            <span className="h3 text-success"> India</span>
          </div>

          <div className="col-md-6">
            <ul className="navbar-nav h6">
              <li className="nav-item">
                <Link className="nav-link text-warning" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/packages">Our Packages</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-primary" to="/international">
                  International Tour
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">About Us</Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>

      {/* ================= CAROUSEL ================= */}
      <div
        id="internationalCarousel"
        className="carousel slide mt-5 pt-4"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button data-bs-target="#internationalCarousel" data-bs-slide-to="0" className="active"></button>
          <button data-bs-target="#internationalCarousel" data-bs-slide-to="1"></button>
          <button data-bs-target="#internationalCarousel" data-bs-slide-to="2"></button>
          <button data-bs-target="#internationalCarousel" data-bs-slide-to="3"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide1} className="w-100" alt="Malaysia" />
          </div>
          <div className="carousel-item">
            <img src={slide2} className="w-100" alt="Singapore" />
          </div>
          <div className="carousel-item">
            <img src={slide3} className="w-100" alt="Dubai" />
          </div>
          <div className="carousel-item">
            <img src={slide4} className="w-100" alt="Thailand" />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#internationalCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#internationalCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container mt-5">
        <div className="text-center h2">
          <span className="text-warning">International </span>
          <span className="text-primary">Tour </span>
          <span className="text-success">Packages</span>
        </div>

        <p>
          Dreaming of an international holiday? Explore hand-crafted
          international tour packages with world-class experiences.
        </p>
      </div>

      {/* ================= PACKAGES ================= */}
      <div className="container text-center mt-5">

        <h2 className="text-danger mb-4">Our International Packages</h2>

        <div className="row justify-content-center mb-4">
          <div className="col-md-5 shadow-lg p-3">
            <Link to="/dubai" className="text-decoration-none">
              <img src={dubai} alt="Dubai" width="75%" />
              <h3 className="text-danger mt-3">Dubai</h3>
              <span className="text-primary">View Info</span>
            </Link>
          </div>

          <div className="col-md-5 shadow-lg p-3">
            <Link to="/singapore" className="text-decoration-none">
              <img src={singapore} alt="Singapore" width="75%" />
              <h3 className="text-danger mt-3">Singapore</h3>
              <span className="text-primary">View Info</span>
            </Link>
          </div>
        </div>

        <div className="row justify-content-center mb-4">
          <div className="col-md-5 shadow-lg p-3">
            <Link to="/thailand" className="text-decoration-none">
              <img src={thailand} alt="Thailand" width="75%" />
              <h3 className="text-danger mt-3">Thailand</h3>
              <span className="text-primary">View Info</span>
            </Link>
          </div>

          <div className="col-md-5 shadow-lg p-3">
            <Link to="/malaysia" className="text-decoration-none">
              <img src={malaysia} alt="Malaysia" width="75%" />
              <h3 className="text-danger mt-3">Malaysia</h3>
              <span className="text-primary">View Info</span>
            </Link>
          </div>
        </div>

        <div className="row justify-content-center mb-5">
          <div className="col-md-5 shadow-lg p-3">
            <Link to="/maldives" className="text-decoration-none">
              <img src={maldives} alt="Maldives" width="75%" />
              <h3 className="text-danger mt-3">Maldives</h3>
              <span className="text-primary">View Info</span>
            </Link>
          </div>
        </div>

      </div>

      {/* ================= FOOTER ================= */}
      <div className="container-fluid">
        <div className="row text-center bg-danger text-white">
          <p>© 2020–2035 ghumoindia.com</p>
          <p>Designed & Developed by I-Soft Software Solution</p>
        </div>
      </div>

    </div>
  );
}

export default International;
