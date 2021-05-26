import React from "react";
import useAuth from "../../utility/useAuth";

const ForgotPassword = () => {
  const {
    handleEmailInput,
    handleRequestPasswordForm,
  } = useAuth();
  return (
    <>
      <h1>Find your easy meals account</h1>
      <form name="forgotpassword" onSubmit={handleRequestPasswordForm}>
        <p>
          <label>
            Enter Your Email
            <input
              type="email"
              name="email"
              required
              onChange={handleEmailInput}
            />
          </label>
        </p>

        <button type="submit">Reset password</button>
      </form>
    </>
  );
};
export default ForgotPassword;
