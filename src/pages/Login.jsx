import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  return (

    <div className="page">

      <h1 className="title">
        Signin to your <br />
        PopX account
      </h1>

      <p className="subtitle">
        Lorem ipsum dolor sit amet,
        <br />  
        consectetur adipiscing elit,
      </p>

      <div className="inputBox">
        <label>Email Address</label>

        <input
          type="email"
          placeholder="Enter email address"
        />
      </div>

      <div className="inputBox">
        <label>Password</label>

        <input
          type="password"
          placeholder="Enter password"
        />
      </div>

      <button
        className="loginBtn"
        onClick={() => navigate("/profile")}
      >
        Login
      </button>

    </div>

  );
}

export default Login;