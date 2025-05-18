import React from 'react'
import ContactUsTitle from '../components/molecules/ContactUsTitle'
import Navbar from '../components/organisms/Navbar'
import ContactUsForm from '../components/molecules/ContactUsForm'
import Portfolio from './Portfolio'
import PortfolioImage from '../components/atoms/PortfolioImage'
import Footer from '../components/organisms/Footer'

const ContactUs = () => {
  return (
    <div>
    {/* <Navbar/> */}
    <div className='ml-[5%] mt-[6%]'>
    <ContactUsTitle/>
    </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 sm:ml-[5%] mt-[4%] lg:gap-14'>
        <ContactUsForm/>
        <PortfolioImage src='/images/contactUs.png' className='lg:h-[545px] lg:w-[545px] my-10 hidden md:flex'/>
      </div>
      <div className='mt-28'>
      <Footer/>
      </div>
      
    </div>
  )
}

export default ContactUs
