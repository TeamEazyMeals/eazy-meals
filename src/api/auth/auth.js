import GoTrue from "gotrue-js";

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

export const getUser=()=>{
const userString = window.localStorage.getItem("user")
if(!userString){
    return null
}return JSON.parse(userString);
}

export const calcIfLoggedIn=()=>{
const user=getUser();
return Boolean(user);
}

const auth = {
  calcIfLoggedIn,
  getUser,
  logIn,
  logOut,
  signup,
  sendResetLink,
  handleReset,
};

export default auth;
