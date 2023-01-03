import React from 'react'

export default function Hobbie({hobbies}) {
  return (
    hobbies.map(hobbie =>{
        return (

            <div className={(hobbie.name === "Hiking" ? 'carousel-item active ' : 'carousel-item ')} key={hobbie.name}>
                <div className='card row mb-4 p-2 ms-0 me-0'>
                <h4 className='card-title text-secondary ms-3 me-3 mt-3 mb-5'>{hobbie.name}</h4>
                <div className='row card-body mb-4 p-0 '>
                    <div className='col-sm-5 ms-6 me-2 text-primary text-justify'>
                        {hobbie.text}
                    </div>
                    <div className='col-sm-4 align-items-center justify-content-center'>
                        <div className="row border border-4 border-secondary p-0 m-0 rounded-pill " style={{minHeight: '200px', minWidth: '200px'}}>
                            <img src={hobbie.image} className="img-fluid rounded-pill p-0 m-0 mx-auto " alt="..." ></img>
                                    </div>
                        </div>
                </div>
            </div>
            </div>

            
    )})
  )
}
