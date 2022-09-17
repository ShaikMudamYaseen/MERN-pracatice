import React from 'react'
import "./App.css"

const TodoList = (props) => {
  console.log(props)
  return (
    <>
      <ul>
        {props.list.map((item) => {
          <div className='box2'>
            <li>{item.todoItem}</li>
            <button onClick={() => props.handleDelete(item.id)}>Delete</button>
          </div>
        })}
      </ul>
    </>
  )
}

export default TodoList