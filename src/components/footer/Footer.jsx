import React from 'react'
import './footer.css'
import { FaXTwitter } from 'react-icons/fa6'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BiLogoDiscordAlt } from 'react-icons/bi'
import { FaHome } from 'react-icons/fa'

const Footer = () =>
{
    return (
        <footer>
            <a href='#' className='footer__logo'><FaHome /></a>
            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>

            </ul>

            <div className='footer__socials'>
                <a href='https://x.com/Anshu920597?t=2MKuAtahe_jwfKo3sTGC7Q&s=09' target='_blank'><FaXTwitter /></a>
                <a href='https://instagram.com/ansh28_05?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==' target='_blank'><AiOutlineInstagram /></a>
                <a href='https://discord.com/users/ansh_2228' target='_blank'><BiLogoDiscordAlt /></a>
            </div>

            <div className="footer__copyright">
                <small>Copyright © 2023 Anshu. All Rights Reserved.</small>
            </div>
        </footer>
    )
}

export default Footer
