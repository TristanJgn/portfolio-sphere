import { useState } from "react";
import { Link } from "react-router-dom";
import errorIcon from "../../assets/icons/error.svg";
import "./Register.scss";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

    // Check password
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
    <main className="register-page">
      <section className="register-form-container">
        <h2 className="register-form-container__title">SIGN UP</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="register-form__input-group">
            <label className="register-form__label" htmlFor="email">
              Email
            </label>
            <input
              className={`register-form__input ${
                validEmail === "error" ? "register-form__input--error" : ""
              }`}
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email address"
              value={email}
              onChange={handleChangeEmail}
            ></input>
            <div
              className={`register-form-error ${
                validEmail === "error" ? "register-form-error--show" : ""
              }`}
            >
              <img
                className="register-form-error__icon"
                src={errorIcon}
                alt="error icon"
              />
              <h3 className="register-form-error__message">
                {`${
                  email && validEmail === "error"
                    ? "Please enter a valid email"
                    : "This field is required"
                }`}
              </h3>
            </div>
          </div>
          <div className="register-form__input-group">
            <label className="register-form__label" htmlFor="password">
              Password
            </label>
            <input
              className={`register-form__input ${
                validPassword === "error" ? "register-form__input--error" : ""
              }`}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleChangePassword}
            ></input>
            <div
              className={`register-form-error ${
                validPassword === "error" ? "register-form-error--show" : ""
              }`}
            >
              <img
                className="register-form-error__icon"
                src={errorIcon}
                alt="error icon"
              />
              <h3 className="register-form-error__message">
                This field is required
              </h3>
            </div>
          </div>
          <button className="register-form__button">Reigster</button>
        </form>
        <h3 className="register-form-container__subtext">
          Already have an account?{" "}
          <Link to="/login" className="register-form-container__subtext-link">
            <span className="register-form-container__subtext--special">
              Sign in
            </span>
          </Link>
        </h3>
      </section>
    </main>
  );
}

export default Register;
