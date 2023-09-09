import React, { useState, useEffect } from 'react';
import './header.css';
import CTA from '../header/CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () =>
{
    const [jobTitles, setJobTitles] = useState(["Full Stack Developer", "Programmer"]);
    const [currentJobIndex, setCurrentJobIndex] = useState(0);
    const [displayedJobTitle, setDisplayedJobTitle] = useState("");
    const [letterIndex, setLetterIndex] = useState(0);

    useEffect(() =>
    {
        const currentIndex = currentJobIndex;
        const currentJobTitle = jobTitles[currentIndex];
        const currentLetter = currentJobTitle[letterIndex];

        if (currentLetter)
        {
            const timeoutId = setTimeout(() =>
            {
                setDisplayedJobTitle(prevTitle => prevTitle + currentLetter);
                setLetterIndex(prevIndex => prevIndex + 1);
            }, 100);

            return () => clearTimeout(timeoutId);
        } else
        {
            setTimeout(() =>
            {
                setLetterIndex(0);
                setDisplayedJobTitle("");
                setCurrentJobIndex(prevIndex => (prevIndex + 1) % jobTitles.length);
            }, 1000);
        }
    }, [currentJobIndex, letterIndex, jobTitles]);

    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Anshu Kumar</h1>
                <div className="job-title-container">
                    <h5 className="text-light text-change">{displayedJobTitle}</h5>
                </div>                <CTA />
                <HeaderSocials />

                <div className='me'>
                    <img src={ME} alt='me' />
                </div>

                <a href='#contact' className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    );
}

export default Header;
