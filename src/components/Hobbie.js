import React from 'react'
import hobbies from '../assets/data/hobbies'

export default function Hobbie() {
  return (
    hobbies.map(hobbie =>{
        return (
            <div key={hobbie.name}>
                <div className='row-3 mb-0 p-2 ms-0 me-0'>
                <h4 className=' text-secondary mt-3 mb-5'>{hobbie.name}</h4>
                <div className='row mb-4 p-0 ms-6 me-6'>
                    { (hobbie.name === "Ceramics" || hobbie.name === "Reading") && (<>
                    <div className='col-sm-3 me-5 text-light text-justify'>
                        <div className="row border border-4 border-secondary p-0 m-0 rounded-pill " style={{minHeight: '200px', minWidth: '200px'}}>
                            <img src={hobbie.image} className="img-fluid rounded-pill p-0 m-0 mx-auto " alt="..." ></img>
                                    </div>
                    </div>
                    <div className='col-sm-8 text-light'>
                        {hobbie.text}
                    
                        </div>
                    </>)}

                    { (hobbie.name === "Hiking" || hobbie.name === "Cooking") && (<>
                    <div className='col-sm-8 me-5 text-light text-justify'>
                        {hobbie.text}
                    </div>
                    <div className='col-sm-3 text-light'>
                        <div className="row border border-4 border-secondary p-0 m-0 rounded-pill " style={{minHeight: '200px', minWidth: '200px'}}>
                            <img src={hobbie.image} className="img-fluid rounded-pill p-0 m-0 mx-auto " alt="..." ></img>
                                    </div>
                    
                        </div>
                    </>)}
                </div>
            </div>
            </div>

    )})
  )
}
