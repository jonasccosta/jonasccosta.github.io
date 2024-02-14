import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='footer shadow'>
      <div className="text-center text-light p-4 bg-transparent">
          <small>
              © {year} Jonas Costa
          </small>
    </div>

    </footer>
  )
}
