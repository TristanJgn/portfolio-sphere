import { useState } from "react";
import errorIcon from "../../assets/icons/error.svg";
import "./Login.scss";

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const handleChangeEmail = (event) => {
      setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const validateForm = () => {
    // Variable to check if form is valid
    let isFormValid = true;

    // Check email
    // Use a regex expression to check for a valid email:
    // Must have 1 or more alphanumeric characters (allows for a dot or hyphen as well) before an @ sign
    // Must then 1 or more alphanumeric characters before (not allowing for a dot or hyphen) before a .
    // Must be followed by a domain which only has letters and is between 2-10 characters long
    const emailRegexValidation =
      /^([a-zA-Z\d.-]+)@([a-zA-Z\d]+)\.([a-zA-z]{2,10})$/;
    if (!email.match(emailRegexValidation)) {
      setValidEmail("error");
      isFormValid = false;
    } else {
      setValidEmail(true);
    }

    if (!password) {
      setValidPassword("error");
      isFormValid = false;
    } else {
      setValidPassword(true);
    }

    // Check that every field is valid
    return isFormValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();
  };

  return (
    <main className="login-page">
      <section className="login-form-container">
        <h2 className="login-form-container__title">SIGN IN</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form__input-group">
            <label className="login-form__label" htmlFor="email">
              Email
            </label>
            <input
              className={`login-form__input ${
                validEmail === "error" ? "login-form__input--error" : ""
              }`}
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email address"
              value={email}
              onChange={handleChangeEmail}
            ></input>
            <div
              className={`login-form-error ${
                validEmail === "error" ? "login-form-error--show" : ""
              }`}
            >
              <img
                className="login-form-error__icon"
                src={errorIcon}
                alt="error icon"
              />
              <h3 className="login-form-error__message">
                {`${
                  email && validEmail === "error"
                    ? "Please enter a valid email"
                    : "This field is required"
                }`}
              </h3>
            </div>
          </div>
          <div className="login-form__input-group">
            <label className="login-form__label" htmlFor="password">
              Password
            </label>
            <input
              className={`login-form__input ${
                validPassword === "error" ? "login-form__input--error" : ""
              }`}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleChangePassword}
            ></input>
            <div
              className={`login-form-error ${
                validPassword === "error" ? "login-form-error--show" : ""
              }`}
            >
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
          <button className="login-form__button">Login</button>
        </form>
      </section>
    </main>
  );
}

export default Login;
