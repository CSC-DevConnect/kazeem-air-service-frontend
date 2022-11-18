/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ChangeEvent, ChangeEventHandler } from "react";
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
  const [formValues, setFormValues] = React.useState({
    fullName: "",
    email: "",
    password: "",
    country: "",
    phoneNumber: "",
    gender: "",
  });

  const handleChange: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <SignUpContainer>
      <SignUpContent>
        <FormContainer>
          <form>
            <FormTitle>Create an account</FormTitle>
            <input
              type="text"
              name="fullName"
              placeholder="Username"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Create Password"
              onChange={handleChange}
            />
            <input
              type="test"
              name="country"
              placeholder="Country"
              onChange={handleChange}
            />
            <input
              type="number"
              name="number"
              placeholder="Phone Number"
              onChange={handleChange}
            />
            <input
              type="text"
              name="gender"
              placeholder="Gender"
              onChange={handleChange}
            />
            <SignUpButton
              type="submit"
              name=""
              value="Sign Up"
              onClick={handleSubmit}
            />
            <p>
              Already have an account ?<a href="/login">Sign in.</a>
            </p>
          </form>
        </FormContainer>
        <ImageBox>
          <img src={signupImage} alt="" />
        </ImageBox>
      </SignUpContent>
    </SignUpContainer>
  );
};
