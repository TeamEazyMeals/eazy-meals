import { useState, useEffect } from "react";
import auth, { getUser } from "../api/auth/auth";
import { useHistory } from "react-router-dom";
import validator from "validator";


export const useAuth = (props) => {
  const { shouldBeLoggedIn, shouldNotBeLoggedIn } = props;
  useEffect(() => {
    auth.handleReset();

    if (shouldBeLoggedIn && auth.calcIfLoggedIn()) {
      history.push("/allrecipes");
    }
    if (shouldNotBeLoggedIn && auth.calcIfLoggedIn()) {
      history.push("/homepage/login");
    }
  }, []);

  const history = useHistory();
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailInput = (event) => setEmail(event.target.value);
  const handlePasswordInput = (event) => setPassword(event.target.value);
  const handleConfirmPasswordInput = (event) =>
    setConfirmPassword(event.target.value);

  const handleLoginForm = async (event) => {
    if (event.preventDefault) event.preventDefault();
    const error = await auth.logIn(email, password);
    if (!email || !password) {
      setError(error);
      return "Invalid-Email or Password";
    }
    history.push("/allrecipes");
  };

  const handleSignUpForm = async (event) => {
    if (event.preventDefault) event.preventDefault();
    const symbl = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

    if (!validator.isEmail(email)) {
      return setError("Invalid-Email");
    }

    if (symbl.test(password) === false) {
      return setError(
        "Password must contain minimum 8 letters and one special character"
      );
    }

    console.log("Singup Success");
    const error = await auth.signup(email, password);
    if (error) {
      setError(error);
      return;
    }
    history.push("/allrecipes");
  };
  const handleRequestPasswordForm = async (event) => {
    if (event.preventDefault) event.preventDefault();

    const error = await auth.requesrPasswordRecovery(email);
    if (error) {
      setError(error);
      return;
    }
  };
  const handleLogoutButton = () => {
    auth.logOut();
  };

  return {
    error,
    user: auth.getUser(),
    isLoggedIn: auth.calcIfLoggedIn(),
    email,
    handleEmailInput,
    password,
    handlePasswordInput,
    confirmPassword,
    handleConfirmPasswordInput,
    handleSignUpForm,
    handleLoginForm,
    handleLogoutButton,
    handleRequestPasswordForm,
  };
};
export default useAuth;
