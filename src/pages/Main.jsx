import { Link } from "react-router-dom";

// slider images
import img1 from "../assets/images/slider/Bahu Fort-jammu-j&K.jpg";
import img2 from "../assets/images/slider/Kajiranga.jpg";
import img3 from "../assets/images/slider/dawki-Jaintia hills-meghalaya.jpg";
import img4 from "../assets/images/slider/SOU_new.jpg";
import img5 from "../assets/images/slider/thikse monastery-leh-J&K-1B8A0107.jfif";
import img6 from "../assets/images/slider/Science City (17).jpg";

// icons & images
import logo from "../assets/images/logo/india.png";
import taj from "../assets/images/icon/taj-mahal.svg";
import family from "../assets/images/icon/family.svg";
import hills from "../assets/images/icon/hills.svg";
import summer from "../assets/images/icon/summer.svg";
import winter from "../assets/images/icon/winter.svg";

import bike from "../assets/images/exp/bike-tours-64.jpeg";
import luxury from "../assets/images/exp/luxury-71.jpeg";
import beach from "../assets/images/exp/beaches-1.jpeg";
import wildlife from "../assets/images/exp/wildlife-18.jpeg";
import forts from "../assets/images/exp/forts-and-palaces-2.jpeg";

import dubai from "../assets/images/International/dubai.jpg";
import singapore from "../assets/images/International/singapore.jpg";
import thailand from "../assets/images/International/thailand.jpg";
import malaysia from "../assets/images/International/malaysia.jpg";
import maldives from "../assets/images/International/maldives.jpg";

function Main() {
  return (
    <div style={{ backgroundColor: "rgb(255,244,222)" }}>

      {/* ================= CAROUSEL ================= */}
      <div
        id="demo"
        className="carousel slide mt-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to={i}
              className={i === 0 ? "active" : ""}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {[img1, img2, img3, img4, img5, img6].map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img src={img} alt="banner" className="w-100" />
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* ================= INTRO ================= */}
      <div className="container mt-5">
        <h2 className="text-center">
          <span className="text-warning">Welcome </span>
          <span className="text-primary">To </span>
          <span className="text-success">Tourism</span>
        </h2>

        <p>
          India is a kaleidoscope of traditions, culture, and vibrant geographies.
          From the Himalayas to beaches, wildlife to spirituality, India has
          something for every traveler.
        </p>
      </div>

      {/* ================= EXCLUSIVE PACKAGES ================= */}
      <div className="container mt-5">
        <h2 className="text-danger text-center mb-4">Our Exclusive Packages</h2>

        <div className="row text-center">
          {[taj, family, hills, summer, winter].map((img, i) => (
            <div key={i} className="col mx-2 shadow-lg bg-light p-3">
              <img src={img} alt="icon" />
              <p className="text-danger mt-2">Package</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= EXPERIENCE ================= */}
      <div className="container mt-5">
        <h2 className="text-danger text-center mb-4">Experience Our</h2>

        <div className="row text-center">
          {[
  { img: bike, label: "Bike Tour", path: "/bike-tour" },
  { img: luxury, label: "Luxury Tour", path: "/luxury" },
  { img: beach, label: "Beach Tour", path: "/beaches" },
  { img: wildlife, label: "Wildlife Tour", path: "/wildlife" },
  { img: forts, label: "Fort & Palaces", path: "/forts" },
].map((item, i) => (
  <div key={i} className="col mx-2">
    <Link to={item.path} style={{ textDecoration: "none" }}>
      <img
        src={item.img}
        alt={item.label}
        width="100%"
        className="shadow-lg"
      />
      <p className="text-danger mt-2">{item.label}</p>
    </Link>
  </div>
))}

        </div>
      </div>

      {/* ================= INTERNATIONAL ================= */}
      <div className="container mt-5 mb-5">
        <h2 className="text-danger text-center mb-4">International Packages</h2>

        <div className="row text-center">
          {[
  { img: dubai, label: "Dubai", path: "/dubai" },
  { img: singapore, label: "Singapore", path: "/singapore" },
  { img: thailand, label: "Thailand", path: "/thailand" },
  { img: malaysia, label: "Malaysia", path: "/malaysia" },
  { img: maldives, label: "Maldives", path: "/maldives" },
].map((item, i) => (
  <div key={i} className="col mx-2">
    <Link to={item.path} style={{ textDecoration: "none" }}>
      <img
        src={item.img}
        alt={item.label}
        width="100%"
        className="shadow-lg"
      />
      <p className="text-danger mt-2">{item.label}</p>
    </Link>
  </div>
))}

        </div>
      </div>

    </div>
  );
}

export default Main;
