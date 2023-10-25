import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Project1.png'
import IMG2 from '../../assets/Project2.png'
import IMG3 from '../../assets/Project-3.png'
import IMG4 from '../../assets/Project4.png'
import IMG5 from '../../assets/Project5.png'
import IMG6 from '../../assets/Project6.png'


const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Resume Builder',
        github: 'https://github.com/ansh2822/Resume-creator.github.io',
        demo: 'https://ansh2822.github.io/Resume-creator.github.io/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Code Translator',
        github: 'https://github.com/ansh2822/Code_Translator.github.io',
        demo: 'https://code-translator-pi.vercel.app/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Workout Tracker',
        github: 'https://github.com/ansh2822/Workout-Tracker',
        demo: 'https://ansh2822.github.io/Workout-Tracker/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Split Bill',
        github: 'https://github.com/ansh2822/SPLIT_BILL',
        demo: 'https://split-bill-beta.vercel.app/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Currency Converter',
        github: 'https://github.com/ansh2822/currency-conversion.git',
        demo: 'https://currency-conversion-ewr9.vercel.app/'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Prompt Forge',
        github: 'https://github.com/ansh2822/promptforge',
        demo: 'https://promptforge.vercel.app/'
    }
]


const Portfolio = () =>
{
    return (
        <section id='portfolio'>
            <h5>Work Showcase</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                {data.map(({ id, image, title, github, demo }) =>
                {
                    return (
                        <article className='portfolio__item' key={id}>
                            <div className="portfolio__item-image">
                                <img src={image} alt={`Project ${id}`} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} className='btn' target='_blank'>Github</a>
                                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Portfolio
