import React from 'react';
import Icon1 from '../public/girl7.jpg';
<<<<<<< HEAD
import Icon2 from '../public/girl100.jpg';
import Icon3 from '../public/girl101.jpg';
import Icon4 from '../public/girl102.jpg';
import Icon5 from '../public/girl103.jpg';
import Icon6 from '../public/girl104.jpg';
=======
import Icon2 from '../public/girl11.jpg';
>>>>>>> 19c1fd5ef206c502c68d3922f988a23015016e6f
import BG1 from '../public/background.jpeg';
import BG2 from '../public/background.jpeg';
import BG3 from '../public/background.jpeg';
import BG4 from '../public/background.jpeg';
import BG5 from '../public/background.jpeg';
import BG6 from '../public/background.jpeg';
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
                    <img src={BG1} alt="back" />
                    <figcaption>
                        <img src={Icon1} alt="profile" className='profile' />
                        <h2>Udoshi(卯年)<span>Enginner PM</span></h2>
                        <p>I'm founder of this Odoshi-Project</p>
                        <a href='https://twitter.com/sf0904' className='follow'>Twitter</a>
<<<<<<< HEAD
=======
                    </figcaption>
                </figure>
                <figure className='snip1336 2'>
                    <img src={BG1} alt="back"/>
                    <figcaption>
                        <img src={Icon2} alt="profile" className='profile' />
                        <h2>kam1natsuki12<span>Creator</span></h2>
                        <p>I create the world of Moon. Thank you!</p>
                        <a href='https://twitter.com/kam1natsuki12' className='follow'>Twitter</a>
>>>>>>> 19c1fd5ef206c502c68d3922f988a23015016e6f
                    </figcaption>
                </figure>
                <figure className='snip1336 2'>
                    <img src={BG2} alt="back" />
                    <figcaption>
<<<<<<< HEAD
                        <img src={Icon2} alt="profile" className='profile' />
                        <h2>kam1natsuki12<span>Creator</span></h2>
                        <p>I create the world of Moon. Thank you!</p>
                        <a href='https://twitter.com/kam1natsuki12' className='follow'>Twitter</a>
=======
                        <img src={Icon1} alt="profile" className='profile' />
                        <h2>yakii<span>Creator</span></h2>
                        <p>I create the world of the Sea. Thank you!</p>
                        <a href='https://twitter.com/yakii_NFT' className='follow'>Twitter</a>
>>>>>>> 19c1fd5ef206c502c68d3922f988a23015016e6f
                    </figcaption>
                </figure>
                <figure className='snip1336 2'>
                    <img src={BG3} alt="back" />
                    <figcaption>
<<<<<<< HEAD
                        <img src={Icon3} alt="profile" className='profile' />
                        <h2>yakii<span>Creator</span></h2>
                        <p>I create the world of the Sea. Thank you!</p>
                        <a href='https://twitter.com/yakii_NFT' className='follow'>Twitter</a>
=======
                        <img src={Icon1} alt="profile" className='profile' />
                        <h2>宇和野そら<span>Creator</span></h2>
                        <p>I create the world of the Cloud. Thank you!</p>
                        <a href='https://twitter.com/uwano5884' className='follow'>Twitter</a>
>>>>>>> 19c1fd5ef206c502c68d3922f988a23015016e6f
                    </figcaption>
                </figure>
                <figure className='snip1336 2'>
                    <img src={BG4} alt="back" />
                    <figcaption>
<<<<<<< HEAD
                        <img src={Icon4} alt="profile" className='profile' />
                        <h2>宇和野そら<span>Creator</span></h2>
                        <p>I create the world of the Cloud. Thank you!</p>
                        <a href='https://twitter.com/uwano5884' className='follow'>Twitter</a>
                    </figcaption>
                </figure>
                <figure className='snip1336 2'>
                    <img src={BG5} alt="back" />
                    <figcaption>
                        <img src={Icon5} alt="profile" className='profile' />
                        <h2>わびさび<span>Manager</span></h2>
                        <p>I manage this Project and create some movie contents!</p>
                        <a href='https://twitter.com/j8uE31bufIrSBZe' className='follow'>Twitter</a>
=======
                        <img src={Icon1} alt="profile" className='profile' />
                        <h2>わびさび<span>Manager</span></h2>
                        <p>I manage this Project and create some movie contents!</p>
                        <a href='https://twitter.com/j8uE31bufIrSBZe' className='follow'>Follow</a>
>>>>>>> 19c1fd5ef206c502c68d3922f988a23015016e6f
                    </figcaption>
                </figure>
                <figure className='snip1336 2'>
                    <img src={BG6} alt="back" />
                    <figcaption>
                        <img src={Icon6} alt="profile" className='profile' />
                        <h2>かまりょー<span>Enginner</span></h2>
                        <p>I manage this Project!</p>
                        <a href='https://twitter.com/RyoKamata' className='follow'>Twitter</a>
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}

export default team