import React from 'react'
import { social } from '../../Configurations'
import Icon from '../Icons/Icon'

const Social = () => {
    return (
        <section className='social-section corner-section'>
        {
            social && social.map(({name, url}, index) => {
                return(
                <li key={`${name} - ${index}`}>
                    <a href={url} title={name} target='_blank' rel='noreferrer' >
                        <Icon name = {name} />
                    </a>
                </li>
                )
            })
        }
        </section>
    )
}

export default Social