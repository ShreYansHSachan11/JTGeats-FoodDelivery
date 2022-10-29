
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";
import pic from './images/delivery.png'

const EmailContactForm = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
  
    emailjs.sendForm('service_4tyhezc', 'template_by4rtfm', form.current, 'GcObk7-t4aRh6rkk3')
      .then((result) => {
         console.log('success');
         e.target.reset();
         alert("Thank You :) Your response has been delivered.");
      }, (error) => {
          console.log("error");
      });
  };
  return (
    <div className="contact mg-130">
      <div className="contact-left">
        <p className="p1">
          Do you have a question <br />
          or want to become a seller?
        </p>
        <p className="p2">
          Fill this form and our manager will contact you next 48 hours.
        </p>
        <form ref={form} onSubmit={sendEmail}>
        <div className="input-box">
          <input type="text" placeholder="Your Name" name="from_name" required>
          </input>
          <input type="email" placeholder="Your e-mail" name="email_id" required>
          </input>
        </div>
        <input className="message" type="text" placeholder="Your message" name="message" required/>
        
        <button onSubmit={sendEmail} className="btn2" value="send">



            Submit
        </button>
        </form>
      </div>
      <div className="contact-right"><img src={pic} alt="" srcset="" /></div>
      
    </div>
  );
};

export default EmailContactForm;
