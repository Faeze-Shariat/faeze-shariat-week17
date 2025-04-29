import React from 'react'

function Modal({showModal, onClose , onConfirm}) {
    if (!showModal) return null;

  return (
    <div>
        <p>مطمئنی؟</p>
        <button onClick={onConfirm}>حذف</button>
        <button onClick={onClose}>انصراف</button>
    </div>
  )
}

export default Modal