import React from 'react'
import { Link } from 'react-router-dom'
export default function ResumeCTA(){
  return (
    <div className='flex items-center gap-3'>
      <a className='inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded' href='/Manish_Prajapati_Resume.pdf' download>
        Download Resume
      </a>
      <Link to='/projects' className='hover:underline'>See projects</Link>
    </div>
  )
}
