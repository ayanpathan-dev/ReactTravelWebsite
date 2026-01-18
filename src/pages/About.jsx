import { Link } from "react-router-dom";
import indiaLogo from "../assets/images/logo/india.png";

function About() {
  return (
    <div style={{ backgroundColor: "rgb(255, 244, 222)" }}>

      {/* NAVBAR */}
      <nav
        className="navbar navbar-expand-sm fixed-top"
        style={{ backgroundColor: "rgb(0, 0, 60)" }}
      >
        <div className="container-fluid">

          <div className="col-md-4">
            <img src={indiaLogo} alt="India" width="15%" />
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
                <button
                  className="nav-link dropdown-toggle btn btn-link p-0 text-primary"
                  data-bs-toggle="dropdown"
                >
                  Experience Our
                </button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item text-warning" to="/bike-tour">Bike Tour</Link></li>
                  <li><Link className="dropdown-item text-primary" to="/beaches">Beaches</Link></li>
                  <li><Link className="dropdown-item text-success" to="/luxury">Luxury Holidays</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" to="/international">
                  International Tour Package
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
                <Link className="nav-link text-white" to="/contact">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">About Us</Link>
              </li>
            </ul>

            <form className="d-flex">
              <input className="form-control me-2" type="text" placeholder="Search" />
              <button className="btn btn-primary" type="button">Search</button>
            </form>
          </div>

        </div>
      </nav>

      {/* CONTENT */}
      <div className="container pt-5 mt-5 text-center">

        <h3>OUR MISSION</h3>
        <h4 className="text-danger">
          Presenting India in a way never seen before...!
        </h4>

        <p className="text-success">
          ...And we have been ensuing this mission for the past 33 years.
        </p>

        <h4 className="text-danger">Why India?</h4>
        <p className="text-success">
          From deserts to Himalayas, rainforests to beaches – India offers everything.
        </p>

        <h4 className="text-danger">Why Ghumo India Pvt. Ltd.?</h4>
        <p className="text-success">
          We provide quality services with exclusive travel experiences.
        </p>

        <h4 className="text-danger">CORPORATE INFORMATION</h4>
        <p className="text-success">
          Operating in the tourism industry since 1990.
        </p>

      </div>

      {/* FOOTER */}
      <div className="container-fluid mt-5">
        <div
          className="row justify-content-around shadow-lg"
          style={{ backgroundColor: "rgb(0, 0, 60)" }}
        >
          <div className="col-md-4 mt-3 text-white">
            <img src={indiaLogo} alt="India" width="20%" />
            <h5 className="text-warning">Ghumo India Pvt. Ltd.</h5>
            <p>Lane 7 Phoenix Complex, Satara, Maharashtra</p>
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

export default About;
