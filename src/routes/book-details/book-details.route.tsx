import React from "react";
import {
  BookDetailsContainer,
  BookDetailsContent,
  ContactDetails,
  FormContainer,
  TripDetails,
  CheckoutBtn,
} from "./book-details.styles";
import plane from "../../assets/Vector.png";

export const BookDetails = () => {
  return (
    <BookDetailsContainer>
      <BookDetailsContent>
        <TripDetails>
          <p>Trip Details</p>
          <div>
            <div className="trip-meta-data">
              <div>
                <h3>Lagos</h3>
                <h3>Abuja</h3>
              </div>
              <div>
                <p>22 Nov 2022</p>
                <p>3 Adults 3 Children 2 Infants</p>
              </div>
            </div>
            <div className="journey">
              <span className="journey-type">Departure Journey</span>
              <div className="airline">
                <div className="air-icon">
                  <img src={plane} alt="plane" />
                  <p>Dana Air</p>
                </div>
                <div className="departure-airline">
                  <span>22 Nov 22</span>
                  <h3>Abuja, Nnamdi Azikiwe International Airport</h3>
                  <span>11:10</span>
                </div>
                <div className="departure-airline">
                  <span>1hrs 20min</span>
                  <h3>Abuja, Nnamdi Azikiwe International Airport</h3>
                  <span>Economy</span>
                </div>
                <div className="return-airline">
                  <span>22 Nov 22</span>
                  <h3>Abuja, Nnamdi Azikiwe International Airport</h3>
                  <span>11:10</span>
                </div>
              </div>
            </div>
          </div>
        </TripDetails>
        <ContactDetails>
          <div className="trip-meta-data">
            <div>
              <h3>Contact details</h3>
              <p>
                We will send your booking confirmation to these contact details.
              </p>
            </div>
          </div>
          <FormContainer>
            <form>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input"
              />
              <label htmlFor="email">Full Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Surname First"
                className="input"
              />
              <label htmlFor="phoneNumber">Contact Number:</label>
              <input
                type="number"
                name="phoneNumber"
                placeholder="Phone Number"
                className="input"
              />
              <label htmlFor="date">Date of Birth:</label>
              <input
                type="date"
                name="date"
                placeholder="Phone Number"
                className="input"
              />
              <div>
                <strong>Gender:</strong>
                <label htmlFor="male">Male</label>
                <input name="gender" id="male" type="radio" value="male" />

                <label htmlFor="female">Female</label>
                <input name="gender" id="female" type="radio" value="female" />
              </div>
              <div>
                <strong>Title:</strong>
                <label htmlFor="mr">Mr</label>
                <input name="gender" id="mr" type="radio" value="mr" />
                <label htmlFor="mrs">Mrs</label>
                <input name="gender" id="mrs" type="radio" value="mrs" />
                <label htmlFor="ms">Ms</label>
                <input name="gender" id="ms" type="radio" value="ms" />
              </div>
            </form>
          </FormContainer>
          <CheckoutBtn>Book Now</CheckoutBtn>
        </ContactDetails>
      </BookDetailsContent>
    </BookDetailsContainer>
  );
};
