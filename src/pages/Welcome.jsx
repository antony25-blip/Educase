import { useNavigate } from "react-router-dom";

function Welcome() {

  const navigate = useNavigate();

  return (

    <div className="page welcome-page">

      <div className="content">

        <h1 className="title">
          Welcome to PopX
        </h1>

        <p className="subtitle">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <button
          className="btn1"
          onClick={() => navigate("/register")}
        >
          Create Account
        </button>

        <button
          className="btn2"
          onClick={() => navigate("/login")}
        >
          Already Registered? Login
        </button>

      </div>

    </div>

  );
}

export default Welcome;