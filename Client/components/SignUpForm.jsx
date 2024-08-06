export default function SignUpForm({userinfo, handleInput, handleSubmit}) {
  console.log(userinfo);
  return (
    <>
      <section
        className="section"
        id="about-us"
        style={{ backgroundColor: "#eeedeb" }}
      >
        <div className="container">
          <div className="grid">
            <div className="g-col-6">
              <h2
                className="m-auto mb-5"
                style={{
                  fontSize: "3rem",
                  paddingBottom: "1rem",
                  width: "fit-content",
                  borderBottom: "5px solid orange",
                }}
              >
                Sign Up
              </h2>
            </div>
            <div className="g-col-6">
              <div className="container text-white">
                <div className="row" style={{ margin: "0rem 3rem" }}>
                  {/* Col-1 */}
                  <div
                    className="col card shadow-lg p-5 mb-5 rounded"
                    style={{
                      height: "fit-content",
                      backgroundColor: "#eeedeb",
                      display: "flex",
                      alignItems: "center",
                      border: "none",
                      borderStyle: "none",
                    }}
                  >
                    <div className="card-body">
                      <form className="row g-3" method="POST" onSubmit={handleSubmit}>
                        <div className="col-md-6">
                          <label htmlFor="inputName4" className="form-label">
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                            name="name"
                            value={userinfo.name}
                            onChange={handleInput}
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="inputRollNo4" className="form-label">
                            Roll Number
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Roll Number"
                            name='rollNo'
                            value={userinfo.rollNo}
                            onChange={handleInput}
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="inputEmail4" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Your College Email"
                            name='email'
                            value={userinfo.email}
                            onChange={handleInput}
                          />
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="inputPassword4"
                            className="form-label"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            name='password'
                            value={userinfo.password}
                            onChange={handleInput}
                          />
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="inputQuestion" className="form-label">
                            Question
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter a question account recovery"
                            name='question'
                            value={userinfo.question}
                            onChange={handleInput}
                          />
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="inputAnswer" className="form-label">
                            Secret Answer
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Answer"
                            name='answer'
                            value={userinfo.answer}
                            onChange={handleInput}
                          />
                        </div>
                        <div className="col-md-2">
                          <label htmlFor="inputAnswer" className="form-label">
                            Branch
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Branch"
                            name='branch'
                            value={userinfo.branch}
                            onChange={handleInput}
                          />
                        </div>
                        <div className="col-md-2">
                          <label htmlFor="inputRole" className="form-label">
                            Role
                          </label>
                          <select id="inputRole" className="form-select"
                          name='role'
                          value={userinfo.role}
                          onChange={handleInput}>
                            <option selected>Select</option>
                            <option>User</option>
                            <option>Canteen</option>
                          </select>
                        </div>
                        <div className="col-12 text-end mt-5">
                          <button type="submit" className="btn btn-outline-danger" style={{width: '9rem', height: '3rem', fontSize: '1.1rem'}}>Sign Up</button>
                        </div>
                      </form>
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
