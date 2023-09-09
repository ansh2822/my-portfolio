import React from 'react'
import './about.css'
import ME from '../../assets/about-me.png'
import { TbAward } from 'react-icons/tb'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () =>
{
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About me</h2>

            <div className='container about_container'>
                <div className="about__me">
                    <div className='about__me-image'>
                        <img src={ME} alt="About me" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <TbAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>1+ years working</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>10+ clients</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>10+ completed </small>
                        </article>
                    </div>
                    <p>👋 Hello! I'm a passionate Computer Science major with a relentless drive to learn and grow in the world of technology. My journey through the digital landscape has equipped me with a versatile skill set that spans various programming languages and tools, including HTML, CSS, JavaScript, React.js, C, C++, Python, MongoDB, SQL, Node.js, and API development.</p>
                    <a href='#contact' className='btn btn-primary'>Reach Me</a>
                </div>
            </div>
        </section>
    )
}

export default About
