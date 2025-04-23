import React from 'react'
import './MainHeader.css'
import Navbar from '../navbar/Navbar'


const MainHeader = () => {
    return (
        <div className='mainheader'>
            <Navbar />
            <h1>Present your business in a <br/> whole new way
            </h1>
            <p>Quickly design and customize responsive mobile-first sites with <br /> Bootstrap, the world’s most popular front-end open source toolkit!</p>
           <div className='btns'>
           <button className='btn_l'>Get Started</button>
           <button className='btn_r'>Learn More</button>
           </div>
        </div>
    )
}

export default MainHeader