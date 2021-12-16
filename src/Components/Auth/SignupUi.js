import "./SignupUi.css";
import { userO } from "react-icons-kit/fa/userO";
import { Icon } from "react-icons-kit";
import { ic_lock_open } from "react-icons-kit/md/ic_lock_open";
import { ic_mail_outline } from "react-icons-kit/md/ic_mail_outline";

function SignupUi() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div>
            <h1 style={{ fontFamily: "cursive" }}>Sign Up </h1>
            <div>
              <Icon icon={userO} size={20} className="email" />
              <input type="text" placeholder="name" className="name" />
            </div>
            <div className="second-input">
              <Icon icon={ic_mail_outline} size={20} className="email" />
              <input type="email" placeholder="email" className="name" />
            </div>
            <div className="second-input">
              <Icon icon={ic_lock_open} size={20} className="email" />
              <input type="password" placeholder="password" className="name" />
            </div>
            <div className="login-button">
                <button onClick={(event) => (window.location.href = "/home")}>
                  Sign up
                </button>
            </div>
            <p className="link">
              <a href="/">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupUi;
