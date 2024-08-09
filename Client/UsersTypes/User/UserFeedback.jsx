import { useNavigate } from "react-router-dom";
import Feedback from "../../pages/Feedback";

export default function UserFeedback() {
  const navigate = useNavigate();
  return (
    <>
      <Feedback />
      <section style={{backgroundColor: '#eeedeb'}}>
        <div className="container">
          <div className="row text-end">
            <div className="col">
              <button
                className="btn shadow p-3 mb-5 rounded button"
                type="button"
                onClick={() => navigate('/user/addfeedback')}
              >
                Write Feedback
              </button>
              <button
                className="btn shadow p-3 mb-5 rounded button"
                type="button"
                onClick={() => navigate('/user/deletefeedback')}
              >
                Delete Feedback
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
