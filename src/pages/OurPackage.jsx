import { Link } from "react-router-dom";
import logo from "../assets/images/logo/india.png";

import banner from "../assets/images/International/package/banner.jpg";
import goldenTriangle from "../assets/images/International/package/golden-triangle-tour.jpg";
import bangaloreTour from "../assets/images/International/package/bangalore-mysore-ooty-kodaikanal-tour-package-1351.jpeg";
import darjeelingTour from "../assets/images/International/package/darjeeling-gangtok.jpg";

function Packages() {
  return (
    <div style={{ backgroundColor: "rgb(255,244,222)" }}>

      {/* ================= NAVBAR ================= */}
      <nav
        className="navbar navbar-expand-sm fixed-top"
        style={{ backgroundColor: "rgb(0,0,60)" }}
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
                <Link className="nav-link text-white" to="/packages">Our Packages</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-success" to="/best-time">Best Time To Visit</Link>
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
      <div className="row pt-5 mt-5">
        <img src={banner} alt="Packages Banner" width="100%" />
      </div>

      {/* ================= INTRO ================= */}
      <div className="container mt-5">
        <h2 className="text-center">
          <span className="text-warning">Our </span>
          <span className="text-primary">Tour </span>
          <span className="text-success">Packages</span>
        </h2>

        <p>
          India is one of the most welcoming nations in the world. From hill
          stations to beaches, wildlife to heritage cities – India has it all.
        </p>
      </div>

      {/* ================= PACKAGE CARDS ================= */}
      <div className="container mt-4">

        {/* Golden Triangle */}
        <div className="row shadow-lg text-center mb-4">
          <div className="col-md-3 p-3">
            <img src={goldenTriangle} alt="Golden Triangle" width="100%" />
          </div>
          <div className="col-md-6 p-3">
            <h2 className="text-primary">Golden Triangle Tour</h2>
            <span className="text-danger">Duration:</span> 5 Nights / 6 Days
            <p className="text-danger mt-2">
              Price – 150000 <del className="text-dark">180000</del> Rs/-
            </p>
          </div>
          <div className="col-md-3 p-3">
            <button
              className="btn btn-danger btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#goldenTriangleModal"
            >
              View Detail
            </button>
          </div>
        </div>

        {/* Bangalore */}
        <div className="row shadow-lg text-center mb-4">
          <div className="col-md-3 p-3">
            <img src={bangaloreTour} alt="Bangalore Tour" width="100%" />
          </div>
          <div className="col-md-6 p-3">
            <h2 className="text-primary">
              Bangalore Mysore Ooty Kodaikanal Tour
            </h2>
            <span className="text-danger">Duration:</span> 4 Nights / 5 Days
            <p className="text-danger mt-2">
              Price – 130000 <del className="text-dark">190000</del> Rs/-
            </p>
          </div>
          <div className="col-md-3 p-3">
            <button
              className="btn btn-danger btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#bangaloreModal"
            >
              View Detail
            </button>
          </div>
        </div>

        {/* Darjeeling */}
        <div className="row shadow-lg text-center mb-5">
          <div className="col-md-3 p-3">
            <img src={darjeelingTour} alt="Darjeeling Tour" width="100%" />
          </div>
          <div className="col-md-6 p-3">
            <h2 className="text-primary">Darjeeling Gangtok Tour</h2>
            <span className="text-danger">Duration:</span> 5 Nights / 6 Days
            <p className="text-danger mt-2">
              Price – 90000 <del className="text-dark">140000</del> Rs/-
            </p>
          </div>
          <div className="col-md-3 p-3">
            <button
              className="btn btn-danger btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#darjeelingModal"
            >
              View Detail
            </button>
          </div>
        </div>

      </div>

      {/* ================= FOOTER ================= */}
      <div className="container-fluid mt-5">
        <div className="row text-center bg-danger text-white">
          <p>© 2020–2035 ghumoindia.com</p>
          <p>Designed & Developed by I-Soft Software Solution</p>
        </div>
      </div>

      {/* ================= MODALS ================= */}
      <div className="modal fade" id="goldenTriangleModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-danger">Golden Triangle Tour</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body text-center">
              <img src={goldenTriangle} alt="Golden Triangle" width="100%" />
              <p className="mt-3">
                Explore Delhi, Agra & Jaipur with guided sightseeing.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="bangaloreModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-danger">
                Bangalore Mysore Ooty Kodaikanal Tour
              </h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body text-center">
              <img src={bangaloreTour} alt="Bangalore" width="100%" />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="darjeelingModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-danger">
                Darjeeling & Gangtok Tour
              </h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body text-center">
              <img src={darjeelingTour} alt="Darjeeling" width="100%" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Packages;
