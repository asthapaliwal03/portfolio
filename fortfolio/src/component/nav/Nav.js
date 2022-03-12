import React from 'react'
import './nav.css'
import {HiHome} from 'react-icons/hi';
import {BiUserPin,BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import {GrContact} from 'react-icons/gr';

export default function Nav() {
  return (
    <nav>
    <NavLink className='link' to='/'><HiHome/></NavLink>
    <NavLink className='link' to='/about'><BiUserPin/></NavLink>
    <NavLink className='link' to='/experience'><BiBook/></NavLink>
    <NavLink className='link' to='/service'><RiServiceLine/></NavLink>
    <NavLink className='link' to='/contact'><GrContact/></NavLink>
    </nav>
  )
}
