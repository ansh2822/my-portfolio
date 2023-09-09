import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

const HeaderSocials = () =>
{
    return (
        <div className='header__socials'>
            <a href='https://www.linkedin.com/in/anshu-kumar-57ab7924a/' target='_blank'><BsLinkedin /></a>
            <a href='https://github.com/ansh2822' target='_blank'><FaGithub /></a>
            <a href='mailto:akanshu028@gmail.com' target='_blank'><SiGmail /></a>
        </div>
    )
}

export default HeaderSocials
