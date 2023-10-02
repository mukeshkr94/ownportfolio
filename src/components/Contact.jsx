import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
import {motion} from 'framer-motion';


const Contact = () => {
  const [success, setSuccess] = useState(false)
// email setup

  const form = useRef();
  const nameInputRef = useRef('');
  const emailInputRef = useRef('');
  const messageInputRef = useRef('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vjx775g', 'template_8ieimcl', form.current, 'SFtxRIEalqvbWuoQn')
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
          nameInputRef.current.value='';
          emailInputRef.current.value='';
          messageInputRef.current.value='';
         
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="contact" id='Contact'>
      <div className="contact-text">
        {/* <span>Get in Touch</span> */}
        <motion.span
          initial={{left:'-9rem'}}
          whileInView={{left:'9rem'}}
          transition={{duration:2, type:'spring'}}
        >Contact me</motion.span>
        
      </div>
      <div className="contact-form">
        <form id="form" ref={form} onSubmit={sendEmail}>
          <label for="fname">Name :</label>
          <br />
          <input type="text" name='user_name' ref={nameInputRef}  placeholder="Enter your name" required/>
          <br />
          <label for="lname">Email :</label>
          <br />
          <input type="email" name='user_email' ref={emailInputRef} placeholder="Enter your email" required/>
          <br />
          <label for="lname">Message :</label>
          <br />
          <textarea name='message' ref={messageInputRef} placeholder="Enter your message" required />
          <br />
          <br />
          <button type="submit">Send Mail</button>
        </form>
        <span className='success'>{success ? 'Thanks for contacting me..!' : ''}</span>
        <div className="blur" style={{background:'#c1f5ff', top:'10rem'}}></div>
      </div>
    </div>
  );
};

export default Contact;
