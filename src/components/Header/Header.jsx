import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/logo/476905062_1144419557228910_1001797474761144907_n.jpg';

function Header(){
    return (
        <div id='header-styles'>
            <nav>
                <span className='main-nav'>
                    <img src={logo} />
                    <NavLink to='/'>მთავარი</NavLink>
                    <NavLink to='/professions'>გზამკვლევი</NavLink>
                    <NavLink to='/about-us'>ჩვენს შესახებ</NavLink>
                    <NavLink to='/calendar'>კალენდარი</NavLink>
                    <NavLink to='/contact-us'>კონტაქტი</NavLink>
                </span>
                <span className='registration'>
                    <NavLink to='/sign-up' className='signup'>რეგისტრაცია</NavLink>
                    <NavLink to='/sign-in' className='login'>ავტორიზაცია</NavLink>
                </span>
            </nav>
        </div>
    );
}

export default Header;