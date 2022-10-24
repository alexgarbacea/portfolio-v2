import React from 'react'
import { workExperience } from '../Configurations';

const Experience = () => {
    const getMonthVisual = (month) => {
        if (month < 10) return `0${month}`
        else return month
    }

    const workPeriod = (index) => {
        const value = workExperience[index]
        let toReturn = `${getMonthVisual(value.from.m)}/${value.from.y} - `
        const toAppend = value.present ? 'Present' : `${getMonthVisual(value.to.m)}/${value.to.y}`
        return `${toReturn}${toAppend}`
    }

    const workTime = (index) => {
        const value = workExperience[index]
        const startDate = new Date(value.from.y, value.from.m - 1, 1)
        const endDate = value.present ? new Date() : new Date(value.to.y, value.to.m - 1, 1)

        let months;
        months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
        months -= startDate.getMonth();
        months += endDate.getMonth();

        const years = Math.floor(months/12);
        months -= years*12;
        const toReturn = years > 0 ? `${years} ${years > 1 ? 'years' : 'year'}
        ${months > 0 ? ` ${months} months` : ''}` : `${months} months`
        return toReturn;
    }

    const returnTimeline = () => {
        let pos = false;
        return workExperience.map((val, i) => {
            pos = !pos
            return (
                <div key={`${val.comp} - ${i}`}
                className={pos ? `timeline-container t-left` : `timeline-container t-right`}>
                    <div className='timeline-content'>
                        <div className='experience-box'>
                            <h2><span className='c-color'>{val.comp}</span> - {val.title}</h2>
                            <div className='experience-period'>
                                <p className='c-color'>{workPeriod(i)}</p>
                                <p>{workTime(i)}</p>
                            </div>
                            <div className='experience-description'>
                                <ul>
                                    {val.description}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <section className='comp-section' id='experience'>
            <div className='top-title'><span>Experience</span></div>
            <div className='timeline-years'>{ new Date().getFullYear() }</div>
            <div className='timeline'>
                {returnTimeline()}
            </div>
            <div className='timeline-years'>{ workExperience[workExperience.length-1].from.y }</div>
        </section>
    )
}

export default Experience