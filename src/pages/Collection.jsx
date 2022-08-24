import React from "react";
import GREEN from "./../../src/images/GREEN.jpg";
import GOLD from "./../../src/images/GOLD.jpg";
import PURP from "./../../src/images/PURP.jpg";
import Shirt1 from "./../../src/images/Shirt.jpg";
import Shirt2 from "./../../src/images/Shirt2.jpg";
import Shirt3 from "./../../src/images/Shirt3.jpg";
import ShirtHtml from "./../../src/images/t-shirt-github.webp";
import ShirtGitHub from "./../../src/images/t-shirt-html.webp";

export default function Collection() {
  const collection = {
      top: '5px',
      right:'5px',
      height: '46px',
      width: '46px',
      borderRadius: '50%',
  }
  return (
    <section>
      <div className="container">
        <h2 className="text-center">Collection</h2>
        <div className="row">
          <div className="d-flex flex-wrap mt-5 justify-content-center filter-button-group">
            <button className="btn m-2 active-filter-btn" data-filter="*">
              All
            </button>
            <button className="btn m-2" data-filter=".best">
              Best seller
            </button>
            <button className="btn m-2" data-filter=".featured">
              Featured
            </button>
            <button className="btn m-2" data-filter=".new">
              New arrival
            </button>
          </div>
          <div className="collection-list row p-0">
            <div className="col-md-6 col-lg-3 new">
              <div className="t-shirt-item position-relative overflow-hidden">
                <img src={GREEN} alt="item 1" className="w-100" />
                <span style={collection} className="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white">
                  Sale
                </span>
                <div className="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div className="text-center">
                <div className="rating">
                  <span className="text-warning">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="flex-wrap justify-content-center align-items-center py-3">
                  <p className="text-capitalize my-1">shirt</p>
                  <span className="fw-bold">₱ 550.00</span>
                  <button className="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 new">
              <div className="t-shirt-item position-relative overflow-hidden">
                <img src={PURP} alt="item 2" className="w-100" />
                <span style={collection} className="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white">
                  Sale
                </span>
                <div className="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div className="text-center">
                <div className="rating">
                  <span className="text-warning">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="flex-wrap justify-content-center align-items-center py-3">
                  <p className="text-capitalize my-1">shirt</p>
                  <span className="fw-bold">₱ 550.00</span>
                  <button className="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 new">
              <div className="t-shirt-item position-relative overflow-hidden">
                <img src={GOLD} alt="item 3" className="w-100" />
                <span style={collection} className="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white">
                  Sale
                </span>
                <div className="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div className="text-center">
                <div className="rating">
                  <span className="text-warning">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="flex-wrap justify-content-center align-items-center py-3">
                  <p className="text-capitalize my-1">shirt</p>
                  <span className="fw-bold">₱ 550.00</span>
                  <button className="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 new">
              <div className="t-shirt-item position-relative overflow-hidden">
                <img src={GREEN} alt="item 4" className="w-100" />
                <span style={collection} className="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white">
                  Sale
                </span>
                <div className="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div className="text-center">
                <div className="rating">
                  <span className="text-warning">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="flex-wrap justify-content-center align-items-center py-3">
                  <p className="text-capitalize my-1">shirt</p>
                  <span className="fw-bold">₱ 550.00</span>
                  <button className="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 new">
              <div className="t-shirt-item position-relative overflow-hidden">
                <img src={Shirt1} alt="item 5" className="w-100" />
                <span style={collection} className="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white">
                  Sale
                </span>
                <div className="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div className="text-center">
                <div className="rating">
                  <span className="text-warning">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="flex-wrap justify-content-center align-items-center py-3">
                  <p className="text-capitalize my-1">shirt</p>
                  <span className="fw-bold">₱ 550.00</span>
                  <button className="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 featured">
              <div className="t-shirt-item position-relative overflow-hidden">
                <img src={Shirt2} alt="item 6" className="w-100" />
                <span style={collection} className="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white">
                  Sale
                </span>
                <div className="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div className="text-center">
                <div className="rating">
                  <span className="text-warning">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="flex-wrap justify-content-center align-items-center py-3">
                  <p className="text-capitalize my-1">shirt</p>
                  <span className="fw-bold">₱ 550.00</span>
                  <button className="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 featured">
              <div className="t-shirt-item position-relative overflow-hidden">
                <img src={Shirt3} alt="item 7" className="w-100" />
                <span style={collection} className="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white">
                  Sale
                </span>
                <div className="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div className="text-center">
                <div className="rating">
                  <span className="text-warning">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="flex-wrap justify-content-center align-items-center py-3">
                  <p className="text-capitalize my-1">shirt</p>
                  <span className="fw-bold">₱ 550.00</span>
                  <button className="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 featured">
              <div className="t-shirt-item position-relative overflow-hidden">
                <img src={Shirt1} alt="item 8" className="w-100" />
                <span style={collection} className="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white">
                  Sale
                </span>
                <div className="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div className="text-center">
                <div className="rating">
                  <span className="text-warning">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="flex-wrap justify-content-center align-items-center py-3">
                  <p className="text-capitalize my-1">shirt</p>
                  <span className="fw-bold">₱ 550.00</span>
                  <button className="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 featured">
              <div className="t-shirt-item position-relative overflow-hidden">
                <img
                  src={ShirtGitHub}
                  alt="item 8"
                  className="w-100"
                />
                <span style={collection} className="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white">
                  Sale
                </span>
                <div className="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div className="text-center">
                <div className="rating">
                  <span className="text-warning">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="flex-wrap justify-content-center align-items-center py-3">
                  <p className="text-capitalize my-1">shirt</p>
                  <span className="fw-bold">₱ 550.00</span>
                  <button className="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 featured">
              <div className="t-shirt-item position-relative overflow-hidden">
                <img
                  src={ShirtGitHub}
                  alt="item 8"
                  className="w-100"
                />
                <span style={collection} className="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white">
                  Sale
                </span>
                <div className="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div className="text-center">
                <div className="rating">
                  <span className="text-warning">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="flex-wrap justify-content-center align-items-center py-3">
                  <p className="text-capitalize my-1">shirt</p>
                  <span className="fw-bold">₱ 550.00</span>
                  <button className="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 best">
              <div className="t-shirt-item position-relative overflow-hidden">
                <img
                  src={ShirtGitHub}
                  alt="item 8"
                  className="w-100"
                />
                <span style={collection} className="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white">
                  Sale
                </span>
                <div className="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div className="text-center">
                <div className="rating">
                  <span className="text-warning">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="flex-wrap justify-content-center align-items-center py-3">
                  <p className="text-capitalize my-1">shirt</p>
                  <span className="fw-bold">₱ 550.00</span>
                  <button className="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 best">
              <div className="t-shirt-item position-relative overflow-hidden">
                <img
                  src={ShirtGitHub}
                  alt="item 8"
                  className="w-100"
                />
                <span style={collection} className="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white">
                  Sale
                </span>
                <div className="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div className="text-center">
                <div className="rating">
                  <span className="text-warning">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="flex-wrap justify-content-center align-items-center py-3">
                  <p className="text-capitalize my-1">shirt</p>
                  <span className="fw-bold">₱ 550.00</span>
                  <button className="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 best">
              <div className="t-shirt-item position-relative overflow-hidden">
                <img
                  src={ShirtHtml}
                  alt="item 8"
                  className="w-100"
                />
                <span style={collection} className="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white">
                  Sale
                </span>
                <div className="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div className="text-center">
                <div className="rating">
                  <span className="text-warning">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="flex-wrap justify-content-center align-items-center py-3">
                  <p className="text-capitalize my-1">shirt</p>
                  <span className="fw-bold">₱ 550.00</span>
                  <button className="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 best">
              <div className="t-shirt-item position-relative overflow-hidden">
                <img
                  src={ShirtHtml}
                  alt="item 8"
                  className="w-100"
                />
                <span style={collection} className="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white">
                  Sale
                </span>
                <div className="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div className="text-center">
                <div className="rating">
                  <span className="text-warning">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="flex-wrap justify-content-center align-items-center py-3">
                  <p className="text-capitalize my-1">shirt</p>
                  <span className="fw-bold">₱ 550.00</span>
                  <button className="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 best">
              <div className="t-shirt-item position-relative overflow-hidden">
                <img
                  src={ShirtHtml}
                  alt="item 8"
                  className="w-100"
                />
                <span style={collection} className="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white">
                  Sale
                </span>
                <div className="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div className="text-center">
                <div className="rating">
                  <span className="text-warning">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="flex-wrap justify-content-center align-items-center py-3">
                  <p className="text-capitalize my-1">shirt</p>
                  <span className="fw-bold">₱ 550.00</span>
                  <button className="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 best">
              <div className="t-shirt-item position-relative overflow-hidden">
                <img
                  src={ShirtHtml}
                  alt="item 8"
                  className="w-100"
                />
                <span style={collection} className="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white">
                  Sale
                </span>
                <div className="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div className="text-center">
                <div className="rating">
                  <span className="text-warning">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="flex-wrap justify-content-center align-items-center py-3">
                  <p className="text-capitalize my-1">shirt</p>
                  <span className="fw-bold">₱ 550.00</span>
                  <button className="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
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
