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
          <FlightCard key={flight.id} to={`/${flight.id}`}>
            <FlightCardHeader>
              <h3>Departure Journey</h3>
              <p>{flight.updated_at}</p>
            </FlightCardHeader>
            <FlightCardBody>
              <FlightLogo>
                <img
                  src={flight.total_emissions_kg}
                  alt={flight.total_emissions_kg}
                />
              </FlightLogo>
              <FlightOrigin>
                {flight.slices.map((slice: any) => (
                  <div key={slice.id}>
                    <h3>{slice.origin.timezone}</h3>
                    <p>{slice.origin.name}</p>
                  </div>
                ))}
              </FlightOrigin>
              <FlightDuration>
                {flight.slices.map((slice: any) => (
                  <p key={slice.id}>{slice.duration}</p>
                ))}
              </FlightDuration>
              <FlightDestination>
                {flight.slices.map((slice: any) => (
                  <div key={slice.id}>
                    <h3>{slice.destination.timezone}</h3>
                    <p>{slice.destination.name}</p>
                  </div>
                ))}
              </FlightDestination>
              <FlightPrice>
                <h2>{flight.total_amount}</h2>
              </FlightPrice>
            </FlightCardBody>
          </FlightCard>
        ))}
      </FlightListWrapper>
    </FlightListContainer>
  );
};
