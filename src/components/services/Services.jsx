import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () =>
{
    return (
        <section id='services'>
            <h5>Here's What I Do</h5>
            <h2>Services</h2>

            <div className="container services_container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list_icon' />
                            <p>Prioritizing user preferences to create intuitive and engaging user interfaces.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list_icon' />
                            <p>Crafting visually appealing and cohesive designs that align with your brand identity.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list_icon' />
                            <p>Ensuring seamless user experiences across all devices</p>
                        </li>
                        <li>
                            <BiCheck className='service__list_icon' />
                            <p>Implementing subtle animations and micro-interactions to enhance user engagement.</p>
                        </li>
                    </ul>
                </article>

                {/* Start of Web Development */}

                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list_icon' />
                            <p>Building unique, tailored websites from scratch to suit your specific needs and goals.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list_icon' />
                            <p>Seamlessly integrating third-party services, APIs, to extend website functionality.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list_icon' />
                            <p>Writing clean, well-documented code to ensure maintainability and scalability.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list_icon' />
                            <p>Implementing subtle animations and micro-interactions to enhance user engagement.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list_icon' />
                            <p>Rigorous testing to identify and resolve any issues before launch.</p>
                        </li>
                    </ul>
                </article>
                {/* {Start of Content Creation} */}
                <article className="service">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list_icon' />
                            <p>Crafting visually stunning websites tailored to your unique vision.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list_icon' />
                            <p>Crafting engaging, informative, and persuasive content that resonates with readers.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list_icon' />
                            <p>Staying updated with industry trends, algorithms, and best practices in content creation.</p>
                        </li>


                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services
