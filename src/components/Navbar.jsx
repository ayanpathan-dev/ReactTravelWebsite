import { Link } from "react-router-dom";
import logo from "../assets/images/logo/india.png";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-sm fixed-top"
      style={{ backgroundColor: "rgb(0, 0, 60)" }}
    >
      <div className="container-fluid">

        {/* LOGO */}
        <div className="col-md-4">
          <img src={logo} alt="India" width="15%" />
          <span className="h3 text-warning"> Ghumo</span>
          <span className="h3 text-success"> India</span>
        </div>

        {/* MAIN LINKS */}
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
                <li>
                  <Link className="dropdown-item text-warning" to="/bike-tour">
                    Bike Tour
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-primary" to="/beaches">
                    Beaches
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-success" to="/luxury">
                    Luxury Holidays
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/international">
                International Tour Package
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: "rgb(0,200,0)" }}
                to="/best-time"
              >
                Best Time To Visit
              </Link>
            </li>

          </ul>
        </div>

        {/* RIGHT SIDE */}
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

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="text"
              placeholder="Search"
            />
            <button className="btn btn-primary" type="button">
              Search
            </button>
          </form>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
