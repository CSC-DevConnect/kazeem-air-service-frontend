import {
  DashboardActivities,
  DashboardContainer,
  DashboardContent,
  DashboardContentBtn,
  DashboardContentBtnOutline,
  DashboardHero,
  DashboardTravels,
  DashboardTrips,
  DashboardWelcomeBtn,
  DashboardWelcomeNote,
  DashboardWelcomeText,
} from "./dashboard.styles";
import Vector from "../../assets/Vectord.png";
import TimeTraceker from "../../assets/arcticons_simple-time-tracker.png";
import Miles from "../../assets/game-icons_path-distance.png";
import Duration from "../../assets/game-icons_duration.png";
import RockingChair from "../../assets/game-icons_rocking-chair.png";
import { useUserContext } from "../../context/userContext";
import axios from "axios";
import React from "react";
import { User } from "../../context/context-types";

export const Dashboard = () => {
  const { currentUser } = useUserContext();
  const [profile, setProfile] = React.useState<User>();
  const [orders, setOrders] = React.useState<any>([]);

  const getUserProfile = async () => {
    try {
      const response = await axios.get(
        `https://kazeem-air-service-production.up.railway.app/api/v1/users/${currentUser?.user.id}`,
        {
          headers: {
            Authorization: `Bearer ${currentUser?.tokens.access.token}`,
          },
        }
      );
      setProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserOrders = async () => {
    try {
      const response = await axios.get(
        `https://kazeem-air-service-production.up.railway.app/api/v1/flight/orders`,
        {
          headers: {
            Authorization: `Bearer ${currentUser?.tokens.access.token}`,
          },
        }
      );
      console.log(response.data);
      setOrders(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getUserProfile();
    getUserOrders();
  }, [currentUser]);

  return (
    <DashboardContainer>
      <DashboardHero>
        <DashboardWelcomeText>
          Welcome, <span>{profile?.fullName}</span>
        </DashboardWelcomeText>
        <DashboardWelcomeNote>
          <h3>Have access to the best travel experience</h3>
          <p>
            Unlock promo and enjoy benefit of each class and also when you
            upgrade your travel request, we look forward in delivering the best
            service for our customer.
          </p>
        </DashboardWelcomeNote>
        <DashboardWelcomeBtn>Learn more</DashboardWelcomeBtn>
      </DashboardHero>
      <DashboardContent>
        <h3>My Dashboard</h3>
        <DashboardTrips>
          <h4>Upcoming Trips</h4>
          <DashboardContentBtn>Add a trip</DashboardContentBtn>
        </DashboardTrips>
        <DashboardActivities>
          <img src={Vector} alt="vector" />
          <p>Your recent activities</p>
          <hr />
          <p>You don’t have any activity at the moment.</p>
          <div>
            <DashboardContentBtnOutline>
              See your summary
            </DashboardContentBtnOutline>
            <DashboardContentBtn>View my activities</DashboardContentBtn>
          </div>
        </DashboardActivities>
        <h4>How far have you traveled?</h4>
        <DashboardTravels>
          <h5>Last 12 months</h5>
          <div className="travel-container">
            <div className="travel-box">
              <img src={TimeTraceker} alt="travel" />
              <h3>0 hour(s)</h3>
              <h3>0 minute(s)</h3>
              <p>Time spent on Air.</p>
            </div>
            <div className="travel-box">
              <img src={Miles} alt="travel" />
              <h3>0 Miles</h3>
              <p>Distance flown around the world.</p>
            </div>
            <div className="travel-box">
              <img src={Duration} alt="travel" />
              <h3>0 hour(s)</h3>
              <p>Duration of longest flight taken</p>
            </div>
            <div className="travel-box">
              <img src={RockingChair} alt="travel" />
              <h3>0%</h3>
              <p>First or Business Class flight flown.</p>
              <p>0% Economy flights</p>
            </div>
          </div>
          <DashboardContentBtn>View my travel history</DashboardContentBtn>
        </DashboardTravels>
        <h3>Need any help?</h3>
        <p>
          Get exclusive access to 24/7 support and find everything you need.
        </p>
        <DashboardContentBtnOutline>
          Get in touch with us
        </DashboardContentBtnOutline>
      </DashboardContent>
    </DashboardContainer>
  );
};
