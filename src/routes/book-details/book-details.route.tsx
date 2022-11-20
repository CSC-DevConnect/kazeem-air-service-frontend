import React from "react";
import {
  BookDetailsContainer,
  BookDetailsContent,
  ContactDetails,
  FormContainer,
  TripDetails,
  CheckoutBtn
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
              <input type="email" name="fullName" placeholder="Email" />
              <input
                type="number"
                name="phoneNumber"
                placeholder="Phone Number"
              />
            </form>
          </FormContainer>

          <CheckoutBtn>Book Now</CheckoutBtn>
        </ContactDetails>
      </BookDetailsContent>
    </BookDetailsContainer>
  );
};
