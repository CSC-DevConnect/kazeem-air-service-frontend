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
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../../constant";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [formValues, setFormValues] = React.useState({
    fullName: "",
    email: "",
    password: "",
    country: "",
    phoneNumber: "",
    gender: "",
  });

  const navigate = useNavigate();

  const handleChange: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const password = formValues.password;

    // check if password is less than 8 characters
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long!", {
        position: "top-right",
      });
      return;
    }

    // check if pasword contains number
    const hasNumber = /\d/;
    const hasAlphabet = /[a-zA-Z]/;

    if (!hasNumber.test(password) || !hasAlphabet.test(password)) {
      toast.error("Password must contain a number!", {
        position: "top-right",
      });
      return;
    }

    try {
      console.log(formValues);
      const url = `${BASE_URL}/auth/register`;
      const response = await axios.post(url, formValues);
      if (response.status === 201) navigate("/signin");
    } catch (error: any) {
      toast.error("An error occured!", {
        position: "top-right",
      });
    }
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
              type="text"
              name="country"
              placeholder="Country"
              onChange={handleChange}
            />
            <input
              type="text"
              name="phoneNumber"
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
      <ToastContainer />
    </SignUpContainer>
  );
};
