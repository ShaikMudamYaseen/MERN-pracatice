import { useState } from "react";
import axios from 'axios'
import Todo from "./Todo";
import { useEffect } from "react";
import "./App.css"

export default function App() {
  useEffect(() => {
    gettingData()
  }, []);

  const gettingData =()=>{
  axios.get(`http://localhost:4000/todo`)
  .then(res => {
    const data = res.data;
    setList(data);
  })
  .catch(function (error) {
    console.log(error);
  });}


  const [list, setList] = useState([]);
  const [todo, setTodo] = useState("");
  const [id, setId] = useState();

  const handleTodo = (event) => {
    setTodo(event.target.value);
  };

  const handleId = (event) => {
    setId(event.target.value);
    setId()
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setList([...list, { id: id, todoItem: todo }]);
    setTodo("");
  };

  const handleDelete = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <>
      <div className="box1">
        <form action="">
          <label>Enter To Do</label>
          <input
            type="text"
            placeholder="Enter to Do"
            onChange={handleTodo}
            value={todo}
          />
          <label>Enter ID</label>
          <input
            type="text"
            placeholder="Enter ID"
            onChange={handleId}
            value={id}
          />
          <button type="submit" onClick={handleSubmit}>
            Add Todo
          </button>
        </form>
      </div>
      <Todo list={list} handleDelete={handleDelete} />
    </>
  );
}
