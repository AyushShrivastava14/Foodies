import bg from "../Videos/Home_vid.mp4";
import img1 from "../Images/Ayush.jpeg";
import img2 from "../Images/Hardik.jpeg";
import img3 from "../Images/Harsh.jpeg";
import linkedin from "../Images/linkedin.png";
import github from "../Images/github.png";

export default function Home() {
  return (
    <>
      <section>
        <div className="card">
          <div className="video-container">
            <video
              src={bg}
              className="card-img"
              alt="Error"
              autoPlay
              loop
              muted
            />
            <div className="overlay"></div>
          </div>
          <div className="card-img-overlay center" style={{ color: "white" }}>
            <h1
              className="card-title fw-bold my-0"
              style={{ fontSize: "8rem" }}
            >
              FOODIES
            </h1>
            <h2>Connecting You And Canteen</h2>
          </div>
        </div>
      </section>

      <section
        className="section pt-5"
        id="about-us"
        style={{ backgroundColor: "#eeedeb" }}
      >
        <div className="container">
          <div className="grid">
            <div className="g-col-6 text-start">
              <h2
                style={{
                  fontSize: "3rem",
                  padding: "1.5rem 0rem 1rem 0rem",
                  width: "fit-content",
                  margin: "0rem 5rem 5rem 5rem",
                  borderBottom: "5px solid orange",
                }}
              >
                Team Members
              </h2>
            </div>
            <div className="g-col-6">
              <div className="container text-center text-white">
                <div className="row">
                  {/* Col-1 */}
                  <div className="col">
                    <div
                      className="card m-auto shadow-lg p-3 mb-5 rounded"
                      style={{
                        width: "20rem",
                        height: "fit-content",
                        backgroundColor: "#eeedeb",
                        display: "flex",
                        alignItems: "center",
                        border: "none",
                        borderStyle: "none",
                      }}
                    >
                      <div className="card-body">
                        <img
                          src={img1}
                          className="card-img-top mb-4 rounded"
                          alt="..."
                          style={{
                            width: "100px",
                            height: "100px",
                          }}
                        />
                        <h3 className="card-title mb-4">Ayush Shrivastava</h3>
                        <p
                          className="card-text p-1"
                          style={{ fontSize: "1rem", textAlign: "center" }}
                        >
                          Final Year, CSE
                          <div className="mt-4 text-center">
                          <a href="https://www.linkedin.com/in/ayush-shrivastava-693407230" target="_blank" style={{marginRight: '2rem'}}>
                            <img
                              className="rounded-circle"
                              src={linkedin}
                              alt=""
                              style={{ width: "40px", height: "40px"}}
                            />
                          </a>
                          <a href="https://github.com/AyushShrivastava14" target="_blank">
                            <img
                              className="rounded-circle"
                              src={github}
                              alt=""
                              style={{ width: "50px", height: "50px" }}
                            />
                          </a>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Col-2 */}
                  <div className="col">
                    <div
                      className="card m-auto shadow-lg p-3 mb-5 rounded"
                      style={{
                        width: "20rem",
                        height: "fit-content",
                        backgroundColor: "#eeedeb",
                        display: "flex",
                        alignItems: "center",
                        border: "none",
                        borderStyle: "none",
                      }}
                    >
                      <div className="card-body">
                        <img
                          src={img2}
                          className="card-img-top mb-4 rounded"
                          alt="..."
                          style={{
                            width: "100px",
                            height: "100px",
                          }}
                        />
                        <h3 className="card-title mb-4">Hardik Gupta</h3>
                        <p
                          className="card-text p-1"
                          style={{ fontSize: "1rem", textAlign: "center" }}
                        >
                          Final Year, CSE
                          <div className="mt-4 text-center">
                          <a href="https://www.linkedin.com/in/hardik-g-15a806237/" target="_blank" style={{marginRight: '2rem'}}>
                            <img
                              className="rounded-circle"
                              src={linkedin}
                              alt=""
                              style={{ width: "40px", height: "40px"}}
                            />
                          </a>
                          <a href="https://github.com/ghardik25" target="_blank">
                            <img
                              className="rounded-circle"
                              src={github}
                              alt=""
                              style={{ width: "50px", height: "50px" }}
                            />
                          </a>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Col-3 */}
                  <div className="col">
                    <div
                      className="card m-auto shadow-lg p-3 mb-5 rounded"
                      style={{
                        width: "20rem",
                        height: "fit-content",
                        backgroundColor: "#eeedeb",
                        display: "flex",
                        alignItems: "center",
                        border: "none",
                        borderStyle: "none",
                      }}
                    >
                      <div className="card-body">
                        <img
                          src={img3}
                          className="card-img-top mb-4 rounded"
                          alt="..."
                          style={{
                            width: "100px",
                            height: "100px",
                          }}
                        />
                        <h3 className="card-title mb-4">Harsh Dixit</h3>
                        <p
                          className="card-text p-1"
                          style={{ fontSize: "1rem", textAlign: "center" }}
                        >
                          Final Year, CSE
                          <div className="mt-4 text-center">
                          <a href="https://www.linkedin.com/in/harsh-dixit-a89756203/" target="_blank" style={{marginRight: '2rem'}}>
                            <img
                              className="rounded-circle"
                              src={linkedin}
                              alt=""
                              style={{ width: "40px", height: "40px"}}
                            />
                          </a>
                          <a href="https://github.com/Harshdixit654" target="_blank">
                            <img
                              className="rounded-circle"
                              src={github}
                              alt=""
                              style={{ width: "50px", height: "50px" }}
                            />
                          </a>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
