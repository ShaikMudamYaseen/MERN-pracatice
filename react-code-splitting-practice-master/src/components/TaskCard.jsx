import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BookCard(props) {
  console.log(props);
  return (
    <Card sx={{ minWidth:"345px",maxWidth:"345px" ,margin:"10px",boxShadow:"0px 0px 5px gray",justifyContent:"space-between",display:"flex",flexDirection:"column",padding:"10px"}}>
      <div><CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.BookName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.BookDesc}
        </Typography>
      </CardContent>
      </div>
      <>
     { props.manage ? <CardActions>
        <Button size="small" variant="contained" color="error" onClick={()=>props.onclick(props.id)}>Delete</Button>
      </CardActions> : <></>
     
     }
     </>
    </Card>
  );
}
