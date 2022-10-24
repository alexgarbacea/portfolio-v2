import React from 'react'
import { technologies, workExperience } from '../Configurations'
import aboutImage from '../Images/about-me.png';

const About = () => {
  return (
    <section className='comp-section' id='about'>
        <div className='top-title'><span>About me</span></div>
        <section className='block-60-20 hov-second'>
            <div>
               <p>
                    Hi! My name is Alexandru Gârbacea.
                    My career in software development started in 2019, right after I started university.
                    Back then I took jobs as a freelancer working with multiple technologies and also improving my client relationships.
                </p>
                <p>
                    After some time I started an Internship at a big corporation 
                    (<span className='c-color'>Siemens</span>) as a Software Engineer and long story short,
                    I am now working at 
                    <span className='c-color'> {workExperience[0].comp} </span>
                    as a <span className='c-color'> {workExperience[0].title}</span> in 
                    <span className='c-color'> {workExperience[0].location}</span>.
                </p> 
                <p>
                    What I have been working with lately:
                </p>
                <ul className='list-3-3'>
                    {
                        technologies.map((val, i) => {
                            return <li key={`${val} - ${i}`}>{val}</li>
                        })
                    }
                </ul>
            </div>
            <div>
                <img className='big-img' style={{filter: 'invert(100%)'}} src={aboutImage} alt='about-me' />
            </div>
        </section>
    </section>
  )
}

export default About