import React from 'react'
import projects from '../assets/data/projects'

export default function Project() {
    

  return (
    projects.map(project =>{
        return(<div key={project.name} className='mb-6'> 
                <h4 className="card-title text-secondary ">{project.name}</h4>
                <div className='rounded mb-4 mt-4 ms-3 me-3 '>
                    <img src={project.image} className="card-img-top rounded" alt="..."></img>

                </div>
                <div className="card-body mb-4">

                    <p className="text-light ms-0 me-0 text-justify">{project.description}</p>
                </div>
                <div className="card-body mb-4 p-0">
                    <p className='h5 text-secondary ms-0 me-0 fw-bold'>Skills</p>
                    <p className="text-light ms-0 me-0 ">{project.skills}</p>
                </div>
            </div>    
            
        )
    })
    
    


  )
}
