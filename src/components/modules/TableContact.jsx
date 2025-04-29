import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Modal from './Modal';
import AddContactPage from '../templates/AddContactPage';


function TableContact({contacts , dispatch}) {
    const [showMenu , setShowMenu] = useState(null);
    const [showModal , setShowModal] = useState(false)
    const [selectedId , setSelectedId] = useState(null)

    function showMenuHandler(id){
        if(showMenu === id){
            setShowMenu(null)
        }else{
            setShowMenu(id)
        }
    }

    function deleteHandler(id){
        setShowModal(true)
        setSelectedId(id)
    }

    function buttonDelete(){
        dispatch({type: 'DeleteContact' , payload: {id: selectedId}})
        setShowModal(false)
    }
   
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>نام کاربر</th>
                    <th>ایمیل</th>
                    <th>ایکون ها</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact) =>(
                    <tr key={contact.id}>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>
                            {showMenu !== contact.id ? <button onClick={() => showMenuHandler(contact.id)}>...</button> :
                            <div>
                                <button onClick={() => deleteHandler(contact.id)}>حذف</button>
                                <button><NavLink to="/addContact" element={<AddContactPage/>}>ویرایش</NavLink></button>
                            </div>}
                            
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <Modal showModal={showModal}
        onClose={() => { setShowModal(false); setSelectedId(null);}}
        onConfirm={buttonDelete}/>
    </div>
  )
}

export default TableContact