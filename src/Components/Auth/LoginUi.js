import "./LoginUi.css";
import profile from "../../assets/profile.png";
import { userO } from "react-icons-kit/fa/userO";
import { Icon } from "react-icons-kit";
import { ic_lock_open } from "react-icons-kit/md/ic_lock_open";

function LoginUi() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1 style={{ fontFamily: "cursive" }}>Login</h1>
            <div>
              <Icon icon={userO} size={20} className="email" />
              <input type="text" placeholder="user name" className="name" />
            </div>
            <div className="second-input">
              <Icon icon={ic_lock_open} size={20} className="email" />
              <input type="password" placeholder="password" className="name" />
            </div>
            <div className="login-button">
                <button
                  onClick={(event) => (window.location.href = "/home")}
                >
                  Login
                </button>
            </div>

            <p className="link">
              <a href="#">Forgot password ?</a> Or <a href="signup">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginUi;
