import { Link } from "react-router-dom";

import logo from "../assets/images/logo/india.png";
import banner from "../assets/images/International/bike-tour/friends-friendship-travel-bike.jpg";

import ladakh from "../assets/images/International/bike-tour/discover-ladakh-by-bike-948.jpeg";
import srinagar from "../assets/images/International/bike-tour/leh-ladakh-bike-trip-srinagar-to-manali-1347.jpeg";
import lahaul from "../assets/images/International/bike-tour/lahaul-spiti-bike-tour-1282.jpeg";

function BikeTour() {
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
                <Link className="nav-link text-primary" to="/bike-tour">Bike Tour</Link>
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
        <img src={banner} alt="Bike Tour" width="100%" />
      </div>

      {/* ================= INTRO ================= */}
      <div className="container mt-5">
        <div className="text-center h2">
          <span className="text-warning">Bike </span>
          <span className="text-primary">Tour </span>
          <span className="text-success">Packages</span>
        </div>

        <p>
          Exploring India on a motorcycle is an experience filled with adventure,
          thrill and breathtaking landscapes.
        </p>
      </div>

      {/* ================= PACKAGES ================= */}
      <div className="container mt-4">

        {/* Ladakh */}
        <div className="row shadow-lg text-center mb-4">
          <div className="col-md-3 p-3">
            <img src={ladakh} alt="Ladakh Bike Tour" width="100%" />
          </div>
          <div className="col-md-6 p-3">
            <h2 className="text-primary">Ladakh By Bike</h2>
            <span className="text-danger">Duration:</span> 9 Nights / 10 Days
            <p className="text-danger mt-2">
              Price – 80000 <del className="text-dark">100000</del> Rs/-
            </p>
          </div>
          <div className="col-md-3 p-3">
            <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#ladakh">
              View Detail
            </button>
          </div>
        </div>

        {/* Srinagar */}
        <div className="row shadow-lg text-center mb-4">
          <div className="col-md-3 p-3">
            <img src={srinagar} alt="Srinagar Bike Tour" width="100%" />
          </div>
          <div className="col-md-6 p-3">
            <h2 className="text-primary">Srinagar – Leh – Manali</h2>
            <span className="text-danger">Duration:</span> 8 Nights / 9 Days
            <p className="text-danger mt-2">
              Price – 70000 <del className="text-dark">80000</del> Rs/-
            </p>
          </div>
          <div className="col-md-3 p-3">
            <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#srinagar">
              View Detail
            </button>
          </div>
        </div>

        {/* Lahaul */}
        <div className="row shadow-lg text-center mb-5">
          <div className="col-md-3 p-3">
            <img src={lahaul} alt="Lahaul Spiti" width="100%" />
          </div>
          <div className="col-md-6 p-3">
            <h2 className="text-primary">Lahaul Spiti Bike Tour</h2>
            <span className="text-danger">Duration:</span> 10 Nights / 11 Days
            <p className="text-danger mt-2">
              Price – 120000 <del className="text-dark">140000</del> Rs/-
            </p>
          </div>
          <div className="col-md-3 p-3">
            <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#lahaul">
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

export default BikeTour;
