import { Link } from "react-router-dom";
import logo from "../assets/images/logo/india.png";

function BestTime() {
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
                <Link className="nav-link text-white" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>

      {/* ================= CONTENT ================= */}
      <div className="container pt-5 mt-5">
        <div className="text-center h2 mb-4">
          <span className="text-warning">Best </span>
          <span className="text-primary">Time To </span>
          <span className="text-success">Visit</span>
        </div>

        <p>
          Owing to its geographical diversity, India can be visited throughout
          the year. Winter months from October to March are the peak season for
          tourism, while monsoon is ideal for Ayurveda and greenery lovers.
        </p>

        <p>
          Summer months are perfect for trekking and adventure in North India,
          whereas wildlife safaris are best from April to June.
        </p>
      </div>

      {/* ================= SEASONS ================= */}
      <div className="container mt-4">
        <div className="row text-center">

          <div className="col-md-4 shadow-lg p-3 mb-3">
            <h3 className="text-warning">Winter (Oct – Mar)</h3>
            <p>
              Best season for sightseeing and city tours. Ideal destinations:
              Rajasthan, Goa, Delhi, Kerala, Andaman, Kashmir & Uttarakhand.
            </p>
          </div>

          <div className="col-md-4 shadow-lg p-3 mb-3">
            <h3 className="text-primary">Summer (Apr – Jun)</h3>
            <p>
              Ideal for hill stations and adventure sports. Popular destinations
              include Ladakh, Manali, Ooty, Darjeeling, Munnar & Goa.
            </p>
          </div>

          <div className="col-md-4 shadow-lg p-3 mb-3">
            <h3 className="text-success">Monsoon (Jul – Sep)</h3>
            <p>
              Best time for Ayurveda and greenery lovers. Kerala, Coorg, Lonavala,
              Goa and Cherrapunji look stunning during monsoon.
            </p>
          </div>

        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="container-fluid mt-5">
        <div
          className="row justify-content-around shadow-lg"
          style={{ backgroundColor: "rgb(0, 0, 60)" }}
        >
          <div className="col-md-4 mt-3 text-white">
            <img src={logo} alt="India" width="20%" />
            <h5 className="text-warning">Ghumo India Pvt. Ltd.</h5>
            <p>Satara, Maharashtra, India</p>
          </div>

          <div className="col-md-4 mt-3 text-white">
            <h4>Contact Us</h4>
            <p>+91 8100 8200 8300</p>
            <p>ghumoindia@gmail.com</p>
          </div>
        </div>

        <div className="row text-center bg-danger text-white">
          <p>© 2020–2035 ghumoindia.com</p>
          <p>Designed & Developed by I-Soft Software Solution</p>
        </div>
      </div>

    </div>
  );
}

export default BestTime;
