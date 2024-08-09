import { useNavigate } from "react-router-dom";
// import Feedback from "../../pages/Feedback";
import FeedbackFetch from "../../components/FeedbackFetch";

export default function UserFeedback() {
  const navigate = useNavigate();
  return (
    <>
      <section
        className="section pt-3"
        id="about-us"
        style={{ backgroundColor: "#eeedeb" }}
      >
        <div className="container">
          <div className="grid">
            <div className="g-col-12" style={{ marginBottom: "2rem" }}>
              <div className="container">
                <div className="row align-items-center mx-5">
                  <div className="col">
                    <h2
                      className="mb-5"
                      style={{
                        fontSize: "3rem",
                        padding: "1rem 0rem",
                        width: "fit-content",
                        borderBottom: "5px solid orange",
                      }}
                    >
                      Feedbacks
                    </h2>
                  </div>
                  <div className="col text-end">
                    <button
                      className="btn shadow p-3 rounded button me-3 mb-3"
                      type="button"
                      onClick={() => navigate("/user/addfeedback")}
                    >
                      Write Feedback
                    </button>
                    <button
                      className="btn shadow p-3 rounded button mb-3 me-2"
                      type="button"
                      onClick={() => navigate("/user/deletefeedback")}
                    >
                      Delete Feedback
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="g-col-12">
              <FeedbackFetch />
            </div>
          </div>
        </div>
      </section>
      {/* <section style={{ backgroundColor: "#eeedeb" }}>
        <div className="container">
          <div className="row text-end">
            <div className="col">
              <button
                className="btn shadow p-3 mb-5 rounded button"
                type="button"
                onClick={() => navigate("/user/addfeedback")}
              >
                Write Feedback
              </button>
              <button
                className="btn shadow p-3 mb-5 rounded button"
                type="button"
                onClick={() => navigate("/user/deletefeedback")}
              >
                Delete Feedback
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
