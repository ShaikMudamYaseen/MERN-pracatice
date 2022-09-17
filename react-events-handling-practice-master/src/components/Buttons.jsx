import { Button } from 'react-bootstrap'
import React from 'react-bootstrap'


const Buttons = ({count, onClick}) => {
    const l=[]
    for(var i=0;i<count;i++){
        l.push(i+1)
      
    }
    console.log(l);
  return (
    <div>
      {count>0?
      l.map((element)=>{
        // console.log(element);
        return (
        <Button style={{margin:"10px"}} variant="secondary" onClick={()=>onClick(element)}>Botton-{element}</Button>)
        // <button onClick={()=>onClick(element)}>ghibhh</button>

      }):<></>

      
    
    }
    </div>
  )
}

export default Buttons
