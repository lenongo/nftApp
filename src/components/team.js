import React from 'react';
import Icon1 from '../public/girl7.jpg';
import Icon2 from '../public/girl11.jpg';
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
                        <h2>Udoshi(卯年)<span>Enginner PM</span></h2>
                        <p>I'm founder of this Odoshi-Project</p>
                        <a href='https://twitter.com/sf0904' className='follow'>Twitter</a>
                    </figcaption>
                </figure>
                <figure className='snip1336 2'>
                    <img src={BG1} alt="back"/>
                    <figcaption>
                        <img src={Icon2} alt="profile" className='profile' />
                        <h2>kam1natsuki12<span>Creator</span></h2>
                        <p>I create the world of Moon. Thank you!</p>
                        <a href='https://twitter.com/kam1natsuki12' className='follow'>Twitter</a>
                    </figcaption>
                </figure>
                <figure className='snip1336 2'>
                    <img src={BG1} alt="back"/>
                    <figcaption>
                        <img src={Icon1} alt="profile" className='profile' />
                        <h2>yakii<span>Creator</span></h2>
                        <p>I create the world of the Sea. Thank you!</p>
                        <a href='https://twitter.com/yakii_NFT' className='follow'>Twitter</a>
                    </figcaption>
                </figure>
                <figure className='snip1336 2'>
                    <img src={BG1} alt="back"/>
                    <figcaption>
                        <img src={Icon1} alt="profile" className='profile' />
                        <h2>宇和野そら<span>Creator</span></h2>
                        <p>I create the world of the Cloud. Thank you!</p>
                        <a href='https://twitter.com/uwano5884' className='follow'>Twitter</a>
                    </figcaption>
                </figure>
                <figure className='snip1336 2'>
                    <img src={BG1} alt="back"/>
                    <figcaption>
                        <img src={Icon1} alt="profile" className='profile' />
                        <h2>わびさび<span>Manager</span></h2>
                        <p>I manage this Project and create some movie contents!</p>
                        <a href='https://twitter.com/j8uE31bufIrSBZe' className='follow'>Follow</a>
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