import React from 'react'
import {FcApproval} from "react-icons/fc"

import './Testimonials.css';

const Testimonials = () => {
    const wellowTextStyle = { color: 'yellow' };
    const backgroundStylls = {
        backgroundImage: "url('https://img.freepik.com/free-vector/abstract-bokeh-gradient-background_52683-59231.jpg?size=626&ext=jpg&ga=GA1.1.623741277.1686718373&semt=ais')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100vw',
        margin: 0,
      };
  return (
    <div style={backgroundStylls}>
    <div className='testimonials'>
        <div className='testimonial-text'>
            <h3>Testimonials</h3>
            <h1>User love Netglobe</h1>
            <p style={wellowTextStyle}>See what our members are saying. Trusted by 1200+ world class businesses</p>
            <a href="/">Read all 2,432 reviews</a>
        </div>
        <div className='testimonial-cards'>
            <div className='cardu'>
                <img src="https://images.hdqwalls.com/wallpapers/brunette-girls-model-4k-nn.jpg" alt="" />
                <p>You made it so simple. Our new way of doing trade has become so much simple.</p>
                <div className='icons'>
                    <a href="/">@Seatha</a>
                    <FcApproval size={18} className='icon' />
                </div>
            </div>
            <div className='cardu'>
                <img src="https://img.freepik.com/premium-photo/close-up-portrait-yong-woman-casual-portrait-positive-view-big-smile-beautiful-isolated-blue-color-background_525549-4744.jpg" alt="" />
                <p>I just love how these people build this finance service that is so flexible and easy to use.</p>
                <div className='icons'>
                    <a href="/">@Jenifer</a>
                    <FcApproval size={18} className='icon'/>
                </div>
            </div>
            <div className='cardu'>
                <img src="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg" alt="" />
                <p>Netglobe very professional- highly recommended for personal and businesses.</p>
                <div className='icons'>
                    <a href="/">@Ayesha</a>
                    <FcApproval size={18} className='icon'/>
                </div>
            </div>
            <div className='cardu'>
                <img src="https://media.istockphoto.com/id/1056257342/photo/portrait-of-joyful-professional.jpg?s=612x612&w=0&k=20&c=D9H23OM1-heW-xjvmQftBp_YMbZh-n9KFnCb2hE3SHo=" alt="" />
                <p>I am always happy and feel secure that the transaction between me and my client</p>
                <div className='icons'>
                    <a href="/">@Rudra</a>
                    <FcApproval size={18} className='icon'/>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Testimonials