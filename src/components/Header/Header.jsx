import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/logo/476905062_1144419557228910_1001797474761144907_n.jpg';

function Header(){
    const [navOpen, setNavOpen] = useState(false);

    return (
        <div id='header-styles'>
            <nav>
                <span className='main-nav'>
                    <img src={logo} />
                    <div className='burger-container'>
                        <button className={`burger ${navOpen ? 'active' : ''}`} onClick={() => setNavOpen(prev => !prev)}>&#9776;</button>
                        <div className={`burger-nav ${navOpen ? 'active' : ''}`}>
                            <NavLink to='/'>მთავარი</NavLink>
                            <NavLink to='/professions'>გზამკვლევი</NavLink>
                            <NavLink to='/about-us'>ჩვენს შესახებ</NavLink>
                            <NavLink to='/contact-us'>კონტაქტი</NavLink>
                        </div>
                    </div>
                    <div className="basic-nav">
                        <NavLink to='/'>მთავარი</NavLink>
                        <NavLink to='/professions'>გზამკვლევი</NavLink>
                        <NavLink to='/about-us'>ჩვენს შესახებ</NavLink>
                        <NavLink to='/contact-us'>კონტაქტი</NavLink>
                    </div>
                </span>
                <span className='tset-nav'>
                    <NavLink to='/test' className='test'>პროფესიის არჩევა</NavLink>
                </span>
            </nav>
        </div>
    );
}

export default Header;