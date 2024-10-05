import React from 'react'
import './Header.css'
import ahmedImage from '../../Assets/ahmed.jpg';
import mailIcon from '../../Assets/Mail-Icon.png';
import lnIcon from '../../Assets/In-Icon.png';



export default function Header() {
    return (
        <div>
            <img src={ahmedImage} className='ahmedImage' alt="Ahmed" />
            <div className="header--info">
                <h1>Ahmed Alomari</h1>
                <h2> Web Developer</h2>
                <h3> Scrimba.com</h3>
            </div>
            <div className='btn-container'>
                <button className="email--btn"><img src={mailIcon} alt="mail"></img>Email</button>
                <button className="ln--btn"><img src={lnIcon} alt="linkedin"></img>Linkedln</button>
            </div>
        </div> 
            
            
        
    );
}