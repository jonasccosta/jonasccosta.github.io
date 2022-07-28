import React from 'react'
import ContactItem from './ContactItem';
import email_logo from '../assets/email_logo.png';
import github_logo from '../assets/github_logo.png';
import linkedin_logo from '../assets/linkedin_logo.png';

export default function ContactPageContent() {
    const contacts = [
        {logo: email_logo, name: "Email", link: "mailto:jonas-costa72@hotmail.com"}, 
        {logo: github_logo, name: "GitHub", link: "https://github.com/jonasccosta/"}, 
        {logo: linkedin_logo, name: "LinkedIn", link: "https://www.linkedin.com/in/jonasccosta/"} 
    ]

  return (
    <div className='container me-auto ms-auto w-50 h-100'>
        <p className='h1 mt-5 mb-5 text-secondary m'>Contact</p>
        <p className='text-light fs-6'>
        If you’re interested in what I do or have an opportunity that you think I would be a good fit for, feel free to reach out!  I welcome any comments or feedback.
        </p>

        <div className='d-flex justify-content-between w-100'>
            <ContactItem contacts={contacts}/>
        </div>
    </div>
  )
}
