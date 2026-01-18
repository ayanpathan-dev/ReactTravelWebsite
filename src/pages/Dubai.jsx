import { Link } from "react-router-dom";

import logo from "../assets/images/logo/india.png";
import banner from "../assets/images/International/dubai2.jpg";

import pkg1 from "../assets/images/International/dubai.jpg";
import pkg2 from "../assets/images/International/city/delightful-dubai-festival-1319.jpeg";
import pkg3 from "../assets/images/International/city/dubai-shopping-festival-1342.jpeg";

function Dubai() {
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
        <img src={banner} alt="Dubai" width="100%" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container mt-5">
        <div className="text-center h2">
          <span className="text-warning">Dubai </span>
          <span className="text-primary">Tour </span>
          <span className="text-success">Packages</span>
        </div>

        <p>
          Dubai is the city of luxury, iconic skyscrapers, shopping festivals,
          and unforgettable desert safaris.
        </p>
      </div>

      {/* ================= PACKAGES ================= */}
      <div className="container mt-4">

        {/* Package 1 */}
        <div className="row shadow-lg text-center mb-4">
          <div className="col-md-3 p-3">
            <img src={pkg1} alt="Magical Dubai" width="100%" />
          </div>
          <div className="col-md-6 p-3">
            <h2 className="text-primary">Magical Dubai</h2>
            <span className="text-danger">Duration:</span> 5 Nights / 6 Days
            <p className="text-danger mt-2">
              Price – 200000 <del className="text-dark">229000</del> Rs/-
            </p>
          </div>
          <div className="col-md-3 p-3">
            <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#magicaldubai">
              View Detail
            </button>
          </div>
        </div>

        {/* Package 2 */}
        <div className="row shadow-lg text-center mb-4">
          <div className="col-md-3 p-3">
            <img src={pkg2} alt="Delightful Dubai" width="100%" />
          </div>
          <div className="col-md-6 p-3">
            <h2 className="text-primary">Delightful Dubai</h2>
            <span className="text-danger">Duration:</span> 4 Nights / 5 Days
            <p className="text-danger mt-2">
              Price – 190000 <del className="text-dark">215000</del> Rs/-
            </p>
          </div>
          <div className="col-md-3 p-3">
            <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#delightfuldubai">
              View Detail
            </button>
          </div>
        </div>

        {/* Package 3 */}
        <div className="row shadow-lg text-center mb-5">
          <div className="col-md-3 p-3">
            <img src={pkg3} alt="Dubai Shopping Festival" width="100%" />
          </div>
          <div className="col-md-6 p-3">
            <h2 className="text-primary">Dubai Shopping Festival</h2>
            <span className="text-danger">Duration:</span> 4 Nights / 4 Days
            <p className="text-danger mt-2">
              Price – 180000 <del className="text-dark">200000</del> Rs/-
            </p>
          </div>
          <div className="col-md-3 p-3">
            <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#dubaishopfest">
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

      {/* ================= MODALS (UNCHANGED LOGIC) ================= */}
      {/* You can directly paste your modal JSX here with className changes */}

    </div>
  );
}

export default Dubai;
