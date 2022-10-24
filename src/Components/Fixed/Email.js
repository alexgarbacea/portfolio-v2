import React from 'react'
import { email } from '../../Configurations'

const Email = () => {
  return (
    <section className='email-section corner-section'>
        <a href={`mailto:${email}`} title={email} target='_blank' rel='noreferrer' className='link-color deg-90-text'>
            {email}
        </a>
    </section>
  )
}

export default Email