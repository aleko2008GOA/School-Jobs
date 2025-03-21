import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/logo/476905062_1144419557228910_1001797474761144907_n.jpg';

function Header(){
    return (
        <div className='header-styles'>
            <Link to='/'>
                <img src={logo} />
            </Link>
            <nav>
                <Link to='/'>Programs</Link>
                <Link to='/contact-us'>Contact us</Link>
                <Link to='/professions'>Professions</Link>
                <Link to='/requests'>Requests</Link>
                <Link to='/test'>Test</Link>
                <Link to='/sign-in'>
                    <button>Sign In</button>
                </Link>
                <Link to='/sign-up'>
                    <button>Sign up</button>
                </Link>
            </nav>
        </div>
    );
}

export default Header;