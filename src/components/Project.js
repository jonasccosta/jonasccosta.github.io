import React from 'react'

export default function Project({projects}) {
    

  return (
    projects.map(project =>{
        return(
            <div className={(project.name === "Recovery Resources Map" ? 'carousel-item active  ' : 'carousel-item')} key={project.name}>
                <div className="card bg-light row-3 mb-0 p-2 ms-0 me-0 min-vh-100">
                    <h4 className="card-title text-secondary ms-3 me-3 mt-3 mb-5">{project.name}</h4>
                    <div className='rounded mb-5 ms-6 me-6 '>
                        <img src={project.image} className="card-img-top rounded" alt="..."></img>

                    </div>
                    
                    
                    <div className="card-body ms-6 me-6 p-0 mb-4">

                        <p className="card-text ms-0 me-0 text-justify">{project.description}</p>
                    </div>
                    <div className="card-body ms-6 me-6 mb-4 p-0">
                        <p className='h5 text-secondary ms-0 me-0 fw-bold'>Skills</p>
                        <p className="text-primary ms-0 me-0 ">{project.skills}</p>
                    </div>
                </div>
      
             </div>
            
        )
    })
    
    


  )
}
