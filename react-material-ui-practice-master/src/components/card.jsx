import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from './one.jpg'
export default function MediaCard() {
  return (
    <Card sx={{ display:"flex",maxWidth: "550px" ,flexDirection:"row" ,margin:"20px"}}>
      <div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={'justify'}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      </div>
      <CardMedia
        component="img"
        height="185"
        image={Image}
        alt="green iguana"
        
      />
    </Card>
  );
}
