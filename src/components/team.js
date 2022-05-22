import React from 'react';
import Icon1 from '../public/girl7.jpg';
import BG1 from '../public/background.jpeg';
import '../styles/team.css';
import '../styles/App.css';

const team = () => {
    return (
        <div className='team-container' id='team-container'>
            <p className='Team-ex'>
                Our Team Member
            </p>
            <div className='Image'>
                <figure className='snip1336'>
                    <img src={BG1} alt="back"/>
                    <figcaption>
                        <img src={Icon1} alt="profile" className='profile' />
                        <h2>Shun Funaki<span>Enginner</span></h2>
                        <p>I'm founder of this Project</p>
                        <a href='#' className='follow'>Follow</a>
                    </figcaption>
                </figure>
                <figure className='snip1336 2'>
                    <img src={BG1} alt="back"/>
                    <figcaption>
                        <img src={Icon1} alt="profile" className='profile' />
                        <h2>Shun Funaki<span>Enginner</span></h2>
                        <p>I'm founder of this Project</p>
                        <a href='#' className='follow'>Follow</a>
                    </figcaption>
                </figure>
                <figure className='snip1336 2'>
                    <img src={BG1} alt="back"/>
                    <figcaption>
                        <img src={Icon1} alt="profile" className='profile' />
                        <h2>Shun Funaki<span>Enginner</span></h2>
                        <p>I'm founder of this Project</p>
                        <a href='#' className='follow'>Follow</a>
                    </figcaption>
                </figure>
                <figure className='snip1336 2'>
                    <img src={BG1} alt="back"/>
                    <figcaption>
                        <img src={Icon1} alt="profile" className='profile' />
                        <h2>Shun Funaki<span>Enginner</span></h2>
                        <p>I'm founder of this Project</p>
                        <a href='#' className='follow'>Follow</a>
                    </figcaption>
                </figure>
                <figure className='snip1336 2'>
                    <img src={BG1} alt="back"/>
                    <figcaption>
                        <img src={Icon1} alt="profile" className='profile' />
                        <h2>Shun Funaki<span>Enginner</span></h2>
                        <p>I'm founder of this Project</p>
                        <a href='#' className='follow'>Follow</a>
                    </figcaption>
                </figure>
                <figure className='snip1336 2'>
                    <img src={BG1} alt="back"/>
                    <figcaption>
                        <img src={Icon1} alt="profile" className='profile' />
                        <h2>Shun Funaki<span>Enginner</span></h2>
                        <p>I'm founder of this Project</p>
                        <a href='#' className='follow'>Follow</a>
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}

export default team