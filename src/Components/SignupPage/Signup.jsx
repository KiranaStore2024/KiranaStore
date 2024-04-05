import { Link } from "react-router-dom";

import "./Signup.css";

function Signup({ signupData, handleSignupData, handleSignupSubmit }) {
  return (
    <div className="signup">
      <h1>Signup</h1>
      <br />
      <br />
      <form onSubmit={handleSignupSubmit}>
        <div>
          <label htmlFor="signupUsername">Username</label>
          <br />
          <input
            type="text"
            placeholder="Username"
            name="signupUsername"
            id="signupUsername"
            onChange={handleSignupData}
            value={signupData.signupUsername}
          />
        </div>
        <br />
        <div>
          <label htmlFor="signupEmail">E-mail</label>
          <br />
          <input
            type="email"
            placeholder="E-mail"
            name="signupEmail"
            id="signupEmail"
            onChange={handleSignupData}
            value={signupData.signupEmail}
          />
        </div>
        <br />
        <div>
          <label htmlFor="signupPassword">Password</label>
          <br />
          <input
            type="password"
            placeholder="Password"
            name="signupPassword"
            id="signupPassword"
            onChange={handleSignupData}
            value={signupData.signupPassword}
          />
        </div>
        <br />
        <button>Signup</button>
      </form>
      <br />
      <div>
        Already have an account ? <Link to="/">Login</Link>
      </div>
    </div>
  );
}

export default Signup;
