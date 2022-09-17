import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import Buttons from './components/Buttons';

function App() {
  const [count,setCount]=useState(0)
  const [clicked,setClicked]=useState(0)
  const increaseCount=()=>{
    setCount(count+1)
  }
  const setlatestClicked=(id)=>{
    setClicked(id)
  }
  return (
    <div style={{display:'flex' ,flexDirection:'column', margin:"20px"}}>
      <div style={{display:'flex',justifyContent:"center"}}>
      <h1 style={{marginRight:"5rem"}}>Counter-{count}</h1>
      <h1>last clicked button-{clicked}</h1>
      </div>
      <Button style={{width:"150px",alignSelf:'center',margin:"4rem"}} variant="success" onClick={increaseCount}>Add Button</Button>
      <Buttons onClick={setlatestClicked} count={count}/>

    </div>
  );
}

export default App;
