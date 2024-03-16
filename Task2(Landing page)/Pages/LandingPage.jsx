import React from 'react'
import '../assets/LandingPage.css';
import OurServices from './OurServices';
import Testimonials from '../Testimonials';
import FAQ from './Faq';

function LandingPage() {
  return (
    <div>
    <div className="tedy">
    <div className="headom">
    <h1 >Service Center</h1><br/><h2>"Best Repair Center"</h2><br/><h3>Repair Your Appliances in Low Budget</h3>
    </div>
    </div>
    <div className="aboutu" id="aboutme">
    <div class="bottom" id="scroll">
    <div class="quote1"> 
    <h2 >Home Tech Savers</h2>
    <center><img class="prof" src="https://img.freepik.com/free-vector/variety-broken-home-electrical-appliances-flat-item-set-cartoon-damaged-stove-toaster-vacuum-cleaner-laptop-isolated-vector-illustration-collection-household-equipment-concept_74855-13274.jpg?w=2000"></img></center>
    <center>At [Home Tech Savers], we understand the importance of smoothly running home appliances in your daily life. Whether it's a refrigerator that keeps your groceries fresh, a washing machine that ensures your clothes are clean and ready, or a dishwasher that takes care of your post-meal cleanup, these appliances are essential for a comfortable and efficient household.

We are your dedicated partner for all your home appliance repair and maintenance needs. With a team of highly skilled and experienced technicians, we take pride in providing prompt, reliable, and cost-effective solutions to keep your appliances functioning at their best. </center>
     </div></div></div>
     <OurServices/>
     <FAQ/>
     <Testimonials/>
    
            </div>
  )
}

export default LandingPage
