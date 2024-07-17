import React from 'react'
import contacts from './images/contact.png'
function ContactCard({contact}) {
  return (
    <div>
      <div className="item" key={contact.id} >
      <img className="ui avatar image" src={contacts} alt="contact" />

          <div className="content">
            <div className='header'>{contact.name}</div>
            
            <div>{contact.email}</div>
            <i className="trash alternate outline icon" style={{color:"red", marginTop:'7px'}}></i>

          </div>
          
        </div>
    </div>
  )
}

export default ContactCard
