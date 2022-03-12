import React from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin } from 'react-icons/bs';
import {GoMarkGithub} from 'react-icons/go';

export default function 
() {
  return (
    <div className='header-social'>
    <a  className='link' href='https://www.linkedin.com/in/astha-paliwal-07a154193/' target='_blank'>
    <BsLinkedin/>
    </a>
    <a  className='link' href='https://github.com/asthapaliwal03' target='_blank'>
    <GoMarkGithub/>
    </a>
    </div>
  )
}
