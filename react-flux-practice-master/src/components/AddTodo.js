import React from 'react'

function AddTodo({onReset, onAdd, onSub}) {
  return (
   <div className="flex w-1/2 space-x-3 justify-between items-center">
   <button
     onClick={onAdd}
     className="bg-blue-300 w-44 p-5 rounded-lg"
   >
     +
   </button>
   <button onClick={onReset} className="bg-blue-300 w-44 p-5 rounded-lg">
     Reset
   </button>
   <button
     onClick={onSub}
     className="bg-blue-300 w-44 p-5 rounded-lg"
   >
     -
   </button>
 </div>
  )
}

export default AddTodo