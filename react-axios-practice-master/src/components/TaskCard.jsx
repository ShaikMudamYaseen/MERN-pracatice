import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function TaskCard(props) {
  return (
    <Card sx={{minWidth:"300px",margin:"10px",backgroundColor:"#0d47a1",color:"white" ,display:"flex",justifyContent:"space-evenly",flexDirection:"column",boxShadow:"0px 0px 12px gray",borderRadius:"10px"}}>
      <CardContent >
        <Typography gutterBottom variant="h5" component="div"  sx={{textAlign:"center",fontWeight:"bold"}}>
          {props.taskName}
        </Typography>
        <Typography variant="body2" align='center' >{props.taskDescription}
          
        </Typography>
      </CardContent>
      <CardActions  sx={{justifyContent:"end"}}>
        <Button size="small" variant='contained' color='error' sx={{maxWidth:"50px",marginRight:"10px",marginBottom:"10px"}} onClick={()=>props.deleteTask(props.id)}>Delete</Button>
      </CardActions>
    </Card>
  );
}
