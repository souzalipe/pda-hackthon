import { Box, Card, Inset, Text, Strong } from "@radix-ui/themes";
import PropTypes from "prop-types";

export function PlaceCard({
  thumb,
  name,
  category,
  rating,
  hotelNetwork,
  amenities,
}) {
  return (
    <Box maxWidth="250px">
      <Card size="2">
        <Inset clip="padding-box" side="top" pb="current">
          <img
            src={thumb}
            style={{
              display: "block",
              objectFit: "cover",
              width: "100%",
              height: 140,
              backgroundColor: "var(--gray-5)",
            }}
          />
        </Inset>
        <Text>
          <Strong>{name}</Strong>
        </Text>
        <div>{rating}</div>
        <Text>{category}</Text>
        <Text> {hotelNetwork} </Text>
        <div>
          {amenities.map((amenitie, index) => (
            <p key={index}> {amenitie.label} </p>
          ))}
        </div>
      </Card>
    </Box>
  );
}

PlaceCard.propTypes = {
  thumb: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
  rating: PropTypes.number,
  hotelNetwork: PropTypes.string,
  amenities: PropTypes.array,
};
