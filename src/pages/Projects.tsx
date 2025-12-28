import React from 'react'
import { PageTransition } from '../shared/PageTransition';


export default function Projects() {
  const projects = [
    { title: 'Bit Media App', desc: 'Android app with Jetpack Compose', href: '#' },
    { title: 'JetReader', desc: 'Book tracking app with Firebase', href: '#' },
  ]
  return (
    <PageTransition>
      <div>
        <h1 className='text-3xl font-bold'>Projects</h1>
        <div className='mt-6 grid gap-4 md:grid-cols-2'>
          {projects.map(p => (
            <article key={p.title} className='p-4 border rounded hover:shadow'>
              <h3 className='font-semibold'>{p.title}</h3>
              <p className='text-sm mt-2'>{p.desc}</p>
              <a className='mt-3 inline-block text-indigo-600' href={p.href}>View</a>
            </article>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
