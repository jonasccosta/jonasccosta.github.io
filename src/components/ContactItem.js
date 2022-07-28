import React from 'react'

export default function ContactItem({contacts}) {
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
