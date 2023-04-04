import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Register.scss";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);
  const [existingEmail, setExistingEmail] = useState(false);

  function passwordStrengthCheck() {
    let passwordStrength = 0;
    if (password.length >= 8) {
      // Weak password length
      passwordStrength++;
    }
    if (password.length >= 11) {
      // Good password length
      passwordStrength++;
    }
    if (password.length >= 14) {
      // Strong password length
      passwordStrength++;
    }
    if (/[A-Z]/.test(password)) {
      // Includes at least one uppercase letter
      passwordStrength++;
    }
    if (/[0-9]/.test(password)) {
      // Includes at least one digit
      passwordStrength++;
    }
    // eslint-disable-next-line
    if (/[!-\/:-@[-`{-~]/.test(password)) { // Includes at least one special character
      passwordStrength++;
    }
    return passwordStrength;
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
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

    // Check confirm password
    if (!confirmPassword) {
      setValidConfirmPassword("error");
      isFormValid = false;
    } 
    // Check that passwords match
    else if (confirmPassword !== password) {
      setValidConfirmPassword("error");
      isFormValid = false;
    } else {
      setValidConfirmPassword(true);
    }

    // Check that every field is valid
    return isFormValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setExistingEmail(false); // Clear the email error message on every form submission attempt, if the email is in use, the catch statement will handle it
    if (validateForm()) {
      axios.post("http://localhost:8080/users/register", {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error.response.data.error === "An account with this email already exists") {
          setExistingEmail(true);
        }
        return <h2>{error.message}</h2>
      });
    };
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
              <h3 className="register-form-error__message">
                {`${
                  email &&
                  !email.match(
                    /^([a-zA-Z\d.-]+)@([a-zA-Z\d]+)\.([a-zA-z]{2,10})$/
                  )
                    ? "Please enter a valid email"
                    : !email
                    ? "This field is required"
                    : ""
                }`}
              </h3>
            </div>
            <div
              className={`register-form-error ${
                existingEmail ? "register-form-error--show" : ""
              }`}
            >
              <h3 className="register-form-error__message">
                An account with this email already exists
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
              className={`${
                !password
                  ? "register-form-password-strength"
                  : "register-form-password-strength--show"
              }`}
            >
              <div
                className={`register-form-password-strength__meter ${
                  passwordStrengthCheck() <= 2
                    ? "register-form-password-strength__meter--weak"
                    : passwordStrengthCheck() <= 5
                    ? "register-form-password-strength__meter--good"
                    : "register-form-password-strength__meter--strong"
                }`}
              ></div>
              <h3
                className={`register-form-password-strength__text ${
                  passwordStrengthCheck() <= 2
                    ? "register-form-password-strength__text--weak"
                    : passwordStrengthCheck() <= 5
                    ? "register-form-password-strength__text--good"
                    : "register-form-password-strength__text--strong"
                }`}
              >
                {passwordStrengthCheck() <= 2
                  ? "Weak"
                  : passwordStrengthCheck() <= 5
                  ? "Good"
                  : "Strong"}
              </h3>
            </div>
            <div
              className={`register-form-error ${
                validPassword === "error" ? "register-form-error--show" : ""
              }`}
            >
              <h3 className="register-form-error__message">
                {`${!password ? "This field is required" : ""}`}
              </h3>
            </div>
          </div>
          <div className="register-form__input-group">
            <label className="register-form__label" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className={`register-form__input ${
                validConfirmPassword === "error"
                  ? "register-form__input--error"
                  : ""
              }`}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={handleChangeConfirmPassword}
            ></input>
            <div
              className={`register-form-error ${
                validConfirmPassword === "error"
                  ? "register-form-error--show"
                  : ""
              }`}
            >
              <h3 className="register-form-error__message">
                {`${
                  !confirmPassword
                    ? "This field is required"
                    : !password || (password && confirmPassword !== password)
                    ? "Passwords do not match"
                    : ""
                }`}
              </h3>
            </div>
          </div>
          <button className="register-form__button">Register</button>
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
