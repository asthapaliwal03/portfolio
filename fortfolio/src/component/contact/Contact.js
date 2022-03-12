import React from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {FaFacebookSquare} from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  return (
    <section>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className='container contact_container'>
    <div className='contact_option'>
    
    <article>
    <AiOutlineMail/>
    <h3>Email</h3>
    <h4>asthapaliwal.035@gmail.com</h4>
    <a href='mailto:asthapaliwal.035@gmail.com'>Send a message</a>
    </article>

    <article>
    <FaFacebookSquare/>
    <h3>Messenger</h3>
    <h4>Facebook</h4>
    <a href='http://m.me/astha.paliwal.035'>Send a message</a>
    </article>

    <article>
    <FaFacebookSquare/>
    <h3>Email</h3>
    <h4>asthapaliwal.035@gmail.com</h4>
    <a href='mailto:asthapaliwal.035@gmail.com'>Send a message</a>
    </article>
    </div>
    {/*END OF THE OPTIONS*/}
    <form action="">
    
    </form>
    </div>
    </section>
  )
}
