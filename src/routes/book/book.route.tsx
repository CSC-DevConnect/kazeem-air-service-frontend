import { ButtonBox, HeroContent } from "../../components/hero/hero.styles";
import { BookContainer, BookBox, BookHero } from "./book.styles";
import Plane from "../../assets/Vector.png";
import DownArrow from "../../assets/Polygon 1.png";
import User from "../../assets/Vector (2).png";
import Economy from "../../assets/Vector (1).png";
import Booking from "../../assets/Vector (3).png";
import AlarmAdd from "../../assets/carbon_alarm-add.png";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import React, { ChangeEvent, ChangeEventHandler } from "react";
import { FlightList } from "../../components";
import { BASE_URL } from "../../constant";

enum Cabin_Class {
  "Economy" = "economy",
  "First" = "first",
  "Premium_Economy" = "premium_economy",
  "Business" = "business",
}

enum Trip_Type {
  "Round_trip" = "round_trip",
  "One_way" = "one_way",
}

export const Book = () => {
  const [formValues, setFormValues] = React.useState({
    cabin_class: Cabin_Class.Economy,
    origin: "",
    destination: "",
    departure_date: "",
    return_departure_date: "",
  });
  const [airlines, setAirlines] = React.useState<any[]>([]);
  const [tripType, setTripType] = React.useState<Trip_Type>(
    Trip_Type.Round_trip
  );
  const [allFlights, setAllFlights] = React.useState<any[]>([]);

  const getAirlines = async () => {
    const response = await axios.get(
      `${BASE_URL}/flight/airports?countryCode=NG`
    );
    setAirlines(response.data.data);
  };

  React.useEffect(() => {
    getAirlines();
  }, []);

  const handleChange: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const {
    cabin_class,
    origin,
    destination,
    departure_date,
    return_departure_date,
  } = formValues;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let response;
    try {
      if (tripType === Trip_Type.Round_trip) {
        response = await axios.post(`${BASE_URL}/flight/two_way_offer`, {
          cabin_class,
          origin,
          destination,
          departure_date,
          return_origin: origin,
          return_destination: destination,
          return_departure_date,
        });
      } else {
        response = await axios.post(`${BASE_URL}/flight/offer`, {
          cabin_class,
          origin,
          destination,
          departure_date,
        });
      }
      setAllFlights(response.data.flight);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BookContainer>
      <BookHero>
        <HeroContent>
          <BookBox>
            <form onSubmit={handleSubmit}>
              <ul>
                <li>
                  <img src={Plane} alt="plane" />
                  <select
                    name="trip_type"
                    onChange={(e) => {
                      setTripType(e.target.value as Trip_Type);
                    }}
                  >
                    <option disabled selected>
                      Select Journey Type:
                    </option>
                    {(Object.keys(Trip_Type) as (keyof typeof Trip_Type)[]).map(
                      (key) => (
                        <option key={key}>{key}</option>
                      )
                    )}
                  </select>
                </li>
                <li>
                  <img src={User} alt="user" />
                  <span>1 adult</span>
                  <img src={DownArrow} alt="down arrow" />
                </li>
                <li>
                  <img src={Economy} alt="economy" />
                  <select name="cabin_class" id="" onChange={handleChange}>
                    <option disabled selected>
                      Cabin Class
                    </option>
                    {(
                      Object.keys(Cabin_Class) as (keyof typeof Cabin_Class)[]
                    ).map((key) => (
                      <option key={key}>{key}</option>
                    ))}
                  </select>
                </li>
              </ul>
              <div className="form">
                <div className="airline">
                  <label>From:</label>
                  <select name="origin" onChange={handleChange}>
                    {airlines &&
                      airlines.map((airline) => (
                        <option key={airline.id} value={airline.iata_code}>
                          {airline.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="airline">
                  <label>To:</label>
                  <select name="destination" onChange={handleChange}>
                    {airlines &&
                      airlines.map((airline) => (
                        <option key={airline.id} value={airline.iata_code}>
                          {airline.name}
                        </option>
                      ))}
                  </select>
                </div>
                <input
                  type="date"
                  name="departure_date"
                  value={formValues.departure_date}
                  onChange={handleChange}
                />
                <input
                  type="date"
                  name="return_departure_date"
                  value={formValues.return_departure_date}
                  onChange={handleChange}
                />
                <ButtonBox>
                  <button>
                    <FiSearch />
                  </button>
                </ButtonBox>
              </div>
              <ul>
                <li>
                  <img src={Booking} alt="Booking" />
                  <span>my booking</span>
                </li>
                <li>
                  <img src={AlarmAdd} alt="Alarm-add" />
                  <span>Cabin status</span>
                </li>
                <li>
                  <img src={Plane} alt="Plane" />
                  <span>charter Cabin</span>
                </li>
              </ul>
            </form>
          </BookBox>
        </HeroContent>
      </BookHero>
      {allFlights.length > 0 && <FlightList flights={allFlights} />}
    </BookContainer>
  );
};
