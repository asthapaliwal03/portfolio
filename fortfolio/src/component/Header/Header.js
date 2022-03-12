import React from 'react';
import Cta from './Cta.js';
import './header.css';
import frontpage from '../../assets/frontpage.png';
import { Link } from 'react-router-dom';
import HeaderSocial from './HeaderSocial.js';

export default function Header() {
  return (
    <header>
    <div className='container header-container'>
    <h5>Hello I'm</h5>
    <h1>ASTHA PALIWAL</h1>
    <h5 className="text-light">Fullstack Developer</h5>
    <Cta/>
    <HeaderSocial/>
    <div className='img-div'>
    <img src={frontpage} alt='astha'/>
    </div>
    <Link to='/contact' className='scroll-down'>Scroll Down</Link>
    </div>    

    </header>
  )
}
