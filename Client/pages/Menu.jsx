export default function Menu() {
  return (
    <>
      <section
        className="section pt-3"
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
                Canteen Menu
              </h2>
            </div>
            <div className="g-col-6">
              <div className="container text-center text-white">
                <div className="row" style={{margin: '0rem 3rem'}}>
                  {/* Col-1 */}
                  <div className="col card shadow-lg p-5 mb-5 rounded"
                      style={{
                        height: "fit-content",
                        backgroundColor: "#eeedeb",
                        display: "flex",
                        alignItems: "center",
                        border: "none",
                        borderStyle: "none",
                      }}>
                      <div className="card-body">
                        <h3 className="card-title mb-4">Coming Soon...</h3>
                      </div>
                    {/* </div> */}
                  </div>

                </div>
              </div>
            </div>
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
                Mess Menu
              </h2>
            </div>
            <div className="g-col-6">
              <div className="container text-center text-white">
                <div className="row" style={{margin: '0rem 3rem'}}>
                  {/* Breakfast */}
                  <div className="col">
                    <div
                      className="card m-auto shadow-lg p-3 mb-5 rounded"
                      style={{
                        height: "fit-content",
                        backgroundColor: "#eeedeb",
                        display: "flex",
                        alignItems: "center",
                        border: "none",
                        borderStyle: "none",
                      }}
                    >
                      <div className="card-body w-100">
                        <h3 className="card-title mb-4 pb-2" style={{borderBottom: '4px solid orange'}}>Breakfast</h3>
                        <div className="row text-start mb-3">
                          <div className="col-8 fw-bold">
                            Items
                          </div>
                          <div className="col-4 fw-bold text-center">
                            Rs.
                          </div>
                        </div>

                        {/* Items */}
                        {/* Item-1 */}
                        <div className="row text-start">
                          <div className="col-8">
                            Poha
                          </div>
                          <div className="col-4 text-center">
                            30
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Lunch */}
                  <div className="col">
                    <div
                      className="card m-auto shadow-lg p-3 mb-5 rounded"
                      style={{
                        height: "fit-content",
                        backgroundColor: "#eeedeb",
                        display: "flex",
                        alignItems: "center",
                        border: "none",
                        borderStyle: "none",
                      }}
                    >
                      <div className="card-body w-100">
                        <h3 className="card-title mb-4 pb-2" style={{borderBottom: '4px solid orange'}}>Lunch</h3>
                        <div className="row text-start mb-3">
                          <div className="col-8 fw-bold">
                            Items
                          </div>
                          <div className="col-4 fw-bold text-center">
                            Rs.
                          </div>
                        </div>

                        {/* Items */}
                        {/* Item-1 */}
                        <div className="row text-start">
                          <div className="col-8">
                            Paneer Masala
                          </div>
                          <div className="col-4 text-center">
                            50
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Dinner */}
                  <div className="col">
                    <div
                      className="card m-auto shadow-lg p-3 mb-5 rounded"
                      style={{
                        height: "fit-content",
                        backgroundColor: "#eeedeb",
                        display: "flex",
                        alignItems: "center",
                        border: "none",
                        borderStyle: "none",
                      }}
                    >
                      <div className="card-body w-100">
                        <h3 className="card-title mb-4 pb-2" style={{borderBottom: '4px solid orange'}}>Dinner</h3>
                        <div className="row text-start mb-3">
                          <div className="col-8 fw-bold">
                            Items
                          </div>
                          <div className="col-4 fw-bold text-center">
                            Rs.
                          </div>
                        </div>

                        {/* Items */}
                        {/* Item-1 */}
                        <div className="row text-start">
                          <div className="col-8">
                            Chole Masala
                          </div>
                          <div className="col-4 text-center">
                            40
                          </div>
                        </div>
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
  )
}