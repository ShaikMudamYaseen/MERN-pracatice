import React, { useState } from "react";
import { TextField,Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import service from '../services/service'

const AddBook = () => {
  const [bookName, setBookName] = useState("");
  const [bookDesc, setBookDesc] = useState("");
  const navigate=useNavigate()
  const addData=()=>{
      navigate("/")
      const data={
          BookName:bookName,
          BookDesc:bookDesc
      }
      service.postData(data).then(res=>console.log(res.data)).catch((err)=>console.log(err))



}

  return (
    <form style={{margin:"50px"}}>
      <div style={{display:"flex",flexDirection:"column",maxWidth:"600px",margin:"0px auto"}}>
        <TextField
        style={{marginBottom:"30px"}}
          required
          value={bookName}
          onChange={(e)=>setBookName(e.target.value)}
          id="outlined-required"
          label="Book Name"
          variant="outlined"
        />
        <TextField
          required
          value={bookDesc}
          onChange={(e)=>setBookDesc(e.target.value)}
          id="outlined-required"
          label="Book Description"
          variant="outlined"
          multiline
        />
      </div>
      <div style={{display:"flex",maxWidth:"600px",margin:"20px auto"}}>
      <Button variant="contained" color="primary" onClick={addData}>ADD</Button>
      </div>
    </form>
  );
};

export default AddBook;
