import React from 'react'
import contacts from '../assets/data/contact'

export default function ContactItem() {
  return (
    contacts.map(contact =>{
        return (
            <div key={contact.name} className="col-3 mt-5 mx-auto text-center">
                 <a href={contact.link} className="">
                    <img src={contact.logo} className="img-fluid w-25" alt="..."></img>
                    <p className='text-light fs-5'>{contact.name}</p>
                </a>
                 
            </div>
        )
    })
  )
}
