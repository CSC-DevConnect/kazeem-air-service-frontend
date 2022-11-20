import React, { ChangeEvent, ChangeEventHandler, useContext } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../../constant";
import { useUserContext } from "../../context/userContext";

export const SignIn = () => {
  const [formValues, setFormValues] = React.useState({
    email: "",
    password: "",
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
      console.log(formValues);
      const url = `${BASE_URL}/auth/login`;
      const response = await axios.post(url, formValues);
      localStorage.setItem("user", JSON.stringify(response.data));
      if (response.status === 200) navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("An error occured!", {
        position: "top-right",
      });
    }
  };
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
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
          </SignInFormInput>
          <SignInFormInput>
            <MdOutlineLock />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </SignInFormInput>
          <Link to="/forgot-password" className="forgot-password">
            forgot password?
          </Link>
          <SignInFormButton>
            <button type="submit" onClick={handleSubmit}>
              login
            </button>
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
      <ToastContainer />
    </SignInContainer>
  );
};
