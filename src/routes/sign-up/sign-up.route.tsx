import React from "react";

export const SignUp = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Get Started</h1>
        </div>
        <div>
          <form>
            <div>
              <input type="text" name="fullname" placeholder="Full Name" />
              <input type="email" name="email" placeholder="Email" />
              <input type="password" name="password" placeholder="Password" />
              <input type="date" name="dob" placeholder="dob" />
              <input type="number" name="number" placeholder="Contact Number" />
              <span>Gender</span>
              <label className="container">
                GEN
                <input type="radio" name="radio" checked />
                <span className="check"></span>
              </label>
              <label className="container">
                OBC
                <input type="radio" name="radio" />
                <span className="check"></span>
              </label>
            </div>
          </form>

          <div></div>
        </div>
      </div>
    </div>
  );
};
