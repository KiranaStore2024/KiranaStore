import { Link } from "react-router-dom";

import "./Navbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Navbar({
  setIsLoggedin,
  isLoggedin,
  user,
  setIsLogoutBtn,
  isLogoutBtn,
}) {
  return (
    <div className="navbar">
      <h3>KIRANA STORE 🛒</h3>
      {isLoggedin ? (
        <div className="profile_box">
          <span className="profile" onClick={() => setIsLogoutBtn(!isLogoutBtn)}>
            <AccountCircleIcon className="icon" />{" "}
            {user
              .slice(0, 1)
              .toUpperCase()
              .concat(user.slice(1, 5).toLowerCase())}
            <span onClick={() => setIsLogoutBtn(true)}>
              <KeyboardArrowDownIcon />
            </span>
          </span>
          <span
            onClick={() => setIsLoggedin(false)}
            className="logout_btn"
            style={isLogoutBtn ? { display: "block" } : { display: "none" }}
          >
            <Link className="nav_link" to="/kiranastore/login">
              Logout
            </Link>
          </span>
        </div>
      ) : (
        <Link className="nav_link" to="/">
          Login
        </Link>
      )}
    </div>
  );
}

export default Navbar;
