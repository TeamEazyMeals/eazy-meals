import React from "react";
import useLogIn from "../SignUpSetUpLoreen/useSignUp"


const ForgotPassword =()=>{
    const {
      setEmail,
      handleForgotPassword,
    } = useLogIn();
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

































