import { Link } from "react-router-dom";

import logo from "../assets/images/logo/india.png";
import banner from "../assets/images/International/Country 4/Malaysia Slider.jpg";

import pkg1 from "../assets/images/International/Country 4/exotic-malaysia-tour-1314.jpeg";
import pkg2 from "../assets/images/International/country 2/10-days-singapore-malaysia-package-with-cruise-1414.jpeg";
import pkg3 from "../assets/images/International/country 2/thailand-and-malaysia-with-singapore-tour-1307.jpeg";

function Malaysia() {
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
        <img src={banner} alt="Malaysia" width="100%" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container mt-5">
        <div className="text-center h2">
          <span className="text-warning">Malaysia </span>
          <span className="text-primary">Tour </span>
          <span className="text-success">Packages</span>
        </div>

        <p>
          Enjoy an unforgettable vacation filled with adventure, sightseeing
          and relaxation with Malaysia tour packages. Discover beaches,
          colonial architecture, tea plantations and modern attractions.
        </p>

        <p>
          Malaysia offers trekking, wildlife adventures, caves, river rafting
          and luxurious honeymoon destinations like Langkawi.
        </p>

        <p>
          Explore Malaysia with family and friends and experience a vacation of
          a lifetime.
        </p>
      </div>

      {/* ================= PACKAGES ================= */}
      <div className="container mt-4">

        {/* Package 1 */}
        <div className="row shadow-lg text-center mb-4">
          <div className="col-md-3 p-3">
            <img src={pkg1} alt="Exotic Malaysia" width="100%" />
          </div>
          <div className="col-md-6 p-3">
            <h2 className="text-primary">Splendid Kuala Lumpur Tour</h2>
            <span className="text-danger">Duration:</span> 3 Nights / 4 Days
            <p className="text-danger mt-2">
              Price – 100000 <del className="text-dark">150000</del> Rs/-
            </p>
          </div>
          <div className="col-md-3 p-3">
            <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#malaysia1">
              View Detail
            </button>
          </div>
        </div>

        {/* Package 2 */}
        <div className="row shadow-lg text-center mb-4">
          <div className="col-md-3 p-3">
            <img src={pkg2} alt="Malaysia Singapore Cruise" width="100%" />
          </div>
          <div className="col-md-6 p-3">
            <h2 className="text-primary">Malaysia Singapore Tour with Cruise</h2>
            <span className="text-danger">Duration:</span> 9 Nights / 10 Days
            <p className="text-danger mt-2">
              Price – 390000 <del className="text-dark">400000</del> Rs/-
            </p>
          </div>
          <div className="col-md-3 p-3">
            <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#malaysia2">
              View Detail
            </button>
          </div>
        </div>

        {/* Package 3 */}
        <div className="row shadow-lg text-center mb-5">
          <div className="col-md-3 p-3">
            <img src={pkg3} alt="Thailand Malaysia Singapore" width="100%" />
          </div>
          <div className="col-md-6 p-3">
            <h2 className="text-primary">Thailand, Malaysia & Singapore Tour</h2>
            <span className="text-danger">Duration:</span> 15 Nights / 14 Days
            <p className="text-danger mt-2">
              Price – 500000 <del className="text-dark">650000</del> Rs/-
            </p>
          </div>
          <div className="col-md-3 p-3">
            <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#malaysia3">
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

export default Malaysia;
