import React from 'react'
import { useParams } from 'react-router-dom'

const ManageCard = () => {
    const {id}=useParams()
  return (
    <div>
        {id}
      
    </div>
  )
}

export default ManageCard
