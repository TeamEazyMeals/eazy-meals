import React from "react";
import useAuth from "../../utility/useAuth"


const ForgotPassword =()=>{
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
      handleForgotPassword,
      setEmail
    } = useAuth();
   return (
     <>
     <h1>Find your easy meals account</h1>
       <form name="forgotpassword" onSubmit={handleForgotPassword}>
         <p>
           <label>
             Enter Your Email
             <input
               type="email"
               name="email"
               required
               onChange={(event) => setEmail(event.target.value)}
             />
           </label>
         </p>
         
         <button type="submit">Reset password</button>
       </form>
     </>
   ); 
}
export default ForgotPassword;

































