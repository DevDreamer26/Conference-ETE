import React from 'react';
import './Contact.css';

const Contact = () => {
    const handleSubmit=()=>{
        alert("Submitted successfuly !")
    }
  return (
    <>
    <div className="contact-main">
        <div className="map-container">
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2674.4808093699635!2d91.66247658878726!3d26.141487365135216!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a4555cf6051a5%3A0x64825bdb6f421d41!2sDepartment%20of%20Electronics%20%26%20Telecommunication%20Engineering%2C%20Assam%20Engineering%20college!5e0!3m2!1sen!2sin!4v1708881428353!5m2!1sen!2sin"
  width={600}
  height={450}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

          
        </div>
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have questions or need assistance? Feel free to reach out to us.</p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" />

        <label htmlFor="phone">Mobile no:</label>
        <input type="number" id="phone" name="phone" placeholder="Your Mobile number" />    

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your Message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
    </div>
    
    </>
  );
};

export default Contact;
