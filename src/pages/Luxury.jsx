import { Link } from "react-router-dom";

import logo from "../assets/images/logo/india.png";
import banner from "../assets/images/International/luxury/luxury-71.jpeg";

import oberoi from "../assets/images/International/luxury/luxury-redefined-at-oberoi-vilases-937.jpeg";
import keralaGoa from "../assets/images/International/luxury/kerala-with-goa-luxury-tour-936.jpeg";
import rajasthanBeach from "../assets/images/International/luxury/fascinating-rajasthan-with-beach-tour-889.jpeg";

function Luxury() {
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
                <Link className="nav-link text-success" to="/luxury">
                  Luxury Holidays
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

      {/* ================= BANNER ================= */}
      <div className="row mt-5 pt-4">
        <img src={banner} alt="Luxury" width="100%" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container mt-5">
        <div className="text-center h2">
          <span className="text-warning">Luxury </span>
          <span className="text-primary">Holiday </span>
          <span className="text-success">Packages</span>
        </div>

        <p>
          Experience royalty and comfort with luxury holiday packages in India.
          Enjoy world-class hospitality, elegant stays, spa therapies, and
          exclusive sightseeing experiences.
        </p>

        <p>
          Luxury travel in India blends rich heritage with modern comfort,
          giving you unforgettable memories wrapped in elegance.
        </p>
      </div>

      {/* ================= PACKAGES ================= */}
      <div className="container mt-4">

        {/* Oberoi */}
        <div className="row shadow-lg text-center mb-4">
          <div className="col-md-3 p-3">
            <img src={oberoi} alt="Oberoi" width="100%" />
          </div>
          <div className="col-md-6 p-3">
            <h2 className="text-primary">Luxury Redefined at Oberoi Villas</h2>
            <span className="text-danger">Duration:</span> 10 Nights / 11 Days
            <p className="text-danger mt-2">
              Price – 400000 <del className="text-dark">470000</del> Rs/-
            </p>
          </div>
          <div className="col-md-3 p-3">
            <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#oberoi">
              View Detail
            </button>
          </div>
        </div>

        {/* Kerala Goa */}
        <div className="row shadow-lg text-center mb-4">
          <div className="col-md-3 p-3">
            <img src={keralaGoa} alt="Kerala Goa" width="100%" />
          </div>
          <div className="col-md-6 p-3">
            <h2 className="text-primary">Luxury of Kerala with Goa</h2>
            <span className="text-danger">Duration:</span> 8 Nights / 9 Days
            <p className="text-danger mt-2">
              Price – 150000 <del className="text-dark">200000</del> Rs/-
            </p>
          </div>
          <div className="col-md-3 p-3">
            <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#keralaGoa">
              View Detail
            </button>
          </div>
        </div>

        {/* Rajasthan */}
        <div className="row shadow-lg text-center mb-5">
          <div className="col-md-3 p-3">
            <img src={rajasthanBeach} alt="Rajasthan" width="100%" />
          </div>
          <div className="col-md-6 p-3">
            <h2 className="text-primary">Rajasthan with Beach Tour</h2>
            <span className="text-danger">Duration:</span> 10 Nights / 11 Days
            <p className="text-danger mt-2">
              Price – 120000 <del className="text-dark">140000</del> Rs/-
            </p>
          </div>
          <div className="col-md-3 p-3">
            <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#rajasthan">
              View Detail
            </button>
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

export default Luxury;
