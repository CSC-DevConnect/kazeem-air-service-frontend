import React from "react";
import {
  // HeroBox,
  // ButtonBox,
  HeroContainer,
  HeroContent,
  HeroFooter,
} from "./hero.styles";
// import Plane from "../../assets/Vector.png";
// import DownArrow from "../../assets/Polygon 1.png";
// import User from "../../assets/Vector (2).png";
// import Economy from "../../assets/Vector (1).png";
// import Booking from "../../assets/Vector (3).png";
// import AlarmAdd from "../../assets/carbon_alarm-add.png";
// import { FiSearch } from "react-icons/fi";
// import { airlines } from "../../utils/airlines";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <HeroContainer>
      <HeroContent>
        {/* <HeroBox>
          <ul>
            <li>
              <img src={Plane} alt="plane" />
              <span>round-trip</span>
              <img src={DownArrow} alt="down arrow" />
            </li>
            <li>
              <img src={User} alt="user" />
              <span>1 adult</span>
              <img src={DownArrow} alt="down arrow" />
            </li>
            <li>
              <img src={Economy} alt="economy" />
              <span>economy</span>
              <img src={DownArrow} alt="down arrow" />
            </li>
          </ul>
          <form>
            {" "}
            <label>From:</label>
            <select>
              {airlines.map((airline) => (
                <option key={airline.IATA_code}>{airline.airport_name}</option>
              ))}
            </select>
            <label>To:</label>
            <select>
              {airlines.map((airline) => (
                <option key={airline.IATA_code}>{airline.airport_name}</option>
              ))}
            </select>
            <input type="date" title="From" />
            <input type="date" title="To" />
            <ButtonBox>
              <button>
                <FiSearch />
              </button>
            </ButtonBox>
          </form>
          <ul>
            <li>
              <img src={Booking} alt="Booking" />
              <span>my booking</span>
            </li>
            <li>
              <img src={AlarmAdd} alt="Alarm-add" />
              <span>flight status</span>
            </li>
            <li>
              <img src={Plane} alt="Plane" />
              <span>charter flight</span>
            </li>
          </ul>
        </HeroBox> */}
        <HeroFooter>
          <h2>Connect with your family and friends</h2>
          <p>
            Get your Flight booked today and spend quality time with friends an
            family.
          </p>
          <button onClick={() => navigate("/book")}>book now</button>
        </HeroFooter>
      </HeroContent>
    </HeroContainer>
  );
};
