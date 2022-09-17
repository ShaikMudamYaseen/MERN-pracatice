import React from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import service from "../Services/service"

const AddTask = (props) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setDescription] = useState("");
  const task = {
    taskName: taskName,
    taskDescription: taskDescription,
  };
  const addData = (task) => {
     task.taskName!=""||task.taskDescription!="" ? service
      .postData(task)
      .then()
      .catch((err) => console.log(err)):console.error("must enter task name and task description");
      setTaskName("")
      setDescription("")
      
    //  setTaskList([...taskList,task])


    // console.log(getplayers());
  };
  return (
    <Box sx={{ maxWidth: "600px", margin: "0px auto" }}>
      <Grid
        container
        sx={{
          border: "1px solid black",
          margin: "40px",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Grid item xs={12}>
          <TextField
            label="Task Name"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "20px" }}
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Task Description"
            variant="outlined"
            multiline
            fullWidth
            value={taskDescription}
            sx={{ marginTop: "20px" }}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Button
          variant="contained"
          sx={{ marginTop: "30px" }}
          onClick={() => addData(task)}
        >
          Add
        </Button>
      </Grid>
    </Box>
  );
};

export default AddTask;
