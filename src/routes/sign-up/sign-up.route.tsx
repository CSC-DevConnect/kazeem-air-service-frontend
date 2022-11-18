/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FormContainer,
  FormTitle,
  ImageBox,
  SignUpButton,
  SignUpContainer,
  SignUpContent,
} from "./sign-up.styles";
import signupImage from "../../assets/signup.png";

export const SignUp = () => {
  return (
    <SignUpContainer>
      <SignUpContent>
        <FormContainer>
          <form>
            <FormTitle>Create an account</FormTitle>
            <input type="text" name="" placeholder="Username" />
            <input type="email" name="" placeholder="Email Address" />
            <input type="email" name="" placeholder="Email Address" />
            <input type="email" name="" placeholder="Email Address" />
            <input type="email" name="" placeholder="Email Address" />
            <input type="password" name="" placeholder="Create Password" />
            <input type="password" name="" placeholder="Confirm Password" />
            <SignUpButton type="submit" name="" value="Sign Up" />
            <p>
              Already have an account ?<a href="/login">Sign in.</a>
            </p>
          </form>
        </FormContainer>
        <ImageBox>
          <img
            src={signupImage}
            alt=""
          />
        </ImageBox>
      </SignUpContent>
    </SignUpContainer>
  );
};
