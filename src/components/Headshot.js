import React from 'react'
import Costa_Jonas from '../assets/Costa_Jonas.jpg';

export default function Headshot() {
  return (
    <div className="row border border-4 border-secondary p-0 m-0 rounded-pill shadow" style={{ width: '266px', height: '400px'}}>
        <img src={Costa_Jonas} className="img-fluid rounded-pill p-0 m-0 mx-auto " alt="..."></img>
    </div>
  )
}
