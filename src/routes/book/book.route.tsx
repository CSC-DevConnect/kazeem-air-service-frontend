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
  const [countAdult, setCountAdult] = React.useState(1);
  const [countChild, setCountChild] = React.useState(0);

  const incrementAdult = () => {
    setCountAdult(countAdult + 1);
  };

  const decrementAdult = () => {
    if (countAdult > 1) {
      setCountAdult(countAdult - 1);
    }
  };

  const incrementChild = () => {
    setCountChild(countChild + 1);
  };

  const decrementChild = () => {
    if (countChild > 0) {
      setCountChild(countChild - 1);
    }
  };

  React.useEffect(() => {
    localStorage.setItem("countAdult", String(countAdult));
    localStorage.setItem("countChild", String(countChild));
  }, [countAdult, countChild]);

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
      localStorage.setItem("flights", JSON.stringify(response.data.flight));
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
                <li id="passenger">
                  <img src={User} alt="user" />
                  <div className="passenger">
                    <p>Passenger</p>
                    <div className="passenger-inner">
                      <div className="passenger-type">
                        <p>Adult</p>
                        <table>
                          <tbody>
                            <tr>
                              <td onClick={decrementAdult}>
                                <span>-</span>
                              </td>
                              <td>
                                <span className="count">{countAdult}</span>
                              </td>
                              <td onClick={incrementAdult}>
                                <span>+</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="passenger-type">
                        <p>Children</p>
                        <table>
                          <tbody>
                            <tr>
                              <td onClick={decrementChild}>
                                <span>-</span>
                              </td>
                              <td>
                                <span className="count">{countChild}</span>
                              </td>
                              <td onClick={incrementChild}>
                                <span>+</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
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
                  <div className="form-input">
                    <select name="origin" onChange={handleChange}>
                      <option disabled selected>
                        Select Origin:
                      </option>
                      {airlines &&
                        airlines.map((airline) => (
                          <option key={airline.id} value={airline.iata_code}>
                            {airline.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="airline">
                  <div className="form-input">
                    <select name="destination" onChange={handleChange}>
                      <option disabled selected>
                        Select Destination:
                      </option>
                      {airlines &&
                        airlines.map((airline) => (
                          <option key={airline.id} value={airline.iata_code}>
                            {airline.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="form-inner">
                  <div className="form-input input">
                    <label htmlFor="">Depart</label>
                    <input
                      type="date"
                      name="departure_date"
                      value={formValues.departure_date}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-input input">
                    <label htmlFor="">Return</label>
                    <input
                      type="date"
                      name="return_departure_date"
                      value={formValues.return_departure_date}
                      onChange={handleChange}
                    />
                  </div>
                </div>

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
