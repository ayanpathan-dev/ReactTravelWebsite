import { Link } from "react-router-dom";

import logo from "../assets/images/logo/india.png";
import banner from "../assets/images/International/luxury/beaches-1.jpeg";

import mumbaiGoa from "../assets/images/International/luxury/mumbai-goa-tour-886.jpeg";
import keralaGoa from "../assets/images/International/luxury/kerala-with-goa-luxury-tour-936.jpeg";
import rajasthanBeach from "../assets/images/International/luxury/fascinating-rajasthan-with-beach-tour-889.jpeg";

function Beaches() {
  return (
    <div style={{ backgroundColor: "rgb(255, 244, 222)" }}>

      {/* ================= NAVBAR ================= */}
      <nav
        className="navbar navbar-expand-sm fixed-top"
        style={{ backgroundColor: "rgb(0, 0, 60)" }}
      >
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
                <Link className="nav-link text-white" to="/packages">
                  Our Packages
                </Link>
              </li>

              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle text-primary"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Experience Our
                </span>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item text-warning" to="/bike-tour">Bike Tour</Link></li>
                  <li><Link className="dropdown-item text-primary" to="/beaches">Beaches</Link></li>
                  <li><Link className="dropdown-item text-success" to="/luxury">Luxury Holidays</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-success" to="/best-time">
                  Best Time To Visit
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
        <img src={banner} alt="Beaches" width="100%" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container mt-5">
        <div className="text-center h2">
          <span className="text-warning">Beaches </span>
          <span className="text-primary">In </span>
          <span className="text-success">India</span>
        </div>

        <p>
          India has one of the longest coastlines in the world, offering beaches
          for every mood – adventure, romance, and solitude.
        </p>

        <p>
          Goa is the beach capital of India with famous beaches like Calangute,
          Anjuna, Baga, and Palolem offering water sports and nightlife.
        </p>

        <p>
          Kerala beaches provide calmness and natural beauty, while Andaman
          islands offer crystal-clear waters and scuba diving experiences.
        </p>
      </div>

      {/* ================= TOURS ================= */}
      <div className="container mt-4">

        {/* Mumbai Goa */}
        <div className="row shadow-lg text-center mb-4">
          <div className="col-md-3 p-3">
            <img src={mumbaiGoa} alt="Mumbai Goa" width="100%" />
          </div>
          <div className="col-md-6 p-3">
            <h2 className="text-primary">Mumbai – Goa Tour</h2>
            <span className="text-danger">Duration:</span> 10 Nights / 11 Days
            <p className="text-danger mt-2">
              Price – 200000 <del className="text-dark">270000</del> Rs/-
            </p>
          </div>
          <div className="col-md-3 p-3">
            <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#mumbaiGoa">
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
            <h2 className="text-primary">Kerala With Goa</h2>
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

        {/* Rajasthan Beach */}
        <div className="row shadow-lg text-center mb-5">
          <div className="col-md-3 p-3">
            <img src={rajasthanBeach} alt="Rajasthan Beach" width="100%" />
          </div>
          <div className="col-md-6 p-3">
            <h2 className="text-primary">Rajasthan With Beach</h2>
            <span className="text-danger">Duration:</span> 10 Nights / 11 Days
            <p className="text-danger mt-2">
              Price – 120000 <del className="text-dark">140000</del> Rs/-
            </p>
          </div>
          <div className="col-md-3 p-3">
            <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#rajasthanBeach">
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

export default Beaches;
