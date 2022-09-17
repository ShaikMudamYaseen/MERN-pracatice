import React, { Component, PropTypes } from 'react'

export default class TodoList extends Component {
   render() {
      return (
         <div className="h-full grid place-items-center text-center">
           <h1 className="text-2xl font-bold text-white">{this.props.todos}</h1>
         </div>
      )
   }
}