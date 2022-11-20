import moment from "moment";
import {
  FlightListContainer,
  FlightListWrapper,
  FlightCard,
  FlightCardBody,
  FlightCardHeader,
  FlightDestination,
  FlightDuration,
  FlightLogo,
  FlightOrigin,
  FlightPrice,
} from "./flight-list.styles";

export const FlightList = ({ flights }: any) => {
  return (
    <FlightListContainer>
      <FlightListWrapper>
        {flights.map((flight: any) => (
          <FlightCard key={flight.id} to={`/offer/${flight.id}`}>
            <FlightCardHeader>
              <h3>Departure Journey</h3>
              <p>{moment(flight.departure_date).format("MMM Do YYYY")}</p>
            </FlightCardHeader>
            <FlightCardBody>
              <FlightLogo>
                <img
                  src={
                    flight.slices[0].segments[0].operating_carrier
                      .logo_symbol_url
                  }
                  alt={flight.slices[0].segments[0].operating_carrier.name}
                />
              </FlightLogo>
              <FlightOrigin>
                <h2>
                  {moment(flight.slices[0].segments[0].departing_at).format(
                    "h:mm"
                  )}
                </h2>
                <p>{flight.slices[0].origin.name}</p>
              </FlightOrigin>
              <FlightDuration>
                <p>
                  {flight.slices[0].duration.split("")[2] +
                    "hr " +
                    flight.slices[0].duration.slice(4, 5) +
                    "mins"}
                </p>
              </FlightDuration>
              <FlightDestination>
                <h2>
                  {moment(flight.slices[0].segments[0].arriving_at).format(
                    "h:mm"
                  )}
                </h2>
                <p>{flight.slices[0].destination.name}</p>
              </FlightDestination>
              <FlightPrice>
                <h2>${flight.total_amount}</h2>
              </FlightPrice>
            </FlightCardBody>
          </FlightCard>
        ))}
      </FlightListWrapper>
    </FlightListContainer>
  );
};
