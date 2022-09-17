import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import service from "../services/service";
import BookCard from "./TaskCard";

import TaskCard from "./TaskCard";
import Header from './Header'


const Home = (props) => {
  if (!props.manage){
    props.update()
  }
  // const [bookList, setBookList] = useState([]);

  // const displayData = () => {
  //   service.getData().then((res) => {
  //     setBookList(res.data);
  //   });
  // };
  // useEffect(() => {
  //   displayData();
  // }, []);
  // console.log(bookList);
console.log(props);
  return (
    <div style={{display:"flex",flexWrap:'wrap',margin:'2rem'}}>
      {props.list.map(ele=>{
        // console.log(ele);
        return <BookCard BookName={ele.BookName} BookDesc={ele.BookDesc} manage={props.manage} id={ele.id} onclick={props.onclick}/>
      })}


    </div>
  );
};

export default Home;
