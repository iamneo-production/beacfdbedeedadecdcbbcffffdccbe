import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const GridCard = ({ imageUrl, title, description1, description2 }) => {
  return (
    <Card style={{ marginTop: "40px" }}>
      <CardMedia
        component="img"
        height="140"
        image={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'}
        alt="Card Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description1}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description2}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GridCard;
