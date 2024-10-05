import React from 'react';
import "./Footer.css";
import ahmedGit from '../../Assets/GitHub-Icon.png';
import ahmedTwitter from '../../Assets/Twitter-Icon.png';
import ahmedIns from '../../Assets/Instagram-Icon.png';



export default function Footer () {
    return(
        <div className="footer--section">
            <img src={ahmedGit} className='github' alt="Ahmed's Github"></img>
            <img src={ahmedTwitter} className='twitter' alt="Ahmed's Twitter"></img>
            <img src={ahmedIns} className='instagram' alt="Ahmed's Instagram"></img>
        </div>
    );
}