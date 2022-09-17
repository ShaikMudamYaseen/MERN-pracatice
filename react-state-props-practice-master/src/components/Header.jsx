import React from 'react'

const Header = (props) => {
  return (
    <div className='header'>
        <img src={props.image} alt="userImage" />
        <p>{props.userName}</p>

      
    </div>
  )
}

export default Header
