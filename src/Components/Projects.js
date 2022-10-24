import React from 'react'
import { myProjects } from '../Configurations';
import Icon from './Icons/Icon';

const Projects = () => {
  return (
    <section className='comp-section' id='projects'>
        <div className='top-title'><span>Projects</span></div>
        <div className='project-section'>
            {
                myProjects.map((val, i) => {
                    return (
                    <div key={`${val.title} - ${i}`} className='project-wrapper'>
                        <div>
                            <a href={val.links[0].url} target='_blank' >
                                <h2>{val.title}</h2>
                            </a>
                            <p>{val.description}</p>
                            <ul className='post-tags'>
                                {
                                    val.tags.map((tVal, tI) => {
                                        return <li key={tI}>{tVal}</li>
                                    })
                                }
                            </ul>
                            <div className='flex f-wrap' style={{gap:'1em'}}>
                                {
                                    val.links.map((lVal, lI) => {
                                        return (
                                            <a key={lI} href={lVal.url} target='_blank' >
                                                <Icon name={lVal.title} />
                                            </a>
                                        ) 
                                    })
                                }
                            </div>
                        </div>
                        {
                            val.picture && 
                            <a href={val.links[0].url} target='_blank' >
                                <img className='project-image' src={val.picture} alt={val.title} />
                            </a>
                        }
                        
                    </div>
                    )
                })
            }
            <div>For more projects please visit <a href='https://github.com/alexgarbacea?tab=repositories' target='_blank'
            className='c-color c-font'>github.com/alexgarbacea</a></div>

            <div>Check out my games on <a href='https://play.google.com/store/apps/dev?id=5777513003852495025' target='_blank'
            className='c-color c-font'>GooglePlay</a></div>
        </div>
    </section>
  )
}

export default Projects