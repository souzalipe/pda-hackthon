import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export function PlaceCard({
  thumb,
  name,
  category,
  rating,
  hotelNetwork,
  amenities,
  address,
}) {
  return (
      <Card size="2">
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

        <Typography>
          <strong>{name}</strong>
        </Typography>
        <div>{rating}</div>
        <Typography>{category}</Typography>
        <Typography> {hotelNetwork} </Typography>
        <Typography>
          {address.city} {address.country}
        </Typography>
        <div>
          {amenities.map((amenitie, index) => (
            <p key={index}> {amenitie.label} </p>
          ))}
        </div>
      </Card>
  );
}

PlaceCard.propTypes = {
  thumb: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
  rating: PropTypes.number,
  hotelNetwork: PropTypes.string,
  amenities: PropTypes.array,
  address: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }),
};
