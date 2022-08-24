import React from "react";
import hero from "./../../src/images/hero.jpg";
import story1 from "./../../src/images/story1.jpg";
import story2 from "./../../src/images/story2.jpg";
import story3 from "./../../src/images/story3.jpg";
import model1 from "./../../src/images/model1.jpeg";
import model2 from "./../../src/images/model2.jpeg";
import model3 from "./../../src/images/model3.jpeg";
import GREEN from "./../../src/images/GREEN.jpg";
import GOLD from "./../../src/images/GOLD.jpg";
import PURP from "./../../src/images/PURP.jpg";

export default function Home() {
  return (
    // hero
    <section>
      <div
        className="container-fluid py-5 vh-100"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="jumbotron p-3 text-center">
          <h1 className="display-4 text-white text-shadow mt-5">CLOTHING BRAND</h1>
          <p className="lead text-white text-shadow">
            It all started with a simple dream and belief that Artwear can also
            be a way of sharing stories
          </p>
          <a
            className="btn btn-outline-light btn-lg rounded-0 mt-5 py-3"
            href="#modalLoginForm"
            data-bs-toggle="modal"
            data-bs-target="#modalLoginForm"
          >
            ORDER NOW
          </a>
        </div>
      </div>
      {/* stories */}
      <div className="container-fluid">
        <h2 className="py-3 text-center h2-text">ART TELL STORIES</h2>
        <div className="row">
          <div className="col-md-6 p-0">
            <img className="img-fluid" src={story1} alt="story1" />
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              molestiae, iusto, cum voluptatem qui eum, quia magnam illo
              reprehenderit neque libero. Maxime vero architecto commodi quam
              magnam ullam repudiandae harum! Soluta vero repellat consequatur
              sit hic, aliquam esse dolorum quibusdam ea velit similique
              numquam? Consequuntur dolorem, voluptatem voluptates at suscipit
              labore sed, neque in blanditiis doloremque deleniti, non sint quas
              molestiae officia! Sed perspiciatis doloremque provident aperiam
              libero dignissimos vero voluptatibus blanditiis iste eius natus
              eveniet quidem facere recusandae nulla, maxime autem. Impedit
              asperiores nobis totam officiis reiciendis ex quaerat porro. A, ea
              ipsa nesciunt eos enim doloremque optio obcaecati?
            </p>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md-6 p-0 d-flex order-md-1">
            <img className="img-fluid" src={story2} alt="" />
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center order-md-0">
            <p className="text-muted">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              suscipit cupiditate voluptatum, consectetur quos quas facere
              doloremque qui eaque enim reiciendis voluptate autem voluptatibus
              excepturi eveniet sit amet incidunt, ab aperiam quidem fuga
              consequuntur ducimus. Cupiditate ut perferendis ipsa harum rem
              eius sunt, autem animi, repellendus itaque earum? Incidunt ex,
              vero dolore maiores deleniti illo dignissimos perspiciatis
              deserunt ducimus id. Sunt aperiam quas exercitationem iste
              repudiandae deleniti suscipit voluptatem consequuntur cumque sit!
              Dicta quod quibusdam nemo, voluptate placeat necessitatibus harum
              odio eaque omnis nihil doloribus distinctio cumque. Aliquid ullam,
              iure illum accusamus, eum, amet possimus adipisci incidunt
              eligendi esse cum?
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 p-0">
            <img className="img-fluid" src={story3} alt="" />
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <p className="text-muted">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              suscipit cupiditate voluptatum, consectetur quos quas facere
              doloremque qui eaque enim reiciendis voluptate autem voluptatibus
              excepturi eveniet sit amet incidunt, ab aperiam quidem fuga
              consequuntur ducimus. Cupiditate ut perferendis ipsa harum rem
              eius sunt, autem animi, repellendus itaque earum? Incidunt ex,
              vero dolore maiores deleniti illo dignissimos perspiciatis
              deserunt ducimus id. Sunt aperiam quas exercitationem iste
              repudiandae deleniti suscipit voluptatem consequuntur cumque sit!
              Dicta quod quibusdam nemo, voluptate placeat necessitatibus harum
              odio eaque omnis nihil doloribus distinctio cumque. Aliquid ullam,
              iure illum accusamus, eum, amet possimus adipisci incidunt
              eligendi esse cum?
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light my-0 py-5">
        <div className="row">
          <div className="col-md py-3 text-center">
            <h2>Artrisk made</h2>
            <p className="lead text-muted">The perfect fit for you</p>
          </div>
          <div className="col-md py-3 text-center">
            <h2>Affordable Price</h2>
            <p className="lead text-muted">Get 10% Discount</p>
          </div>
          <div className="col-md py-3 text-center">
            <h2>Fast delivery</h2>
            <p className="lead text-muted">Get your shirt ready within 3 weeks</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row shadow p-3 mb-5 bg-body">
          <h2 className="py-5 text-center h2-text">Shop By Style</h2>
          <div className="col-md">
            <figure className="snip0015 figure">
              <img className="img-fluid" src={model1} alt="sample38" />
              <figcaption className="text-center">
                <h2>
                  <span>RIGHT INTENTION </span> BAD EXECUTION
                </h2>
                <p className="lead">
                  We may want to do the right thing, But sometimes we have no
                  idea how to do it. We may have the right intention, But there
                  are times we do wrong things to make it known.
                </p>
              </figcaption>
            </figure>
          </div>
          <div className="col-md">
            <figure className="snip0015 figure">
              <img className="img-fluid" src={model2} alt="sample38" />
              <figcaption>
                <h2>
                  TAKE RISK <span>BREAK RULES</span> CREATE YOUR OWN STORY
                </h2>
                <p className="lead">
                  We need to go beyond our norms in order to create a beautiful
                  Story. Explore the unknown, Conquer your fear, Go out of your
                  comfort zone.
                </p>
              </figcaption>
            </figure>
          </div>
          <div className="col-md">
            <figure className="snip0015 figure">
              <img className="img-fluid" src={model3} alt="sample38" />
              <figcaption>
                <h2>
                  <span>NO PROMISES</span> NO BETRAYAL
                </h2>
                <p className="lead">
                  If you don't make promises, You won't have the chance to
                  betray. If you Believe someones promises, You give them the
                  opportunity to betray you.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="row py-3">
          <h2 className="text-center pb-5">New Arrival</h2>
          <div className="col-md">
            <div className="card">
              <img src={GOLD} className="card-img-top" alt="..." />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                New
              </span>
              <div className="card-body">
                <h5 className="card-title">TITLE</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolores aut vero deleniti distinctio officiis, maiores, inventore consequatur sapiente magni repellat. Blanditiis consequatur eligendi temporibus corporis inventore saepe eius ullam!
                </p>
                <a href="#" className="btn btn-primary">
                  Buy
                </a>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card">
              <img src={PURP} className="card-img-top" alt="..." />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                New
              </span>
              <div className="card-body">
                <h5 className="card-title">TITLE</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolores aut vero deleniti distinctio officiis, maiores, inventore consequatur sapiente magni repellat. Blanditiis consequatur eligendi temporibus corporis inventore saepe eius ullam!
                </p>
                <a href="#" className="btn btn-primary">
                  Buy
                </a>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card">
              <img src={GREEN} className="card-img-top" alt="..." />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                New
              </span>
              <div className="card-body">
                <h5 className="card-title">TITLE</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolores aut vero deleniti distinctio officiis, maiores, inventore consequatur sapiente magni repellat. Blanditiis consequatur eligendi temporibus corporis inventore saepe eius ullam!
                </p>
                <a href="#" className="btn btn-primary">
                  Buy
                </a>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card">
              <img src={GOLD} className="card-img-top" alt="..." />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                New
              </span>
              <div className="card-body">
                <h5 className="card-title">TITLE</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolores aut vero deleniti distinctio officiis, maiores, inventore consequatur sapiente magni repellat. Blanditiis consequatur eligendi temporibus corporis inventore saepe eius ullam!
                </p>
                <a href="#" className="btn btn-primary">
                  Buy
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center alighn-items-center py-3">
          <a
            href="main-items.html"
            className="btn btn-dark btn-lg text-center rounded-0"
          >
            Show More
          </a>
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
