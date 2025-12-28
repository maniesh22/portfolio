import React from 'react'
export default function ResumeCTA(){
  return (
    <div className='flex items-center gap-3'>
      <a className='inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded' href='/Manish_Prajapati_Resume.pdf' download>
        Download Resume
      </a>
      <a className='underline' href='#/projects'>See projects</a>
    </div>
  )
}
