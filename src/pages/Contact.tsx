import React from 'react'
export default function Contact() {
  return (
    <div id='contact'>
      <h1 className='text-3xl font-bold'>Contact</h1>
      <p className='mt-4'>You can download my resume or reach me at <strong>manish381364@gmail.com</strong>.</p>
      <a className='mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded' href='/Manish_Prajapati_Resume.pdf' download>Download Resume (PDF)</a>
    </div>
  )
}
