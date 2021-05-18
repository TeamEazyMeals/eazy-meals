import { Redirect } from "react-router-dom";

import FetchRecipes from "../../components/FetchRecipes/FetchRecipes";
import  useAuth from "../../utility/useAuth"
const AllRecipes = () => {
  const {
    error,
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
  } = useAuth();

  if (!isLoggedIn) {
    return <Redirect to="/login"></Redirect>;
  }
  
  return (
    <>
      <nav>
        <button onClick={handleLogout}>Log out</button>
      </nav>
      <FetchRecipes></FetchRecipes>
    </>
  );
};

export default AllRecipes;
