import React from 'react'
import './contact.css'
import { BiLogoGmail } from 'react-icons/bi'
import { AiFillLinkedin } from 'react-icons/ai'
import { BiLogoWhatsapp } from 'react-icons/bi'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () =>
{
    const form = useRef();
    const sendEmail = (e) =>
    {
        e.preventDefault();

        emailjs.sendForm('service_m4pcqp1', 'template_k80d8sa', form.current, 'Bhyfr48sCyG48bEJW')
            .then((result) =>
            {
                console.log(result.text);
            }, (error) =>
            {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <section id='contact'>
            <h5>Communication Hub</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <BiLogoGmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>akanshu028@gmail.com</h5>
                        <a href='mailto:akanshu028@gmail.com' target='_blank'>Send a message</a>
                    </article>

                    <article className="contact__option">
                        <AiFillLinkedin className='contact__option-icon' />
                        <h4>LinkedIn</h4>
                        <h5>Anshu Kumar</h5>
                        <a href='https://www.linkedin.com/in/anshu-kumar-57ab7924a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxwtTAFTlT7CuM9S%2FiWi3Tg%3D%3D' target='_blank'>Connect on LinkedIn</a>
                    </article>

                    <article className="contact__option">
                        <BiLogoWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <a href='https://api.whatsapp.com/send?phone=9205972231' target='_blank'>WhatsApp Me</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your full name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
