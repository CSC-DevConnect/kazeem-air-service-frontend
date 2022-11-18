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
    try {
      console.log(formValues)
      const payload = {
        fullName: formValues.fullName,
        email: formValues.email,
        password: formValues.password,
        country: formValues.country,
        phoneNumber: formValues.phoneNumber,
        gender: formValues.gender,
      }

      console.log(payload)
      const url = `${BASE_URL}/auth/register`;
      const response = await axios.post(url, payload);
      console.log(response.data);
      navigate('/signin')
    } catch (error) {
      console.log(error);
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
