import logo from "./logo.svg";
import { Box, Button, Grid, TextField } from "@mui/material";
import TaskCard from "./components/TaskCard";
import "./App.css";
import AddTask from "./components/AddTask";
import service, { getData } from "./Services/service";
import DisplayTask from "./components/DisplayTask";
import { useState } from "react";
import { useEffect } from "react";

// const getplayers = () => {
//     let l=[]
//     service
//       .getData()
//       .then((res) =>
//       {res.data.map((ele)=>{
//         l.push(ele)
//       })
//         })
//       .catch((err) => console.error(err));
//         // console.log(playersList);
//       return l
//   };
function App() {
  const [taskList, setTaskList] = useState([]);

  useEffect(()=>{
    service.getData().then(res=>{
      // console.log(res.data);
      setTaskList(res.data)
    })
    .catch(err=>console.log(err))
  })
  // console.log(getplayers());
  // console.log(service);

  // setPlayersList(getplayers())
  // getplayers

  // const addData = (task) => {
  //   service
  //     .postData(task)
  //     .then()
  //     .catch((err) => console.log(err));
  //   //  setTaskList([...taskList,task])


  //   // console.log(getplayers());
  // };
  const deleteTask=(id)=>{
    service.deleteData(id).then(res=>console.log(res))
    .catch(err=>console.log(err))

  }

  return (
    // <Box sx={{maxWidth:"500px",margin:"50px auto",backgroundColor:"grey"}}>
    //   <TextField id="filled-basic" label="Filled" variant="filled" fullWidth sx={{margin:"20 auto"}}/>
    //   <TextField id="filled-basic" label="Filled" variant="filled" fullWidth sx={{margin:"0 auto"}}/>

    // </Box>
    <Box container sx={{ minHeight: "100vh" }}>
      <AddTask></AddTask>
      <DisplayTask taskList={taskList} deleteTask={deleteTask}/>
    </Box>
  );
}

export default App;
