import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutubeSquare,
  FaRocketchat,
  FaMailBulk,
  FaPhone,
  FaHome
} from "react-icons/fa";

export default function ContactUs() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <h2 className="text-center py-5 fw-bolder">Contact Us</h2>
          <p className="lead text-center">
            Please use this form to contact us and we will get back to you as
            soon as possible!
          </p>
          <div className="col-md">
            <form className="row g-3">
              <div className="col-md-12">
                <label for="" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="" />
              </div>
              <div className="col-md-12">
                <label for="" className="form-label">
                  First Name
                </label>
                <input type="text" className="form-control" id="" />
              </div>
              <div className="col-md-12">
                <label for="" className="form-label">
                  Last Name
                </label>
                <input type="text" className="form-control" id="" />
              </div>
              <div className="col-md-12">
                <label for="" className="form-label">
                  Subject
                </label>
                <input type="text" className="form-control" id="" />
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label for="exampleFormControlTextarea1" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary rounded-0">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="col-md">
            <h2 className="py-3">Contact info</h2>
            <ul className="list-unstyled">
              <li>
                <span className="fw-bold">Main Location:</span>San Fernando,
                Pampanga
              </li>
              <li>
                <span className="fw-bold">Inquiry Phone:</span>(333) 333-3333
              </li>
              <li>
                <span className="fw-bold">Inquiry Email:</span>
                Artriskapparel@kodego.com
              </li>
              <li>
                <span className="fw-bold">Open Monday to Sunday:</span>9am - 5pm
              </li>
            </ul>
            <h2 className="py-3">Socials</h2>
            <div className="d-none d-md-block">
              <ul className="list-unstyled d-flex">
                <li className="text-decortion-none text-muted fs-4 me-4">
                  <FaFacebook />
                </li>
                <li className="text-decortion-none text-muted fs-4 me-4">
                  <FaTwitter />
                </li>
                <li className="text-decortion-none text-muted fs-4 me-4">
                  <FaInstagram />
                </li>
                <li className="text-decortion-none text-muted fs-4 me-4">
                  <FaYoutubeSquare />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row g-1">
          <div className="col-lg-3 col-sm-6">
            <div className="card border-primary rounded-0 mb-3 h-100">
              <div className="card-header h3 fw-bold text-center">Chat</div>
              <div className="card-body text-dark text-center mt-1">
                <span className="bg-warning p-3 rounded-circle"><FaRocketchat/></span>
                <p className="card-text fw-bold m-3">Chat me</p>
                <p className="card-text text-muted">
                  Monday - Sunday <br />
                  9am - 5pm
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card border-primary rounded-0 mb-3 h-100">
              <div className="card-header h3 fw-bold text-center">Email</div>
              <div className="card-body text-dark text-center mt-1">
              <span className="bg-primary p-3 rounded-circle"><FaMailBulk/></span>
                <p className="card-text fw-bold m-3">Send us email</p>
                <p className="card-text text-muted">We'd love to hear from you!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card border-primary rounded-0 mb-3 h-100">
              <div className="card-header h3 fw-bold text-center">Phone</div>
              <div className="card-body text-dark text-center mt-1">
              <span className="bg-danger p-3 rounded-circle"><FaPhone/></span>
                <p className="card-text fw-bold m-3">0999-9999-999</p>
                <p className="card-text text-muted">
                  Monday - Sunday <br />
                  9am - 5pm
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card border-primary rounded-0 mb-3 h-100">
              <div className="card-header h3 fw-bold text-center">Home</div>
              <div className="card-body text-dark text-center mt-1">
              <span className="bg-success p-3 rounded-circle"><FaHome/></span>
                <p className="card-text fw-bold m-3">Address</p>
                <p className="card-text text-muted">San Fernando, Pampanga</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="container-fluid bg-dark py-5">
        <p className="text-white lead text-center">
          Copyright &copy; 2022, Artrisk Apparel Clothing Brand
        </p>
      </footer>
    </section>
  );
}
