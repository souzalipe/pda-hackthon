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
        height: "12rem",
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
          <Box>{rating ? rating : "Sem avaliação"}</Box>
          <Typography>{category}</Typography>
          <Typography>
            {city}, {country}
          </Typography>
          <Box sx={{ display: "flex", alignSelf: "bottom", flexWrap: "wrap" }}>
            {amenities.length > 0 ? amenities.map((amenitie, index) => (
              <Chip key={index} label={amenitie.label} />
            )) : 
            <Chip label={"Sem comodidades"} />
            }
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
