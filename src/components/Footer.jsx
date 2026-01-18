import logo from "../assets/images/logo/india.png";

function Footer() {
  return (
    <div className="container-fluid">

      <div
        className="row justify-content-around shadow-lg"
        style={{ backgroundColor: "rgb(0, 0, 60)" }}
      >

        <div className="col-md-4 mt-3 text-white">
          <img src={logo} alt="India" width="20%" />
          <h5 className="text-warning">
            Ghumo <span className="text-white">India</span>{" "}
            <span className="text-success">Pvt. Ltd.</span>
          </h5>

          <p>
            Lane 7 Phoenix Complex, Visawa Park, Satara,
            Maharashtra, India
          </p>
        </div>

        <div className="col-md-4 mt-3 text-white">
          <h4>We Are On</h4>
          <p className="text-primary">Facebook</p>
          <p className="text-danger">Instagram</p>
          <p className="text-primary">Twitter</p>

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
  );
}

export default Footer;
