import React from 'react'
import hiking from '../assets/hiking.jpg';
import reading from '../assets/reading.jpg'
import cooking from '../assets/cooking.jpg'
import Hobbie from './Hobbie';

export default function HobbiesPageContent() {
    const hobbies = [
        {name: "Hiking", text: "I started hiking at UWC-USA, the international high school I attended in New Mexico. Since my first trip, I have spent in total almost two months hiking and camping. I enjoy being in contact with nature, seeing animals in their natural environment, and the sense of community that can be constructed when hiking in a group. Personally, it is a way to release stress and find joy in the small things around me.", image: hiking},
        {name: "Reading", text: "Growing up, I was always surrounded by books. I started reading when I was four and I have several memories of the time I spent in public libraries, avidly turning pages. My favorite genres are science fiction, drama, and adventure and the most fascinating pieces I have ever read are “Story of Your Life,” by Ted Chiang and “What It Means When a Man Falls From the Sky”, by Lesley Nneka Arimah. Reading allows me to develop empathy as well as gain a broader understanding of the world and its inhabitants.", image: reading},
        {name: "Cooking", text: "For a long time, preparing my meals was a source of anxiety and stress. However, after I left the meal plan my college offered, I had no other choice. Slowly, I became comfortable cooking and baking, and now it is one of the activities I enjoy doing the most. I find a lot of pleasure in knowing exactly how my dishes are prepared and seasoned. My favorite dishes to make are chicken pie, lentils with carrots, and any Brazilian food.", image: cooking}
    ]
  return (
    <div className='container me-auto ms-auto w-50 h-100'>
        <p className='h1 mt-5 mb-5 text-secondary m'>Hobbies</p>
        <p className='text-light fs-6'>
            This is a list of the things I like to do besides writing code and working with software.
        </p>

        <div className='w-100'>
            <Hobbie hobbies={hobbies}/>
        </div>
    </div>
  )
}
