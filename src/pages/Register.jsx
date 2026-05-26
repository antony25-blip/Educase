import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  return (

    <div className="page">

      <h1 className="title">
        Create your <br />
        PopX account
      </h1>

      <div className="inputBox">
        <label>Full Name<span className="star">*</span></label>

        <input
          type="text"
          placeholder="Marry Doe"
        />
      </div>

      <div className="inputBox">
        <label>Phone number<span className="star">*</span></label>

        <input
          type="text"
          placeholder="Marry Doe"
        />
      </div>

      <div className="inputBox">
        <label>Email address<span className="star">*</span></label>

        <input
          type="email"
          placeholder="Marry Doe"
        />
      </div>

      <div className="inputBox">
        <label>Password<span className="star">*</span></label>

        <input
          type="password"
          placeholder="Marry Doe"
        />
      </div>

      <div className="inputBox">
        <label>Company name</label>

        <input
          type="text"
          placeholder="Marry Doe"
        />
      </div>

      <p className="agencyText">
        Are you an Agency?<span className="star">*</span>
      </p>

      <div className="radioBox">

  <label>
    <input type="radio" name="agency" defaultChecked />
    <span className="customRadio"></span>
    Yes
  </label>

  <label>
    <input type="radio" name="agency" />
    <span className="customRadio"></span>
    No
  </label>

</div>

      <button
        className="createBtn"
        onClick={() => navigate("/profile")}
      >
        Create Account
      </button>

    </div>

  );
}

export default Register;