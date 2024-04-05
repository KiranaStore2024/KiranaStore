import { Link } from "react-router-dom";

import "./Login.css";

function Login({ loginData, handleLoginData, handleLoginSubmit, isLoggedin }) {
  return (
    <div className="login">
      {isLoggedin ? (
        <>
          <h2>Logged in successfully!</h2>
          <button>
            <Link className="link" to="/kiranastore">Go to Home page</Link>
          </button>
        </>
      ) : (
        <>
          <h1>Login</h1>
          <br />
          <br />
          <form onSubmit={handleLoginSubmit}>
            <div>
              <label htmlFor="loginUsername">Username</label>
              <br />
              <input
                type="text"
                placeholder="Username"
                name="loginUsername"
                id="loginUsername"
                onChange={handleLoginData}
                value={loginData.loginUsername}
              />
            </div>
            <br />
            <div>
              <label htmlFor="loginPassword">Password</label>
              <br />
              <input
                type="password"
                placeholder="Password"
                name="loginPassword"
                id="loginPassword"
                onChange={handleLoginData}
                value={loginData.loginPassword}
              />
            </div>
            <br />
            <button>Login</button>
          </form>
          <br />
          <div>
            Don't have an account ? <Link to="/kiranastore/signup">Signup</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
