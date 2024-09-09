import React from 'react';
import '../../styles/header-style/header.css'
import logo from '../../img/logo-pj.png';

const Header = () => {
    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>

            <div className='div-header'>
            <h1 className="title-header">PEARL JAM SONGS</h1>
            <img className='logo-pj' src={logo} />
            </div>
        </>
    );
};

export default Header;
