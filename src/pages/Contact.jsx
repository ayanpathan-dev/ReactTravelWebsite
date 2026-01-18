import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/india.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    tourType: "",
    mobile: "",
    people: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
  };

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

      {/* ================= FORM ================= */}
      <div className="container pt-5 mt-5">
        <div className="row">
          <div className="col-md-5 mx-auto p-4 shadow-lg bg-white">

            <h2 className="text-danger text-center mb-4">
              Let&apos;s Plan Your Trip
            </h2>

            <form onSubmit={handleSubmit}>

              <label htmlFor="name">Enter Your Name *</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label className="mt-3" htmlFor="email">Enter Your E-mail *</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter E-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <div className="row mt-3">
                <div className="col-md-6">
                  <label>Destination *</label>
                  <input
                    type="text"
                    name="destination"
                    className="form-control"
                    placeholder="Destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label>Tour Type *</label>
                  <select
                    name="tourType"
                    className="form-control"
                    value={formData.tourType}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>-- Select Tour Type --</option>
                    <option value="National">National (India)</option>
                    <option value="International">International</option>
                  </select>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-6">
                  <label>Mobile Number *</label>
                  <input
                    type="text"
                    name="mobile"
                    className="form-control"
                    placeholder="Mobile No."
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label>People Count *</label>
                  <select
                    name="people"
                    className="form-control"
                    value={formData.people}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>-- Select --</option>
                    {[1, 2, 3, 4, 5, 6].map(n => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
              </div>

              <label className="mt-3">Requirement</label>
              <textarea
                name="message"
                className="form-control"
                rows="4"
                placeholder="Additional Information (Optional)"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <div className="text-center">
                <button type="submit" className="btn btn-primary mt-4">
                  Submit
                </button>
              </div>

            </form>
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

    </div>
  );
}

export default Contact;
