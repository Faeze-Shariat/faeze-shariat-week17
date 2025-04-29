import React, { useReducer } from 'react';
// import { useState } from "react"
import { NavLink } from "react-router-dom";
import TableContact from '../modules/TableContact';
import AddContactPage from './AddContactPage';

//reducer
function reducer (state , action){
  switch(action.type) {
    case 'AddContact':
      console.log(action.payload)
      return [...state , action.payload]
      

    case 'EditContact':
      return state.map((contact) => {
        contact.id === action.payload.id ? action.payload : contact
      })

    case 'DeleteContact':
      return state.filter((contact) => contact.id != action.payload.id)

    default :
    return state;
  }
}

function HomePage() {
   
    const [state ,dispatch] = useReducer(reducer , [{ id: 1, name: "سینا", email: "sina@gmail.com" }])


  return (
    <div>
      <TableContact contacts={state} dispatch={dispatch}/>
      <button><NavLink to="/addContact" element={<AddContactPage/>}>کاربر جدید اضافه کن</NavLink></button>
    </div>
  )
}

export default HomePage