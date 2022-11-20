/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, ChangeEventHandler } from "react";
import {
  BookDetailsContainer,
  BookDetailsContent,
  ContactDetails,
  FormContainer,
  TripDetails,
  CheckoutBtn,
} from "./book-details.styles";
import plane from "../../assets/Vector.png";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constant";
import axios from "axios";
import { useUserContext } from "../../context/userContext";
import moment from "moment";

export const BookDetails = () => {
  const { currentUser } = useUserContext();
  const flight = JSON.parse(localStorage.getItem("selectedFlight")!);

  const [formValues, setFormValues] = React.useState({
    fullName: currentUser?.user?.fullName,
    email: currentUser?.user?.email,
    country: "",
    phoneNumber: currentUser?.user?.phoneNumber,
    gender: currentUser?.user?.gender,
    dateOfBirth: "",
    title: "",
  });

  console.log("FORM VALUES", formValues);
  let { offerId, passengerId } = useParams();

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
      const payload = {
        type: "instant",
        phone_number: formValues.phoneNumber,
        email: formValues.email,
        born_on: formValues.dateOfBirth,
        title: formValues.title,
        gender: formValues.gender,
        family_name: formValues.fullName?.substring(
          0,
          formValues.fullName?.indexOf(" ")
        ),
        given_name: formValues.fullName?.substring(
          formValues.fullName?.indexOf(" ") + 1
        ),
      };

      console.log("PAYLOAD", payload);
      const url = `${BASE_URL}/flight/orders?selected_offers=${offerId}&passenger_id=${passengerId}`;
      const response = await axios.post(url, payload);
      if (response.status === 201) navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <BookDetailsContainer>
      <BookDetailsContent>
        <TripDetails>
          <p>Trip Details</p>
          <div>
            <div className="trip-meta-data">
              <div className="airport-name">
                <h3>{flight.slices[0].origin.name}</h3>
                <h3>&rarr;</h3>
                <h3>{flight.slices[0].destination.name}</h3>
              </div>
              <div>
                <p>3 Adults 3 Children 2 Infants</p>
              </div>
            </div>
            <div className="journey">
              <span className="journey-type">Departure Journey</span>
              <div className="trip-airline">
                <div className="air-icon">
                  <p>{flight.slices[0].segments[0].operating_carrier.name}</p>
                </div>
                <div className="departure-airline">
                  <span>
                    {moment(flight.slices[0].segments[0].departing_at).format(
                      "YY MMM Do"
                    )}
                  </span>
                  <h3>{flight.slices[0].origin.name}</h3>
                  <span>
                    {moment(flight.slices[0].segments[0].departing_at).format(
                      "h:mm"
                    )}
                  </span>
                </div>
                <div className="departure-airline" id="plane">
                  <div className="plane-duration">
                    <p>
                      {flight.slices[0].duration.split("")[2] +
                        "hr " +
                        flight.slices[0].duration.slice(4, 5) +
                        "mins"}
                    </p>
                    <img src={plane} alt="plane" />
                  </div>
                </div>
                <div className="return-airline">
                  <span>
                    {moment(flight.slices[0].segments[0].arriving_at).format(
                      "YY MMM Do"
                    )}
                  </span>
                  <h3>{flight.slices[0].destination.name}</h3>
                  <span>
                    {moment(flight.slices[0].segments[0].arriving_at).format(
                      "h:mm"
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </TripDetails>
        <ContactDetails>
          <div className="trip-meta-data">
            <h3>Contact details</h3>
          </div>
          <FormContainer>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input"
                value={formValues.email}
                onChange={handleChange}
              />
              <label htmlFor="email">Full Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Surname First"
                className="input"
                value={formValues.fullName}
                onChange={handleChange}
              />
              <label htmlFor="phoneNumber">Contact Number:</label>
              <input
                type="number"
                name="phoneNumber"
                placeholder="Phone Number"
                className="input"
                value={formValues.phoneNumber}
                onChange={handleChange}
              />
              <label htmlFor="date">Date of Birth:</label>
              <input
                type="date"
                name="date"
                className="input"
                value={formValues.dateOfBirth}
                onChange={handleChange}
              />
              {/* <div>
                <strong>Gender:</strong>
                <label htmlFor="male">Male</label>
                <input name="gender" id="male" type="radio" value="male" />

                <label htmlFor="female">Female</label>
                <input name="gender" id="female" type="radio" value="female" />
              </div> */}
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
          <CheckoutBtn onClick={handleSubmit}>
            Book Now: ${flight.total_amount}
          </CheckoutBtn>
        </ContactDetails>
      </BookDetailsContent>
    </BookDetailsContainer>
  );
};
