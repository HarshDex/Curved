import React from 'react'
import './ContactUs.css'
const ContactUs = () => {
  return (
    <div className="contact-us-container">
        <form>
            <div className="name">
                <label htmlFor="name">Name</label>
                <input type="text" name='name' />
            </div>
            <div className="email">
                <label htmlFor="email">Email</label>
                <input type="text" name='email' />
            </div>
            <div className="phone">
                <label htmlFor="phone">Phone</label>
                <input type="text" name='phone' />
            </div>
            <div className="message">
                <label htmlFor="message">Message</label>
                <input type="text" name='message' />
            </div>
            <button>Submit</button>
        </form>
        <div className="contact-us-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197.18825701235397!2d-122.48259438846317!3d37.7428600720013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1708008680219!5m2!1sen!2sin" width="700" height="357"   loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default ContactUs