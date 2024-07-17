import {useState} from 'react'

function AddContact() {
    const [contact,setContact]=useState({name:"",email:""})
    const handleChange=(e)=>{
        const{name,value}=e.target
        setContact(prevCont=>({
            ...prevCont,[name]:value
        }))
    }
  return (
    <div className='ui main'>
      <h2>Add contact </h2>
      <form className='ui form'>
       
      <label htmlFor='name'>name</label>
      <input type='text' name='name' placeholder='name' onChange={handleChange} value={contact.name}/>
      <br/>
      <label htmlFor='email'>email</label>
      
       <input type='email' placeholder='enter email' value={contact.email} onChange={handleChange}/>
       <br/>
       <button className="ui button blue">Add</button>
      </form>
    </div>
  )
}

export default AddContact
