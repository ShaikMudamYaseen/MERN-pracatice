import { Box, display } from "@mui/system";
import React from "react";
import service from "../Services/service";
import TaskCard from "./TaskCard";

const DisplayTask = (props) => {
  // let list=[]
  // service.getData().then((res) => {
  //   list=res.data
  //   console.log(res.data);

  //   })
  // console.log(props.playersList);

  return (
    <Box sx={{display:"flex",justifyContent:"center"}}>

    <Box sx={{display:"flex",flexWrap:"wrap"}}>
    { props.taskList!=null? props.taskList.map(ele=>
      

      <TaskCard taskName={ele.taskName} taskDescription={ele.taskDescription} key={ele.id} id={ele.id} deleteTask={props.deleteTask}/>

    ):<></>
    
    }

    </Box>
    
    
    
    </Box>
  
    );
};

export default DisplayTask;
