import React from "react";
import { HeroBox, HeroContainer, HeroContent, HeroFooter } from "./hero.styles";
import Plane from "../../assets/Vector.png";
import DownArrow from "../../assets/Polygon 1.png";
import User from "../../assets/Vector (2).png";
import Economy from "../../assets/Vector (1).png";
import Booking from "../../assets/Vector (3).png";
import AlarmAdd from "../../assets/carbon_alarm-add.png";
import { FiSearch } from "react-icons/fi";

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroBox>
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
            <input type="text" placeholder="From" />
            <input type="text" placeholder="To" />
            <input type="date" title="From" />
            <input type="date" title="To" />
            <button>
              <FiSearch />
            </button>
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
        </HeroBox>
        <HeroFooter>
          <h2>Connect with your family and friends</h2>
          <p>
            Get your Flight booked today and spend quality time with friends an
            family.
          </p>
          <button>book now</button>
        </HeroFooter>
      </HeroContent>
    </HeroContainer>
  );
};
