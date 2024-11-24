import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Chip from "@mui/material/Chip";
import { Link as RouterLink } from "react-router-dom";

export function PlaceCard({
  placeID,
  thumb,
  name,
  category,
  rating,
  hotelNetwork,
  amenities,
  address,
  to,
  city,
  country,
}) {
  return (
    <Card
      sx={{
        textDecoration: "none",
        display: "flex",
        maxWidth: "100%",
        height: "10rem",
      }}
      elevation={3}
    >
      <CardActionArea
        sx={{
          display: "flex",
        }}
        component={RouterLink}
        to={to}
      >
        <CardMedia
          component="img"
          height="100%"
          image={thumb}
          sx={{
            objectFit: "cover",
            maxWidth: "18rem",
          }}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Typography>
            <strong>{name}</strong>
          </Typography>
          <Box>{rating}</Box>
          <Typography>{category}</Typography>
          {/* <Typography> {hotelNetwork} </Typography> */}
          <Typography>
            {city}, {country}
          </Typography>
          {/* <Box sx={{ display: "flex", alignSelf: "bottom", flexWrap: "wrap" }}>
            {amenities.map((amenitie, index) => (
              <Chip key={index} label={amenitie.label} />
            ))}
          </Box> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

PlaceCard.propTypes = {
  placeID: PropTypes.number,
  thumb: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
  rating: PropTypes.number,
  hotelNetwork: PropTypes.string,
  amenities: PropTypes.array,
  address: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
};
