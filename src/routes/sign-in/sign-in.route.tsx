import React from "react";
import {
  SignInAlt,
  SignInAltText,
  SignInContainer,
  SignInForm,
  SignInFormButton,
  SignInFormInput,
  SignInHeader,
  SignInWrapper,
} from "./sign-in.styles";
import { MdOutlineAlternateEmail, MdOutlineLock } from "react-icons/md";
import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <SignInContainer>
      <SignInWrapper>
        <SignInHeader>
          <h3>login</h3>
          <p>Hey, Enter your details to get sign in to your account</p>
        </SignInHeader>
        <SignInForm>
          <SignInFormInput>
            <MdOutlineAlternateEmail />
            <input type="text" placeholder="Email" />
          </SignInFormInput>
          <SignInFormInput>
            <MdOutlineLock />
            <input type="password" placeholder="Password" />
          </SignInFormInput>
          <Link to="/forgot-password" className="forgot-password">
            forgot password?
          </Link>
          <SignInFormButton>
            <button type="submit">login</button>
          </SignInFormButton>
        </SignInForm>
      </SignInWrapper>
      <SignInAlt>
        <SignInAltText>
          <h3>Don’t have an account yet?</h3>
          <p>
            Monitor your bookings and have access <br /> to our latest offers
            and news.
          </p>
          <Link to="/signup" className="register-link">
            Create a new account
          </Link>
        </SignInAltText>
      </SignInAlt>
    </SignInContainer>
  );
};
