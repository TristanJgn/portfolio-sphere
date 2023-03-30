import { useState } from "react";
import errorIcon from "../../assets/icons/error.svg";
import "./Login.scss";

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleChangeEmail = (event) => {
      setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <main className="login-page">
      <section className="login-form-container">
        <h2 className="login-form-container__title">Sign In</h2>
        <form className="login-form">
          <div className="login-form__input-group">
            <label className="login-form__label" htmlFor="email"></label>
            <input
              className="login-form__input"
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email address"
              value={email}
              onChange={handleChangeEmail}
            ></input>
            <div className={`login-form-error`}>
              <img
                className="login-form-error__icon"
                src={errorIcon}
                alt="error icon"
              />
              <h3 className="login-form-error__message">
                This field is required
              </h3>
            </div>
          </div>
          <div className="login-form__input-group">
            <label className="login-form__label" htmlFor="password"></label>
            <input
              className="login-form__input"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleChangePassword}
            ></input>
            <div className={`login-form-error`}>
              <img
                className="login-form-error__icon"
                src={errorIcon}
                alt="error icon"
              />
              <h3 className="login-form-error__message">
                This field is required
              </h3>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;
