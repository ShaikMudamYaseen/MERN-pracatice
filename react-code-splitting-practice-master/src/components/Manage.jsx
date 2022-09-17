import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Home from "./Home";
import service from "../services/service"

const Manage = (props) => {
  const navigate=useNavigate()
  const handleClick=(idnum)=>{
    service.deleteBook(idnum).then(res=>console.log(res))
    props.update()
    // navigate(`/manage/${idnum}`)


    console.log(idnum);

  }

  return (
    <Home list={props.list} manage="true" onclick={handleClick}/>
  )
};

export default Manage;
