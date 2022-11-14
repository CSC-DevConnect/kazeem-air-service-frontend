import {
  BookNowFormContainer,
  BookNowFormWrapper,
  FlightCard,
  FlightCardBody,
  FlightCardHeader,
} from "./book-now.styles";
import { IoClose } from "react-icons/io5";

export const BookNowForm = ({ allFlights }: any) => {
  console.log(allFlights);
  return (
    <BookNowFormContainer>
      <h1>Hello world</h1>
      <BookNowFormWrapper>
        {allFlights.map((flight: any) => (
          <FlightCard key={flight.id}>
            <FlightCardHeader>
              <h3>Fight Details</h3>
              <p>Date</p>
            </FlightCardHeader>
            <FlightCardBody></FlightCardBody>
          </FlightCard>
        ))}
      </BookNowFormWrapper>
    </BookNowFormContainer>
  );
};
