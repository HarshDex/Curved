import React from 'react'
import './Page2.css'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
const Page2 = () => {
  return (
    <div className="page2-container">
        <h1>How to do Yoga</h1>
        <div className="part2-images-container">
            <div className="container1">
                <img src={image1} alt="" />
                <h2>Ashtanga Yoga</h2>
                <p>simply dummy text of the printing and typesetting industry. Lorem</p>
            </div>
            <div className="container2">
                <img src={image2}alt="" />
                <h2>Hatha Yoga</h2>
                <p>simply dummy text of the printing and typesetting industry. Lorem</p></div>
            <div className="container3">
                <img src={image3} alt="" />
                <h2>Kundalini Yoga</h2>
                <p>simply dummy text of the printing and typesetting industry. Lorem</p>
            </div>
        </div>
    </div>
  )
}

export default Page2