import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Service = ({service}) => {
    const {name, description, img, alt} = service;
    console.log(service);
    return (
      <Card sx={{ maxWidth: 345, boxShadow: 0 }}>
        <CardMedia
          component="img"
          style={{ width: "auto", margin: "0 auto " }}
          height="140"
          image={img}
          alt={alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    );
};

export default Service;