import React from 'react'

export default function Hobbie({hobbies}) {
  return (
    hobbies.map(hobbie =>{
        return (
            <div className='card row mb-4 p-2 ms-0 me-0'>
                <p className='card-title h4 text-secondary'>{hobbie.name}</p>
                <div className='row card-body'>
                    <div className='col-sm-9 text-primary'>
                        {hobbie.text}
                    </div>
                    <div className='col-sm-3'>
                        <div className="row border border-4 border-secondary p-0 m-0 rounded-pill shadow" style={{minHeight: '150px', minWidth: '150px'}}>
                            <img src={hobbie.image} className="img-fluid rounded-pill p-0 m-0 mx-auto " alt="..." ></img>
                                    </div>
                        </div>
                </div>
            </div>
    )})
  )
}
