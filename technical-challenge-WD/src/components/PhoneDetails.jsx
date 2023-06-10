import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function PhoneDetails({ selectedPhone }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          image={`/assets/images/${selectedPhone.imageFileName}`}
          alt={selectedPhone.name}
        />
        <CardContent>
          <Typography variant="caption" color="text.secondary">
            {selectedPhone.manufacturer}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {selectedPhone.name}
          </Typography>

          <br />
          <Typography variant="body2" color="text.secondary">
            {selectedPhone.description}
          </Typography>
          <br />
          <Typography variant="h2" color="text.primary">
            {selectedPhone.price} &euro;
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
