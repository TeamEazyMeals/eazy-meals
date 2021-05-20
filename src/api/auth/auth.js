import { Email } from "@material-ui/icons";
import GoTrue from "gotrue-js";
import validator from "validator";

const gotTrueInstance = new GoTrue({
  APIUrl: "https://eazy-meals.netlify.app/.netlify/identity",
});

export const logIn = async (email, password) => {
  try {
    const response = await gotTrueInstance.login(email, password);
    window.localStorage.setItem("user", JSON.stringify(response));
    return null;
  } catch (error) {
    console.error(error);
    return error.toString();
  }
};

export const validateEmail = () => {
  if (!validator.isEmail(email)) return ("Invalid-Email");
}
export const validatePassword = () => {
  const symbl = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  if (symbl === false)
      return [true, "Password must contain minimum 8 letters and one special character"]
  else
      return [false, ""]
}

export const logOut = () => {
  try {
    window.localStorage.removeItem("user");
    return null;
  } catch (error) {
    console.error(error);
    return error.toString();
  }
};

export const signup = async (email, password) => {
  try {
    await gotTrueInstance.signup(email, password);
    const response = await gotTrueInstance.login(email, password);
    window.localStorage.setItem("user", JSON.stringify(response));
    return null;
  } catch (error) {
    console.error(error);
    return error.toString();
  }
};

export const sendResetLink = async (email) => {
  try {
    await gotTrueInstance
      .requestPasswordRecovery(email)
      .then((response) => console.log("Recovery email sent", { response }))
      .catch((error) => console.log("Error sending recovery mail: %o", error));
  } catch (error) {
    console.error(error);
    return error.toString();
  }
};

export const handleReset = async () => {
  const { hash } = window.location.hash;
  if (hash) {
    const [token] = hash.match(/(?<=^#recovery_token\=).*/);
    const user = await auth.recover(token);
    window.localStorage.setItem("user", JSON.stringify(user));
  }
};

export const getUser = () => {
  const userString = window.localStorage.getItem("user");
  if (!userString) {
    return null;
  }

  return JSON.parse(userString);
};

export const calcIfLoggedIn = () => {
  const user = getUser();
  return Boolean(user);
};

const auth = {
  calcIfLoggedIn,
  getUser,
  logIn,
  validateEmail,
  validatePassword,
  logOut,
  signup,
  sendResetLink,
  handleReset,
};

export default auth;
