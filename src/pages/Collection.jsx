import React from 'react';

export default function Collection() {
  return (
    <section>
      <div class="container">
        <h2 class="text-center">Collection</h2>
        <div class="row">
          <div
            class="d-flex flex-wrap mt-5 justify-content-center filter-button-group"
          >
            <button class="btn m-2 active-filter-btn" data-filter="*">
              All
            </button>
            <button class="btn m-2" data-filter=".best">Best seller</button>
            <button class="btn m-2" data-filter=".featured">Featured</button>
            <button class="btn m-2" data-filter=".new">New arrival</button>
          </div>
          <div class="collection-list row p-0">
            <div class="col-md-6 col-lg-3 new">
              <div class="t-shirt-item position-relative overflow-hidden">
                <img src="images/item1.jpg" alt="item 1" class="w-100" />
                <span
                  class="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white"
                  >Sale</span
                >
                <div class="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div class="text-center">
                <div class="rating">
                  <span class="text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </span>
                </div>
                <div
                  class="flex-wrap justify-content-center align-items-center py-3"
                >
                  <p class="text-capitalize my-1">shirt</p>
                  <span class="fw-bold">₱ 550.00</span>
                  <button class="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 new">
              <div class="t-shirt-item position-relative overflow-hidden">
                <img src="images/item1.jpg" alt="item 2" class="w-100" />
                <span
                  class="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white"
                  >Sale</span
                >
                <div class="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div class="text-center">
                <div class="rating">
                  <span class="text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </span>
                </div>
                <div
                  class="flex-wrap justify-content-center align-items-center py-3"
                >
                  <p class="text-capitalize my-1">shirt</p>
                  <span class="fw-bold">₱ 550.00</span>
                  <button class="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 new">
              <div class="t-shirt-item position-relative overflow-hidden">
                <img src="images/item1.jpg" alt="item 3" class="w-100" />
                <span
                  class="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white"
                  >Sale</span
                >
                <div class="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div class="text-center">
                <div class="rating">
                  <span class="text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </span>
                </div>
                <div
                  class="flex-wrap justify-content-center align-items-center py-3"
                >
                  <p class="text-capitalize my-1">shirt</p>
                  <span class="fw-bold">₱ 550.00</span>
                  <button class="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 new">
              <div class="t-shirt-item position-relative overflow-hidden">
                <img src="images/item1.jpg" alt="item 4" class="w-100" />
                <span
                  class="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white"
                  >Sale</span
                >
                <div class="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div class="text-center">
                <div class="rating">
                  <span class="text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </span>
                </div>
                <div
                  class="flex-wrap justify-content-center align-items-center py-3"
                >
                  <p class="text-capitalize my-1">shirt</p>
                  <span class="fw-bold">₱ 550.00</span>
                  <button class="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 new">
              <div class="t-shirt-item position-relative overflow-hidden">
                <img src="images/item2.jpg" alt="item 5" class="w-100" />
                <span
                  class="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white"
                  >Sale</span
                >
                <div class="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div class="text-center">
                <div class="rating">
                  <span class="text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </span>
                </div>
                <div
                  class="flex-wrap justify-content-center align-items-center py-3"
                >
                  <p class="text-capitalize my-1">shirt</p>
                  <span class="fw-bold">₱ 550.00</span>
                  <button class="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 featured">
              <div class="t-shirt-item position-relative overflow-hidden">
                <img src="images/item2.jpg" alt="item 6" class="w-100" />
                <span
                  class="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white"
                  >Sale</span
                >
                <div class="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div class="text-center">
                <div class="rating">
                  <span class="text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </span>
                </div>
                <div
                  class="flex-wrap justify-content-center align-items-center py-3"
                >
                  <p class="text-capitalize my-1">shirt</p>
                  <span class="fw-bold">₱ 550.00</span>
                  <button class="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 featured">
              <div class="t-shirt-item position-relative overflow-hidden">
                <img src="images/item2.jpg" alt="item 7" class="w-100" />
                <span
                  class="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white"
                  >Sale</span
                >
                <div class="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div class="text-center">
                <div class="rating">
                  <span class="text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </span>
                </div>
                <div
                  class="flex-wrap justify-content-center align-items-center py-3"
                >
                  <p class="text-capitalize my-1">shirt</p>
                  <span class="fw-bold">₱ 550.00</span>
                  <button class="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 featured">
              <div class="t-shirt-item position-relative overflow-hidden">
                <img src="images/item2.jpg" alt="item 8" class="w-100" />
                <span
                  class="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white"
                  >Sale</span
                >
                <div class="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div class="text-center">
                <div class="rating">
                  <span class="text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </span>
                </div>
                <div
                  class="flex-wrap justify-content-center align-items-center py-3"
                >
                  <p class="text-capitalize my-1">shirt</p>
                  <span class="fw-bold">₱ 550.00</span>
                  <button class="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 featured">
              <div class="t-shirt-item position-relative overflow-hidden">
                <img
                  src="images/t-shirt-github.webp"
                  alt="item 8"
                  class="w-100"
                />
                <span
                  class="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white"
                  >Sale</span
                >
                <div class="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div class="text-center">
                <div class="rating">
                  <span class="text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </span>
                </div>
                <div
                  class="flex-wrap justify-content-center align-items-center py-3"
                >
                  <p class="text-capitalize my-1">shirt</p>
                  <span class="fw-bold">₱ 550.00</span>
                  <button class="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 featured">
              <div class="t-shirt-item position-relative overflow-hidden">
                <img
                  src="images/t-shirt-github.webp"
                  alt="item 8"
                  class="w-100"
                />
                <span
                  class="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white"
                  >Sale</span
                >
                <div class="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div class="text-center">
                <div class="rating">
                  <span class="text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </span>
                </div>
                <div
                  class="flex-wrap justify-content-center align-items-center py-3"
                >
                  <p class="text-capitalize my-1">shirt</p>
                  <span class="fw-bold">₱ 550.00</span>
                  <button class="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 best">
              <div class="t-shirt-item position-relative overflow-hidden">
                <img
                  src="images/t-shirt-github.webp"
                  alt="item 8"
                  class="w-100"
                />
                <span
                  class="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white"
                  >Sale</span
                >
                <div class="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div class="text-center">
                <div class="rating">
                  <span class="text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </span>
                </div>
                <div
                  class="flex-wrap justify-content-center align-items-center py-3"
                >
                  <p class="text-capitalize my-1">shirt</p>
                  <span class="fw-bold">₱ 550.00</span>
                  <button class="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 best">
              <div class="t-shirt-item position-relative overflow-hidden">
                <img
                  src="images/t-shirt-github.webp"
                  alt="item 8"
                  class="w-100"
                />
                <span
                  class="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white"
                  >Sale</span
                >
                <div class="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div class="text-center">
                <div class="rating">
                  <span class="text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </span>
                </div>
                <div
                  class="flex-wrap justify-content-center align-items-center py-3"
                >
                  <p class="text-capitalize my-1">shirt</p>
                  <span class="fw-bold">₱ 550.00</span>
                  <button class="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 best">
              <div class="t-shirt-item position-relative overflow-hidden">
                <img
                  src="images/t-shirt-html.webp"
                  alt="item 8"
                  class="w-100"
                />
                <span
                  class="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white"
                  >Sale</span
                >
                <div class="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div class="text-center">
                <div class="rating">
                  <span class="text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </span>
                </div>
                <div
                  class="flex-wrap justify-content-center align-items-center py-3"
                >
                  <p class="text-capitalize my-1">shirt</p>
                  <span class="fw-bold">₱ 550.00</span>
                  <button class="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 best">
              <div class="t-shirt-item position-relative overflow-hidden">
                <img
                  src="images/t-shirt-html.webp"
                  alt="item 8"
                  class="w-100"
                />
                <span
                  class="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white"
                  >Sale</span
                >
                <div class="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div class="text-center">
                <div class="rating">
                  <span class="text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </span>
                </div>
                <div
                  class="flex-wrap justify-content-center align-items-center py-3"
                >
                  <p class="text-capitalize my-1">shirt</p>
                  <span class="fw-bold">₱ 550.00</span>
                  <button class="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 best">
              <div class="t-shirt-item position-relative overflow-hidden">
                <img
                  src="images/t-shirt-html.webp"
                  alt="item 8"
                  class="w-100"
                />
                <span
                  class="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white"
                  >Sale</span
                >
                <div class="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div class="text-center">
                <div class="rating">
                  <span class="text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </span>
                </div>
                <div
                  class="flex-wrap justify-content-center align-items-center py-3"
                >
                  <p class="text-capitalize my-1">shirt</p>
                  <span class="fw-bold">₱ 550.00</span>
                  <button class="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 best">
              <div class="t-shirt-item position-relative overflow-hidden">
                <img
                  src="images/t-shirt-html.webp"
                  alt="item 8"
                  class="w-100"
                />
                <span
                  class="bg-primary position-absolute d-flex align-items-center justify-content-center bg-danger text-white"
                  >Sale</span
                >
                <div class="overlay text-white">
                  <h3>Buy me</h3>
                </div>
              </div>
              <div class="text-center">
                <div class="rating">
                  <span class="text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </span>
                </div>
                <div
                  class="flex-wrap justify-content-center align-items-center py-3"
                >
                  <p class="text-capitalize my-1">shirt</p>
                  <span class="fw-bold">₱ 550.00</span>
                  <button class="btn btn-lg btn-dark rounded-0">Buy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
