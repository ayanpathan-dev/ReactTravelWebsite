import { Link } from "react-router-dom";

import logo from "../assets/images/logo/india.png";
import banner from "../assets/images/International/country 5/maldives.jpg";

import pkg1 from "../assets/images/International/country 5/6-nights-7-days-sri-lanka-and-maldives-tour-package-1500.jpeg";
import pkg2 from "../assets/images/International/country 5/budget-trip-to-maldives-1411.jpeg";
import pkg3 from "../assets/images/International/country 5/maldives-and-sri-lanka-tour-1326.jpeg";

function Maldives() {
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
                  International Tours
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
        <img src={banner} alt="Maldives" width="100%" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container mt-5">
        <div className="text-center h2">
          <span className="text-warning">Maldives </span>
          <span className="text-primary">Tour </span>
          <span className="text-success">Packages</span>
        </div>

        <p>
          Experience tropical island vibes with Maldives tour packages.
          Enjoy white sandy beaches, overwater villas, crystal blue waters,
          and incredible marine life.
        </p>

        <p>
          Whether it’s a honeymoon or family vacation, Maldives offers island
          hopping, seaplane rides and luxury resorts.
        </p>
      </div>

      {/* ================= PACKAGES ================= */}
      <div className="container mt-4">

        {/* Package 1 */}
        <div className="row shadow-lg text-center mb-4">
          <div className="col-md-3 p-3">
            <img src={pkg1} alt="Sri Lanka Maldives" width="100%" />
          </div>
          <div className="col-md-6 p-3">
            <h2 className="text-primary">Sri Lanka & Maldives Tour</h2>
            <span className="text-danger">Duration:</span> 7 Nights / 7 Days
            <p className="text-danger mt-2">
              Price – 130000 <del className="text-dark">170000</del> Rs/-
            </p>
          </div>
          <div className="col-md-3 p-3">
            <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#maldives1">
              View Detail
            </button>
          </div>
        </div>

        {/* Package 2 */}
        <div className="row shadow-lg text-center mb-4">
          <div className="col-md-3 p-3">
            <img src={pkg2} alt="Budget Maldives" width="100%" />
          </div>
          <div className="col-md-6 p-3">
            <h2 className="text-primary">Budget Maldives Trip</h2>
            <span className="text-danger">Duration:</span> 3 Nights / 4 Days
            <p className="text-danger mt-2">
              Price – 90000 <del className="text-dark">150000</del> Rs/-
            </p>
          </div>
          <div className="col-md-3 p-3">
            <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#maldives2">
              View Detail
            </button>
          </div>
        </div>

        {/* Package 3 */}
        <div className="row shadow-lg text-center mb-5">
          <div className="col-md-3 p-3">
            <img src={pkg3} alt="Maldives Sri Lanka" width="100%" />
          </div>
          <div className="col-md-6 p-3">
            <h2 className="text-primary">7 Days Maldives–Sri Lanka Tour</h2>
            <span className="text-danger">Duration:</span> 6 Nights / 7 Days
            <p className="text-danger mt-2">
              Price – 220000 <del className="text-dark">300000</del> Rs/-
            </p>
          </div>
          <div className="col-md-3 p-3">
            <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#maldives3">
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

export default Maldives;
