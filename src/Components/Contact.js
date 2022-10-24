import React from 'react'
import { email, social } from '../Configurations'

const Contact = () => {
  return (
    <section className='comp-section' id='contact'>
        <div className='top-title'><span>Contact</span></div>
        <h2>Let's get in touch</h2>
        <p>I'm looking forward to hearing from you!</p>
        <p>My Email: <a href={`mailto:${email}`}><span className='c-color'>{email}</span></a></p>
        {
            social.map((val, i) => {
                return (<p key={i}>My {val.name}: <a href={val.url} rel="noreferrer" target='_blank'>
                    <span className='c-color'>here</span></a>
                </p>)
            })
        }

    </section>
  )
}

export default Contact