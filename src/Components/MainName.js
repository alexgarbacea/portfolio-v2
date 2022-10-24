import React from 'react'
import { 
    firstDescription, 
    firstName, 
    jobTitle, 
    lastName } 
from '../Configurations'

const MainName = () => {
  return (
    <section className='main-text-section'>
        <div className='c-font c-color bigger-font'>Hello, my name is</div>
        <div className='flex f-wrap main-title'>
            <div>{firstName}</div>
            <div>{lastName}</div>
        </div>

        <div className='flex f-wrap main-undertitle'>
            {
                jobTitle.map((val, i) => {
                    return <div key={`${val} ${i}`}>{val}</div>
                })
            }
        </div>

        <p className='text-paragraph'>{firstDescription}</p>

        <a href='#about' className='c-font c-color bigger-font'>Take a look</a>
    </section>
  )
}

export default MainName