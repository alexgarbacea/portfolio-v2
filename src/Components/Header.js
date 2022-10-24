import React, {useState} from 'react'
import { navBar } from '../Configurations'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        <div className='mobile-btn-wrapper'>
            <div className={`mobile-btn${isOpen ? ' open' : ''}`} onClick={() => setIsOpen(prev => !prev)}></div>
        </div>
        <header className={`header-section${isOpen ? ' open' : ''}`}>
            <div></div>
            <div className='header-btns'>
                {
                    navBar.map((val, i) => {
                        return <a key={`${val.name} - ${i}`} href={val.url}>{val.name}</a>
                    })
                }
            </div>
        </header>
        </>
    )
}

export default Header