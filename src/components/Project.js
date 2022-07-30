import React from 'react'

export default function Project({projects}) {
    

  return (
    projects.map(project =>{
        return(
            <div className="card row mb-4 p-2 ms-0 me-0" key={project.name}>
                <h4 className="card-title text-secondary mb-3">{project.name}</h4>
                <div className='rounded mb-3'>
                    <img src={project.image} className="card-img-top rounded" alt="..."></img>

                </div>
                
                 
                <div className="card-body">

                    <p className="card-text text-primary">{project.description}</p>
                </div>
                <div className="card-body">
                    <p className='h5 fw-bold'>Skills</p>
                    <p className="text-primary">{project.skills}</p>
                </div>
            </div>
        )
    })
    
    


  )
}
