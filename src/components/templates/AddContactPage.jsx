import { useState } from "react"
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AddContactPage({dispatch}) {
    const navigate = useNavigate()

    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [job , setJob] = useState('');
    const [phone , setPhone] = useState('');

    function addHandler(){  
      const id = Date.now()
      console.log({ id, name, email, job, phone }) 
      dispatch({type: 'AddContact' , payload: {id , name , email , job , phone}});
      navigate('/')
      console.log('first')
    }

  return (
    <div>
        <form action="">
            <span>نام و نام خانوادگی</span><input type="text" 
            onChange={(e)=> setName(e.target.value)}/>

            <span>ایمیل</span><input type="email" 
            onChange={(e)=> setEmail(e.target.value)}/>

            <span>شغل</span><input type="text" 
            onChange={(e)=> setJob(e.target.value)}/>

            <span>تلفن همراه</span><input type="number" 
            onChange={(e)=> setPhone(e.target.value)}/>

            <button onClick={addHandler}>اعمال تغییرات</button>
            <button><NavLink to='/'>برگشت</NavLink></button>
        </form>

    </div>
  )
}

export default AddContactPage